# Code viewer assignment

This assignment is to create a react component that can do basic highlighting of javascript source code. The project
has been bootstraped with create-react-app and contains a basic react application with a code-viewer component that
accepts a string of code as a prop.

The App-component displays the code-viewer with a hard-coded snippet of javascript code. 

In the implementation the source code is presented inside a pre-tag 
with a monospace font without any syntax highlighting. Add syntax highlighting for the following cases:

* Bold font and coloring of `var`, `let`, `const`, `import`, `from`, `export`, `return`, `if`, `else`, `for` and `function`.
* Coloring of comparators 
* Coloring of strings
* Italic font and coloring of comments (line and block)

