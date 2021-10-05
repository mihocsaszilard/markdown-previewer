import React from "react";
import "./App.scss";
import Header from "./components/Header";
import Editor from "./components/Editor";
import Previewer from "./components/Previewer";

export default class MarkdownPreviewer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "Write something...",
      markdown: placeholder,
    };
  }

  handleChange = (e) => {
    this.setState({
      markdown: e.target.value,
    });
  };

  render() {
    return (
      <div id="body">
        <h1 id="title">Markdown Editor</h1>
        <div id="main-container">
          <div id="editor-container">
            <Header text="Editor" />
            <Editor
              markdown={this.state.markdown}
              onChange={this.handleChange}
            />
          </div>
          <div id="arrow">{"->"}</div>
          <div id="previewer-container">
            <Header text="Previewer" />
            <Previewer markdown={this.state.markdown} />
          </div>
        </div>
      </div>
    );
  }
}

const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![Beautiful lake with crystal clear, greenish wather](https://images.pexels.com/photos/2286895/pexels-photo-2286895.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)`;
