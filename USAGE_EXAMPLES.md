# Usage Examples

This document provides comprehensive examples of using `@harrybin/react-common` with different UI frameworks.

## Table of Contents

- [Without Any UI Framework](#without-any-ui-framework)
- [With Material-UI](#with-material-ui)
- [With shadcn/ui](#with-shadcnui)
- [With Chakra UI](#with-chakra-ui)
- [With Ant Design](#with-ant-design)
- [Custom Implementation](#custom-implementation)

---

## Without Any UI Framework

All components work out of the box with native HTML elements and inline styles.

### NameValueText

```tsx
import { NameValueText } from '@harrybin/react-common';

function UserProfile() {
  return (
    <div>
      <NameValueText name="Name" value="John Doe" />
      <NameValueText name="Email" value="john@example.com" />
      <NameValueText name="Role" value="Developer" oneLine />
    </div>
  );
}
```

### ConfirmationDialog

```tsx
import { ConfirmationDialog } from '@harrybin/react-common';
import { useState } from 'react';

function DeleteButton() {
  const [open, setOpen] = useState(false);

  const handleClose = (confirmed) => {
    if (confirmed) {
      // Perform delete action
      console.log('Deleted!');
    }
    setOpen(false);
  };

  return (
    <>
      <button onClick={() => setOpen(true)}>Delete</button>
      <ConfirmationDialog
        open={open}
        title="Delete Item"
        text="Are you sure you want to delete this item? This action cannot be undone."
        onClose={handleClose}
        leftButtonLabel="Delete"
        rightButtonLabel="Cancel"
      />
    </>
  );
}
```

### ErrorReportDialog

```tsx
import { ErrorReportDialog } from '@harrybin/react-common';

function ErrorReport() {
  const handleDownload = () => {
    console.log('Downloading error report...');
  };

  return (
    <ErrorReportDialog
      downloadClicked={handleDownload}
      descChanged={(text) => console.log('Description:', text)}
      reproChanged={(text) => console.log('Reproduction:', text)}
      mailChanged={(text) => console.log('Email:', text)}
      phoneChanged={(text) => console.log('Phone:', text)}
    />
  );
}
```

### Markdown

```tsx
import { Markdown } from '@harrybin/react-common';

function Documentation() {
  const content = `
# Getting Started

Welcome to our documentation!

## Features

- Easy to use
- Fully customizable
- Great performance

Visit [our website](https://example.com) for more info.
  `;

  return <Markdown>{content}</Markdown>;
}
```

---

## With Material-UI

Using Material-UI components for consistent Material Design styling.

### NameValueText with MUI

```tsx
import { NameValueText } from '@harrybin/react-common';
import { Grid, Typography } from '@mui/material';

const MuiGridContainer = ({ direction, children }) => (
  <Grid container direction={direction}>
    {children}
  </Grid>
);

function UserProfile() {
  return (
    <div>
      <NameValueText
        name="Name"
        value="John Doe"
        ContainerComponent={MuiGridContainer}
        ItemComponent={Grid}
        TextComponent={Typography}
      />
      <NameValueText
        name="Email"
        value="john@example.com"
        oneLine
        ContainerComponent={MuiGridContainer}
        ItemComponent={Grid}
        TextComponent={Typography}
      />
    </div>
  );
}
```

### ConfirmationDialog with MUI

```tsx
import { ConfirmationDialog } from '@harrybin/react-common';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography
} from '@mui/material';
import { useState } from 'react';

function DeleteButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button variant="contained" color="error" onClick={() => setOpen(true)}>
        Delete
      </Button>
      <ConfirmationDialog
        open={open}
        title="Delete Item"
        text="Are you sure you want to delete this item?"
        onClose={(confirmed) => {
          if (confirmed) console.log('Deleted!');
          setOpen(false);
        }}
        leftButtonLabel="Delete"
        rightButtonLabel="Cancel"
        isRightButtonHighlighted
        DialogComponent={Dialog}
        DialogTitleComponent={DialogTitle}
        DialogContentComponent={DialogContent}
        DialogActionsComponent={DialogActions}
        ButtonComponent={Button}
        TextComponent={Typography}
      />
    </>
  );
}
```

### ErrorReportDialog with MUI

```tsx
import { ErrorReportDialog } from '@harrybin/react-common';
import { Box, Grid, TextField, Typography, Link } from '@mui/material';

function ErrorReport() {
  return (
    <ErrorReportDialog
      downloadClicked={() => console.log('Download')}
      descChanged={(text) => console.log('Desc:', text)}
      reproChanged={(text) => console.log('Repro:', text)}
      mailChanged={(text) => console.log('Mail:', text)}
      phoneChanged={(text) => console.log('Phone:', text)}
      BoxComponent={Box}
      GridContainerComponent={Grid}
      GridItemComponent={Grid}
      TextFieldComponent={TextField}
      TextComponent={Typography}
      LinkComponent={Link}
    />
  );
}
```

### Markdown with MUI

```tsx
import { Markdown } from '@harrybin/react-common';
import { Typography, Link } from '@mui/material';

function Documentation() {
  return (
    <Markdown
      TextComponent={Typography}
      LinkComponent={Link}
    >
      {`# Material-UI Styled Documentation
      
This content uses Material-UI Typography components.`}
    </Markdown>
  );
}
```

---

## With shadcn/ui

Using shadcn/ui components for modern, accessible UI with Tailwind CSS.

### Setup

First, ensure you have shadcn/ui components installed. For this example, we'll need:

```bash
npx shadcn-ui@latest add button dialog
```

### NameValueText with shadcn/ui

```tsx
import { NameValueText } from '@harrybin/react-common';

// shadcn uses native HTML with Tailwind classes
const ShadcnContainer = ({ direction, children }) => (
  <div className={`flex ${direction === 'row' ? 'flex-row' : 'flex-col'} gap-2`}>
    {children}
  </div>
);

const ShadcnItem = ({ children }) => (
  <div>{children}</div>
);

const ShadcnText = ({ variant, children, className }) => {
  const baseClass = variant === 'body2' ? 'text-sm' : 'text-base';
  return <span className={`${baseClass} ${className}`}>{children}</span>;
};

function UserProfile() {
  return (
    <div className="space-y-4">
      <NameValueText
        name="Name"
        value="John Doe"
        ContainerComponent={ShadcnContainer}
        ItemComponent={ShadcnItem}
        TextComponent={ShadcnText}
        classes={{
          name: 'text-gray-600 font-medium',
          value: 'text-gray-900'
        }}
      />
      <NameValueText
        name="Email"
        value="john@example.com"
        oneLine
        ContainerComponent={ShadcnContainer}
        ItemComponent={ShadcnItem}
        TextComponent={ShadcnText}
        classes={{
          name: 'text-gray-600 font-medium',
          value: 'text-gray-900'
        }}
      />
    </div>
  );
}
```

### ConfirmationDialog with shadcn/ui

```tsx
import { ConfirmationDialog } from '@harrybin/react-common';
import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

// Adapter for shadcn Dialog
const ShadcnDialog = ({ open, onClose, children, ...props }) => (
  <Dialog open={open} onOpenChange={(open) => !open && onClose?.()}>
    <DialogContent {...props}>
      {children}
    </DialogContent>
  </Dialog>
);

const ShadcnDialogTitle = ({ children, ...props }) => (
  <DialogHeader>
    <DialogTitle {...props}>{children}</DialogTitle>
  </DialogHeader>
);

const ShadcnDialogContent = ({ children, ...props }) => (
  <DialogDescription {...props}>{children}</DialogDescription>
);

const ShadcnDialogActions = ({ children, ...props }) => (
  <DialogFooter {...props}>{children}</DialogFooter>
);

const ShadcnText = ({ children }) => <p>{children}</p>;

function DeleteButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button variant="destructive" onClick={() => setOpen(true)}>
        Delete
      </Button>
      <ConfirmationDialog
        open={open}
        title="Delete Item"
        text="Are you sure you want to delete this item? This action cannot be undone."
        onClose={(confirmed) => {
          if (confirmed) console.log('Deleted!');
          setOpen(false);
        }}
        leftButtonLabel="Delete"
        rightButtonLabel="Cancel"
        isRightButtonHighlighted
        DialogComponent={ShadcnDialog}
        DialogTitleComponent={ShadcnDialogTitle}
        DialogContentComponent={ShadcnDialogContent}
        DialogActionsComponent={ShadcnDialogActions}
        ButtonComponent={Button}
        TextComponent={ShadcnText}
      />
    </>
  );
}
```

### ErrorReportDialog with shadcn/ui

```tsx
import { ErrorReportDialog } from '@harrybin/react-common';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

// Adapter components
const ShadcnBox = ({ margin, children }) => (
  <div style={{ margin }}>{children}</div>
);

const ShadcnGridContainer = ({ spacing, children }) => (
  <div className="space-y-4">{children}</div>
);

const ShadcnGridItem = ({ children }) => (
  <div className="w-full">{children}</div>
);

const ShadcnTextField = ({ label, multiline, rows, error, helperText, ...props }) => (
  <div className="space-y-2">
    {label && <Label>{label}</Label>}
    {multiline ? (
      <Textarea rows={rows} className={error ? 'border-red-500' : ''} {...props} />
    ) : (
      <Input className={error ? 'border-red-500' : ''} {...props} />
    )}
    {helperText && (
      <p className={`text-sm ${error ? 'text-red-500' : 'text-gray-500'}`}>
        {helperText}
      </p>
    )}
  </div>
);

const ShadcnText = ({ color, variant, children }) => (
  <p className={`${color === 'error' ? 'text-red-500' : ''} ${variant === 'caption' ? 'text-xs' : ''}`}>
    {children}
  </p>
);

const ShadcnLink = ({ onClick, children, className }) => (
  <a onClick={onClick} className={`cursor-pointer text-blue-600 hover:underline ${className}`}>
    {children}
  </a>
);

function ErrorReport() {
  return (
    <ErrorReportDialog
      downloadClicked={() => console.log('Download')}
      descChanged={(text) => console.log('Desc:', text)}
      reproChanged={(text) => console.log('Repro:', text)}
      mailChanged={(text) => console.log('Mail:', text)}
      phoneChanged={(text) => console.log('Phone:', text)}
      BoxComponent={ShadcnBox}
      GridContainerComponent={ShadcnGridContainer}
      GridItemComponent={ShadcnGridItem}
      TextFieldComponent={ShadcnTextField}
      TextComponent={ShadcnText}
      LinkComponent={ShadcnLink}
    />
  );
}
```

---

## With Chakra UI

Using Chakra UI components for accessible and themeable interfaces.

### NameValueText with Chakra UI

```tsx
import { NameValueText } from '@harrybin/react-common';
import { Stack, Box, Text } from '@chakra-ui/react';

const ChakraContainer = ({ direction, children }) => (
  <Stack direction={direction === 'row' ? 'row' : 'column'} spacing={2}>
    {children}
  </Stack>
);

const ChakraText = ({ variant, children, className }) => {
  const size = variant === 'body2' ? 'sm' : 'md';
  return <Text size={size} className={className}>{children}</Text>;
};

function UserProfile() {
  return (
    <Box>
      <NameValueText
        name="Name"
        value="John Doe"
        ContainerComponent={ChakraContainer}
        ItemComponent={Box}
        TextComponent={ChakraText}
      />
      <NameValueText
        name="Email"
        value="john@example.com"
        oneLine
        ContainerComponent={ChakraContainer}
        ItemComponent={Box}
        TextComponent={ChakraText}
      />
    </Box>
  );
}
```

### ConfirmationDialog with Chakra UI

```tsx
import { ConfirmationDialog } from '@harrybin/react-common';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Text,
  useDisclosure
} from '@chakra-ui/react';

// Adapter for Chakra Modal
const ChakraDialog = ({ open, onClose, children, ...props }) => (
  <Modal isOpen={open} onClose={onClose || (() => {})} {...props}>
    <ModalOverlay />
    <ModalContent>{children}</ModalContent>
  </Modal>
);

function DeleteButton() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button colorScheme="red" onClick={onOpen}>
        Delete
      </Button>
      <ConfirmationDialog
        open={isOpen}
        title="Delete Item"
        text="Are you sure you want to delete this item?"
        onClose={(confirmed) => {
          if (confirmed) console.log('Deleted!');
          onClose();
        }}
        leftButtonLabel="Delete"
        rightButtonLabel="Cancel"
        DialogComponent={ChakraDialog}
        DialogTitleComponent={ModalHeader}
        DialogContentComponent={ModalBody}
        DialogActionsComponent={ModalFooter}
        ButtonComponent={Button}
        TextComponent={Text}
      />
    </>
  );
}
```

---

## With Ant Design

Using Ant Design components for enterprise-grade applications.

### NameValueText with Ant Design

```tsx
import { NameValueText } from '@harrybin/react-common';
import { Space, Typography } from 'antd';

const { Text } = Typography;

const AntContainer = ({ direction, children }) => (
  <Space direction={direction === 'row' ? 'horizontal' : 'vertical'}>
    {children}
  </Space>
);

const AntItem = ({ children }) => <div>{children}</div>;

const AntText = ({ variant, children, className }) => {
  const type = variant === 'body2' ? 'secondary' : undefined;
  return <Text type={type} className={className}>{children}</Text>;
};

function UserProfile() {
  return (
    <div>
      <NameValueText
        name="Name"
        value="John Doe"
        ContainerComponent={AntContainer}
        ItemComponent={AntItem}
        TextComponent={AntText}
      />
    </div>
  );
}
```

---

## Custom Implementation

You can create your own custom component implementations:

```tsx
import { NameValueText } from '@harrybin/react-common';

// Custom styled components
const CustomContainer = ({ direction, children }) => (
  <div style={{
    display: 'flex',
    flexDirection: direction === 'row' ? 'row' : 'column',
    gap: '12px',
    padding: '16px',
    backgroundColor: '#f5f5f5',
    borderRadius: '8px'
  }}>
    {children}
  </div>
);

const CustomText = ({ variant, children, className }) => (
  <span style={{
    fontSize: variant === 'body2' ? '14px' : '16px',
    fontWeight: variant === 'body2' ? 600 : 400,
    color: variant === 'body2' ? '#666' : '#333'
  }} className={className}>
    {children}
  </span>
);

function MyComponent() {
  return (
    <NameValueText
      name="Custom Styled"
      value="With my own components"
      ContainerComponent={CustomContainer}
      TextComponent={CustomText}
    />
  );
}
```

---

## Tips for Integration

1. **Create Wrapper Components**: For consistency across your app, create wrapper components that pre-configure the UI components:

```tsx
// components/LibraryComponents.tsx
import { NameValueText as BaseNameValueText } from '@harrybin/react-common';
import { Grid, Typography } from '@mui/material';

export const NameValueText = (props) => (
  <BaseNameValueText
    {...props}
    ContainerComponent={(p) => <Grid container {...p} />}
    ItemComponent={Grid}
    TextComponent={Typography}
  />
);
```

2. **Use TypeScript**: The library provides full TypeScript support with detailed prop types.

3. **Custom Styling**: Use the `classes` prop to apply your own CSS classes for fine-grained control.

4. **Composition**: Combine components to build more complex UIs.

---

For more examples and detailed API documentation, check out the [Storybook documentation](https://harrybin.github.io/react-common/).
