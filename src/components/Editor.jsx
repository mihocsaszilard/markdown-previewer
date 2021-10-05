import { Component } from "react";

export default class Editor extends Component {
  render() {
    return (
      <textarea
        id="editor"
        value={this.props.markdown}
        onChange={this.props.onChange}
      />
    );
  }
}
