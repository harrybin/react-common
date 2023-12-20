# React-Common-Components



A library providing generic react-components, including helperfunctions and custom-hooks. 
It is published as a package and can be installed via npm. The project also contains a storybook that can be used to test react components.
The storybook is deployed on the **[GitHub Pages](https://harrybin.github.io/react-common/)** of the project. To access the documentation for [Helperfunctions/CustomHooks](https://pages.github/harrybin/react-common) click on the corresponding tab of the GitHub repository.   

## Using the package
As long as the package is not deployed somewhere, simply do the following steps to us eit in your projekt:
- check this repo out
- run 
  ``` sh 
  npm i
  npm run build
  ```
- make it locally awailable as package:
  ``` sh 
  npm link
  ```
- finally link the package into your project using
  ``` sh
  npm link @harrybin/react-common
  ```

---

## Table of contents

1. [Installing](#installing)
2. [Storybook](#storybook)  
3. [Architecture](#architecture)
4. [Dependencies](#dependencies)
5. [Usage](#usage)  
6. [Contributing](#contributing)  
7. [Issues](#issues)  
8. [Appendix](#appendix)


___

<a name="installing"></a>
## Installing
```bash
  npm install @harrybin/react-common
```
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

<a name="usage"></a>

## Usage

After installing the npm-package you can use the components in your react project.

``` typescript
import { BoxedIcon, areArraysEqual, usePrevious } from "@harrybin/react-common";
```
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

> This warning may appear on your console but can be ignored.

  
```bash
You are loading @emotion/react when it is already loaded. Running multiple instances may cause problems
```


<a name="appendix"></a>


### Requirements

* Admin rights on your local machine
* NPM installed



