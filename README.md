# Code viewer assignment

This assignment is to create a react component that can do basic highlighting of javascript source code. The project
has been bootstraped with create-react-app and contains a basic react application with a code-viewer component that
accepts a string of code as a prop.

The App-component displays the code-viewer with a hard-coded snippet of javascript code. To get an idea on how
syntax highlighting of this code can look, see the relevant file in 
[the react github repository](https://github.com/facebook/react/blob/master/packages/react-dom/src/server/DOMMarkupOperations.js).

In the implementation that is provided to you, the source code is presented inside a pre-tag 
with a monospace font without any syntax highlighting. You are to add syntax highlighting for the following cases:

* Bold font and coloring of `var`, `let`, `const`, `import`, `from`, `export`, `return`, `if`, `else`, `for` and `function`.
* Coloring of comparators 
* Coloring of strings
* Italic font and coloring of comments (line and block)

The code should have tests that verify that the syntax highlighting is working correctly. What colors, font-face etc
to use is entirely up to you. The viewer should work for any valid javascript code, not only the hard-coded example
code. 

You are free to change any code or structure in the project you want.
