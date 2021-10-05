import { Component } from "react";
import Prism from "prismjs";
import marked from "marked";

//markdown options
marked.setOptions({
  breaks: true,
  highlight: function (code) {
    return Prism.highlight(code, Prism.languages.javascript, "javascript");
  },
});

const renderer = new marked.Renderer();
renderer.link = function (href, title, text) {
  return `<a target="_blank" href="${href}">${text}</a>`;
};

export default class Previewer extends Component {
  render() {
    return (
      <div
        id="preview"
        dangerouslySetInnerHTML={{
          __html: marked(this.props.markdown, { renderer: renderer }),
        }}
      />
    );
  }
}
