import { EditorState, ContentState, convertFromRaw } from "draft-js";
import { isNull, isUndefined } from "util";

export function getEditorState(comment) {
  if (isNull(comment) || isUndefined(comment)) {
    return EditorState.createEmpty();
  }

  const richTextPattern = /^{"blocks":\[.*\],"entityMap":.*}/;
  if (comment.match(richTextPattern)) {
    return EditorState.createWithContent(convertFromRaw(JSON.parse(comment)));
  } else {
    return EditorState.createWithContent(ContentState.createFromText(comment));
  }
}
