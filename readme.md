# React-Common-Components

A **framework-agnostic** library providing generic React components, helper functions, and custom hooks. Use it with Material-UI, shadcn/ui, Chakra UI, or any other React UI framework—or with no framework at all!

## ✨ Features

- 🎨 **Framework Agnostic** - Works with any UI framework or none
- 📦 **Zero Dependencies** - No forced UI library dependencies
- 🔧 **Fully Customizable** - Pass your own components or use sensible defaults
- 📘 **TypeScript** - Full type safety and IntelliSense support
- 🧪 **Well Tested** - Comprehensive test coverage
- 📚 **Great Documentation** - Storybook examples and detailed guides

## 📖 Documentation

- **[Live Storybook](https://harrybin.github.io/react-common/)** - Interactive component examples
- **[API Documentation](https://pages.github/harrybin/react-common)** - Helper functions and custom hooks reference
- **[Usage Examples](./USAGE_EXAMPLES.md)** - Examples with MUI, shadcn/ui, Chakra UI, and more
- **[Migration Guide](./MIGRATION_GUIDE.md)** - Upgrading from older versions

<a name="installing"></a>
## Installing

```bash
npm install @harrybin/react-common
```

## Quick Start

### Without Any Framework

```tsx
import { NameValueText, ConfirmationDialog } from '@harrybin/react-common';

// Works out of the box with native HTML elements
function MyComponent() {
  return (
    <>
      <NameValueText name="User" value="John Doe" />
      <ConfirmationDialog
        open={true}
        title="Confirm"
        text="Are you sure?"
        onClose={handleClose}
      />
    </>
  );
}
```

### With Material-UI

```tsx
import { NameValueText } from '@harrybin/react-common';
import { Grid, Typography } from '@mui/material';

function MyComponent() {
  return (
    <NameValueText
      name="User"
      value="John Doe"
      ContainerComponent={(props) => <Grid container {...props} />}
      ItemComponent={Grid}
      TextComponent={Typography}
    />
  );
}
```

### With shadcn/ui

```tsx
import { ConfirmationDialog } from '@harrybin/react-common';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

// Use with shadcn components
<ConfirmationDialog
  open={open}
  title="Delete Item"
  text="Are you sure?"
  onClose={handleClose}
  DialogComponent={Dialog}
  ButtonComponent={Button}
  // ... other shadcn components
/>
```

See **[USAGE_EXAMPLES.md](./USAGE_EXAMPLES.md)** for comprehensive examples with different UI frameworks.

## 🔄 Migrating from Previous Versions

If you're upgrading from a version that used Material-UI as a peer dependency, we provide an automated codemod to help:

```bash
npx jscodeshift -t node_modules/@harrybin/react-common/codemod.js --parser=tsx src/
```

See the **[Migration Guide](./MIGRATION_GUIDE.md)** for detailed instructions and manual migration steps.
___
---
# Development & Contribution

1. [Storybook](#storybook)  
2. [Architecture](#architecture)
3. [Usage Examples](#usage-examples)
4. [Contributing](#contributing)  
5. [Issues](#issues)  
6. [Appendix](#appendix)

___

<a name ="storybook"></a>

## Storybook

Run this command to start the storybook on your development environment.
Now you are able to write stories and test them locally.

```bash
  npm run storybook
```

The Storybook is hosted on the github pages of the repository. If you want deploy/test your storybook changes using the cli  you can 
run following command:

```bash
    npm run deploy
```

___

<a name="architecture"></a>

## Architecture  
<p></p>

**Technologies**   
 The library is build with typescript and javascript. 
 Rollup.js is used to bundle the modules.


**Tests**
   
The tests are divided into UI component tests(Storybook stories) and function unit tests(vitest).  

<a name="usage-examples"></a>

## Usage Examples

The library is framework-agnostic and works with any React UI library. Check out **[USAGE_EXAMPLES.md](./USAGE_EXAMPLES.md)** for comprehensive examples including:

- Using without any UI framework (native HTML)
- Material-UI integration
- shadcn/ui integration  
- Chakra UI integration
- Ant Design integration
- Custom component implementations

### Basic Usage

After installing the package, import and use components in your React project:

```tsx
import { NameValueText, ConfirmationDialog, areArraysEqual, usePrevious } from "@harrybin/react-common";

// Use with default implementations
<NameValueText name="User" value="John Doe" />

// Or pass your own UI components
<NameValueText
  name="User"
  value="John Doe"
  TextComponent={YourTextComponent}
  ContainerComponent={YourContainer}
/>
```

See **[USAGE_EXAMPLES.md](./USAGE_EXAMPLES.md)** for detailed examples with different UI frameworks.
<a name="contributing"></a>
## Contributing
___

__Something's missing?__  


If you're using custom components/helperfunctions or hooks that would fit into this library, feel free to open a Pull Request.
Take a look at the contributing guide below:



**Adding Components**

The following steps demonstrate how to add components to the library using a component named `MyComponent`


1. Create a new folder under `src/components/` and name it after your component(in this case myComponent). Please note that the   first character of the foldername should be written in lowercase.
  
2. Add two files named `MyComponent.tsx` and `index.ts` to your components folder.
  
3. Add the code of your custom component to the MyComponent.tsx file. 
   Export the component using a named export.
  
4.  Import your component in the `index.ts` file. Add also an named export of your component to that file.
      
5. Import the component in the `components/index.ts` from the component folder. 
   In addition to that add a named export of your component.

**Adding helperfunctions/ custom-hooks**
    
The `src/utils` folder contains the folders `helperFunctions` and  `customHooks`.  

In order to add a helperfunction to the library add it to the `helperFunctions.ts` file and export it with a named export. If you want to add an custom hook add it to the `customHooks.ts` file.

**Adding tests** 

To make sure your helperfunctions works like expected write a unittest and add it to
 the `helperFunctions.test.ts` file.



**Adding stories**

The ui components are tested with storybook. Add a file named `MyComponent.stories.tsx` inside your components folder. This snippet can be used as a story template:

```typescript
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MyComponent } from './MyComponent';

export default {
    title: 'React Common Components/Components/MyComponent',
    component: MyComponent,
} as ComponentMeta<typeof MyComponent>;


const Template: ComponentStory<typeof MyComponent> = (args) => <MyComponent {...args} />;

export const MyComponentStory = Template.bind({});

// pass props to component
MyComponentStory.args = {
    cond: true,
};

```
Adjust the args of the story to pass initial props.
Test if this story is displayed correctly by starting storybook(explained in storybook section)


<a name="issues"></a>
  
  
## Known Issues

None currently. The library is framework-agnostic and has no external UI dependencies.


<a name="appendix"></a>


### Requirements

* Admin rights on your local machine
* NPM installed



