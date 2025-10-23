# Migration Guide: Upgrading to Framework-Agnostic API

This guide will help you migrate from the old MUI-dependent version of `@harrybin/react-common` to the new framework-agnostic version.

## Overview

The library has been refactored to remove the hard dependency on Material-UI. Components now accept UI framework components as props, with sensible defaults for projects without a UI framework.

## Table of Contents

- [Automatic Migration with Codemod](#automatic-migration-with-codemod)
- [Manual Migration](#manual-migration)
  - [ConfirmationDialog](#confirmationdialog)
  - [NameValueText](#namevaluetext)
  - [ErrorReportDialog](#errorreportdialog)
  - [Markdown](#markdown)
- [Using with Different UI Frameworks](#using-with-different-ui-frameworks)
- [Using Without a UI Framework](#using-without-a-ui-framework)

## Automatic Migration with Codemod

For projects using Material-UI, we provide a codemod to automatically transform your code.

### Prerequisites

Install jscodeshift if you haven't already:

```bash
npm install -g jscodeshift
```

### Running the Codemod

For JavaScript files:
```bash
npx jscodeshift -t node_modules/@harrybin/react-common/codemod.js src/**/*.js
```

For TypeScript/JSX files:
```bash
npx jscodeshift -t node_modules/@harrybin/react-common/codemod.js --parser=tsx src/**/*.tsx
```

Or if you've cloned the repository:
```bash
npx jscodeshift -t codemod.js --parser=tsx path/to/your/project/src
```

### What the Codemod Does

The codemod will:
1. Find all usages of `ConfirmationDialog`, `NameValueText`, `ErrorReportDialog`, and `Markdown` components
2. Add the necessary MUI component props to maintain the same appearance
3. Add or update the `@mui/material` import statement with required components

### Example Transformation

**Before:**
```tsx
import { NameValueText } from '@harrybin/react-common';

<NameValueText name="User" value="John Doe" />
```

**After:**
```tsx
import { NameValueText } from '@harrybin/react-common';
import { Grid, Typography } from '@mui/material';

<NameValueText 
  name="User" 
  value="John Doe"
  ContainerComponent={(props) => <Grid container {...props} />}
  ItemComponent={Grid}
  TextComponent={Typography}
/>
```

## Manual Migration

If you prefer to migrate manually or need to customize the migration, follow these component-specific guides.

### ConfirmationDialog

**Old Usage:**
```tsx
<ConfirmationDialog
  open={true}
  title="Confirm Action"
  text="Are you sure?"
  onClose={handleClose}
/>
```

**New Usage with MUI (same appearance):**
```tsx
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from '@mui/material';

<ConfirmationDialog
  open={true}
  title="Confirm Action"
  text="Are you sure?"
  onClose={handleClose}
  DialogComponent={Dialog}
  DialogTitleComponent={DialogTitle}
  DialogContentComponent={DialogContent}
  DialogActionsComponent={DialogActions}
  ButtonComponent={Button}
  TextComponent={Typography}
/>
```

**New Usage without UI framework:**
```tsx
// Uses default HTML implementations - no imports needed
<ConfirmationDialog
  open={true}
  title="Confirm Action"
  text="Are you sure?"
  onClose={handleClose}
/>
```

### NameValueText

**Old Usage:**
```tsx
<NameValueText name="User" value="John Doe" />
```

**New Usage with MUI (same appearance):**
```tsx
import { Grid, Typography } from '@mui/material';

<NameValueText
  name="User"
  value="John Doe"
  ContainerComponent={(props) => <Grid container direction={props.direction}>{props.children}</Grid>}
  ItemComponent={Grid}
  TextComponent={Typography}
/>
```

**New Usage without UI framework:**
```tsx
// Uses flexbox layout with native HTML
<NameValueText name="User" value="John Doe" />
```

### ErrorReportDialog

**Old Usage:**
```tsx
<ErrorReportDialog
  downloadClicked={handleDownload}
  descChanged={handleDescChange}
  reproChanged={handleReproChange}
  mailChanged={handleMailChange}
  phoneChanged={handlePhoneChange}
  errorReportDescriptions={descriptions}
/>
```

**New Usage with MUI (same appearance):**
```tsx
import { Box, Grid, TextField, Typography, Link } from '@mui/material';

<ErrorReportDialog
  downloadClicked={handleDownload}
  descChanged={handleDescChange}
  reproChanged={handleReproChange}
  mailChanged={handleMailChange}
  phoneChanged={handlePhoneChange}
  errorReportDescriptions={descriptions}
  BoxComponent={Box}
  GridContainerComponent={Grid}
  GridItemComponent={Grid}
  TextFieldComponent={TextField}
  TextComponent={Typography}
  LinkComponent={Link}
/>
```

**New Usage without UI framework:**
```tsx
// Uses native HTML form elements
<ErrorReportDialog
  downloadClicked={handleDownload}
  descChanged={handleDescChange}
  reproChanged={handleReproChange}
  mailChanged={handleMailChange}
  phoneChanged={handlePhoneChange}
  errorReportDescriptions={descriptions}
/>
```

### Markdown

**Old Usage:**
```tsx
<Markdown>
  # Hello World
  This is **markdown**
</Markdown>
```

**New Usage with MUI (same appearance):**
```tsx
import { Typography, Link } from '@mui/material';

<Markdown
  TextComponent={Typography}
  LinkComponent={Link}
>
  # Hello World
  This is **markdown**
</Markdown>
```

**New Usage without UI framework:**
```tsx
// Uses native HTML elements
<Markdown>
  # Hello World
  This is **markdown**
</Markdown>
```

## Using with Different UI Frameworks

The new API works with any React UI framework. See [USAGE_EXAMPLES.md](./USAGE_EXAMPLES.md) for examples with:
- Material-UI
- shadcn/ui
- Chakra UI
- Ant Design
- Or create your own custom implementations

## Using Without a UI Framework

All components now have default implementations that work without any UI framework:

```tsx
import { ConfirmationDialog, NameValueText } from '@harrybin/react-common';

// These work out of the box with native HTML and inline styles
<NameValueText name="User" value="John Doe" />

<ConfirmationDialog
  open={true}
  title="Confirm"
  text="Are you sure?"
  onClose={handleClose}
/>
```

The default implementations provide:
- Semantic HTML structure
- Inline styles for basic styling
- Responsive behavior
- Accessibility features

## Custom Styling

You can also provide custom CSS classes via the `classes` prop:

```tsx
<NameValueText
  name="User"
  value="John Doe"
  classes={{
    name: 'text-gray-600 font-semibold',
    value: 'text-gray-900',
    padding: 'py-4'
  }}
/>
```

## Need Help?

- Check out [USAGE_EXAMPLES.md](./USAGE_EXAMPLES.md) for comprehensive examples
- Review the TypeScript definitions for detailed prop documentation
- Open an issue on GitHub if you encounter any problems

## Breaking Changes Summary

1. **Dependency Changes**: `@mui/material`, `@emotion/css`, `@emotion/styled`, and `tss-react` are no longer peer dependencies
2. **Component Props**: All UI components must now be passed as props for MUI styling (or omit them to use defaults)
3. **Theme Access**: Components no longer have direct access to MUI theme. Use the `classes` prop for custom styling.

## Benefits of Migration

After migration, you'll gain:
- ✅ **Smaller bundle size** - No forced MUI dependency
- ✅ **Framework flexibility** - Use any UI framework or none
- ✅ **Better performance** - Fewer dependencies to load
- ✅ **Future-proof** - Not tied to MUI version updates
