import React from 'react';
import './code-viewer.css';
import parse from './parse';

class CodeViewer extends React.PureComponent {
  render() {
    return (
      <div className="code-viewer-wrapper">
        <h1 className="keyword">Some good looking code</h1>
        <div className="code-viewer">
          <code>
            <pre
              dangerouslySetInnerHTML={{
                __html: parse(this.props.codeToDisplay)
              }}
            />
          </code>
        </div>
      </div>
    );
  }
}

export default CodeViewer;
