/**
 * Codemod for migrating @harrybin/react-common components to the new UI framework agnostic API
 * 
 * This codemod automatically transforms your code to pass MUI components as props to maintain
 * the same visual appearance after upgrading.
 * 
 * Usage:
 *   npx jscodeshift -t codemod.js path/to/your/files
 * 
 * Or for TypeScript files:
 *   npx jscodeshift -t codemod.js --parser=tsx path/to/your/files/**\/*.tsx
 */

module.exports = function transformer(file, api) {
  const j = api.jscodeshift;
  const root = j(file.source);
  let hasChanges = false;

  // Track if we need to import MUI components
  const muiImportsNeeded = new Set();
  
  // Check if the file imports from @harrybin/react-common
  const hasReactCommonImport = root.find(j.ImportDeclaration, {
    source: { value: '@harrybin/react-common' }
  }).length > 0;

  if (!hasReactCommonImport) {
    return file.source; // No changes needed
  }

  // Transform ConfirmationDialog components
  root.find(j.JSXElement, {
    openingElement: { name: { name: 'ConfirmationDialog' } }
  }).forEach(path => {
    const attributes = path.value.openingElement.attributes;
    
    // Check if Dialog components are already provided
    const hasDialogComponent = attributes.some(
      attr => attr.name && attr.name.name === 'DialogComponent'
    );

    if (!hasDialogComponent) {
      // Add MUI component props
      const propsToAdd = [
        { name: 'DialogComponent', value: 'Dialog' },
        { name: 'DialogTitleComponent', value: 'DialogTitle' },
        { name: 'DialogContentComponent', value: 'DialogContent' },
        { name: 'DialogActionsComponent', value: 'DialogActions' },
        { name: 'ButtonComponent', value: 'Button' },
        { name: 'TextComponent', value: 'Typography' }
      ];

      propsToAdd.forEach(({ name, value }) => {
        muiImportsNeeded.add(value);
        attributes.push(
          j.jsxAttribute(
            j.jsxIdentifier(name),
            j.jsxExpressionContainer(j.identifier(value))
          )
        );
      });

      hasChanges = true;
    }
  });

  // Transform NameValueText components
  root.find(j.JSXElement, {
    openingElement: { name: { name: 'NameValueText' } }
  }).forEach(path => {
    const attributes = path.value.openingElement.attributes;
    
    const hasContainerComponent = attributes.some(
      attr => attr.name && attr.name.name === 'ContainerComponent'
    );

    if (!hasContainerComponent) {
      // Add MUI component props
      const propsToAdd = [
        { name: 'ContainerComponent', value: 'Grid', wrapper: '(props) => <Grid container {...props} />' },
        { name: 'ItemComponent', value: 'Grid', wrapper: null },
        { name: 'TextComponent', value: 'Typography', wrapper: null }
      ];

      propsToAdd.forEach(({ name, value, wrapper }) => {
        muiImportsNeeded.add(value);
        
        if (wrapper) {
          // Use inline arrow function for container
          attributes.push(
            j.jsxAttribute(
              j.jsxIdentifier(name),
              j.jsxExpressionContainer(
                j.arrowFunctionExpression(
                  [j.identifier('props')],
                  j.jsxElement(
                    j.jsxOpeningElement(
                      j.jsxIdentifier(value),
                      [
                        j.jsxAttribute(j.jsxIdentifier('container'), null),
                        j.jsxSpreadAttribute(j.identifier('props'))
                      ]
                    ),
                    j.jsxClosingElement(j.jsxIdentifier(value)),
                    []
                  )
                )
              )
            )
          );
        } else {
          attributes.push(
            j.jsxAttribute(
              j.jsxIdentifier(name),
              j.jsxExpressionContainer(j.identifier(value))
            )
          );
        }
      });

      hasChanges = true;
    }
  });

  // Transform ErrorReportDialog components
  root.find(j.JSXElement, {
    openingElement: { name: { name: 'ErrorReportDialog' } }
  }).forEach(path => {
    const attributes = path.value.openingElement.attributes;
    
    const hasBoxComponent = attributes.some(
      attr => attr.name && attr.name.name === 'BoxComponent'
    );

    if (!hasBoxComponent) {
      const propsToAdd = [
        { name: 'BoxComponent', value: 'Box' },
        { name: 'GridContainerComponent', value: 'Grid' },
        { name: 'GridItemComponent', value: 'Grid' },
        { name: 'TextFieldComponent', value: 'TextField' },
        { name: 'TextComponent', value: 'Typography' },
        { name: 'LinkComponent', value: 'Link' }
      ];

      propsToAdd.forEach(({ name, value }) => {
        muiImportsNeeded.add(value);
        attributes.push(
          j.jsxAttribute(
            j.jsxIdentifier(name),
            j.jsxExpressionContainer(j.identifier(value))
          )
        );
      });

      hasChanges = true;
    }
  });

  // Transform Markdown components
  root.find(j.JSXElement, {
    openingElement: { name: { name: 'Markdown' } }
  }).forEach(path => {
    const attributes = path.value.openingElement.attributes;
    
    const hasTextComponent = attributes.some(
      attr => attr.name && attr.name.name === 'TextComponent'
    );

    if (!hasTextComponent) {
      const propsToAdd = [
        { name: 'TextComponent', value: 'Typography' },
        { name: 'LinkComponent', value: 'Link' }
      ];

      propsToAdd.forEach(({ name, value }) => {
        muiImportsNeeded.add(value);
        attributes.push(
          j.jsxAttribute(
            j.jsxIdentifier(name),
            j.jsxExpressionContainer(j.identifier(value))
          )
        );
      });

      hasChanges = true;
    }
  });

  // Add MUI imports if needed
  if (muiImportsNeeded.size > 0 && hasChanges) {
    const muiComponents = Array.from(muiImportsNeeded).sort();
    
    // Check if @mui/material import already exists
    const existingMuiImport = root.find(j.ImportDeclaration, {
      source: { value: '@mui/material' }
    });

    if (existingMuiImport.length > 0) {
      // Add to existing import
      existingMuiImport.forEach(path => {
        const existingSpecifiers = path.value.specifiers || [];
        const existingNames = new Set(
          existingSpecifiers
            .filter(s => s.type === 'ImportSpecifier')
            .map(s => s.imported.name)
        );

        muiComponents.forEach(component => {
          if (!existingNames.has(component)) {
            existingSpecifiers.push(
              j.importSpecifier(j.identifier(component))
            );
          }
        });
      });
    } else {
      // Create new import
      const muiImport = j.importDeclaration(
        muiComponents.map(name => j.importSpecifier(j.identifier(name))),
        j.literal('@mui/material')
      );

      // Insert after react-common import
      root.find(j.ImportDeclaration, {
        source: { value: '@harrybin/react-common' }
      }).forEach(path => {
        j(path).insertAfter(muiImport);
      });
    }
  }

  return hasChanges ? root.toSource({ quote: 'single' }) : file.source;
};
