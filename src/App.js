import React from 'react';
import './App.css';
import CodeViewer from './code-viewer/code-viewer';

class App extends React.Component {
    constructor(props) {
        super(props);
        

        this.state ={
            codeToDisplay: "/**\n" +
                " * Copyright (c) Facebook, Inc. and its affiliates.\n" +
                " *\n" +
                " * This source code is licensed under the MIT license found in the\n" +
                " * LICENSE file in the root directory of this source tree.\n" +
                " *\n" +
                " * @flow\n" +
                " */\n" +
                "\n" +
                "import {\n" +
                "  ID_ATTRIBUTE_NAME,\n" +
                "  ROOT_ATTRIBUTE_NAME,\n" +
                "  BOOLEAN,\n" +
                "  OVERLOADED_BOOLEAN,\n" +
                "  getPropertyInfo,\n" +
                "  isAttributeNameSafe,\n" +
                "  shouldIgnoreAttribute,\n" +
                "  shouldRemoveAttribute,\n" +
                "} from '../shared/DOMProperty';\n" +
                "import sanitizeURL from '../shared/sanitizeURL';\n" +
                "import quoteAttributeValueForBrowser from './quoteAttributeValueForBrowser';\n" +
                "\n" +
                "/**\n" +
                " * Operations for dealing with DOM properties.\n" +
                " */\n" +
                "\n" +
                "/**\n" +
                " * Creates markup for the ID property.\n" +
                " *\n" +
                " * @param {string} id Unescaped ID.\n" +
                " * @return {string} Markup string.\n" +
                " */\n" +
                "export function createMarkupForID(id: string): string {\n" +
                "  return ID_ATTRIBUTE_NAME + '=' + quoteAttributeValueForBrowser(id);\n" +
                "}\n" +
                "\n" +
                "export function createMarkupForRoot(): string {\n" +
                "  return ROOT_ATTRIBUTE_NAME + '=\"\"';\n" +
                "}\n" +
                "\n" +
                "/**\n" +
                " * Creates markup for a property.\n" +
                " *\n" +
                " * @param {string} name\n" +
                " * @param {*} value\n" +
                " * @return {?string} Markup string, or null if the property was invalid.\n" +
                " */\n" +
                "export function createMarkupForProperty(name: string, value: mixed): string {\n" +
                "  const propertyInfo = getPropertyInfo(name);\n" +
                "  if (name !== 'style' && shouldIgnoreAttribute(name, propertyInfo, false)) {\n" +
                "    return '';\n" +
                "  }\n" +
                "  if (shouldRemoveAttribute(name, value, propertyInfo, false)) {\n" +
                "    return '';\n" +
                "  }\n" +
                "  if (propertyInfo !== null) {\n" +
                "    const attributeName = propertyInfo.attributeName;\n" +
                "    const {type} = propertyInfo;\n" +
                "    if (type === BOOLEAN || (type === OVERLOADED_BOOLEAN && value === true)) {\n" +
                "      return attributeName + '=\"\"';\n" +
                "    } else {\n" +
                "      if (propertyInfo.sanitizeURL) {\n" +
                "        value = '' + (value: any);\n" +
                "        sanitizeURL(value);\n" +
                "      }\n" +
                "      return attributeName + '=' + quoteAttributeValueForBrowser(value);\n" +
                "    }\n" +
                "  } else if (isAttributeNameSafe(name)) {\n" +
                "    return name + '=' + quoteAttributeValueForBrowser(value);\n" +
                "  }\n" +
                "  return '';\n" +
                "}\n" +
                "\n" +
                "/**\n" +
                " * Creates markup for a custom property.\n" +
                " *\n" +
                " * @param {string} name\n" +
                " * @param {*} value\n" +
                " * @return {string} Markup string, or empty string if the property was invalid.\n" +
                " */\n" +
                "export function createMarkupForCustomAttribute(\n" +
                "  name: string,\n" +
                "  value: mixed,\n" +
                "): string {\n" +
                "  if (!isAttributeNameSafe(name) || value == null) {\n" +
                "    return '';\n" +
                "  }\n" +
                "  return name + '=' + quoteAttributeValueForBrowser(value);\n" +
                "}"
        };
    }

    render() {
        return (
            <div className='app'>
                <CodeViewer codeToDisplay={this.state.codeToDisplay}/>
            </div>
        );
    }
}

export default App;
