import React from "react";
import { Editor, EditorState } from "draft-js";


class RichTextDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: this.props.editorState || EditorState.createEmpty()
    };
  }

  

  render() {
    return (
      <Editor
        editorState={this.state.editorState}
        handleKeyCommand={this.handleKeyCommand}
        onChange={this.onChange}
        readOnly
      />
    );
  }
}

export default RichTextDisplay;
