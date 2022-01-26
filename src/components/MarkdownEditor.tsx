import * as React from 'react';

import MDEditor from '@uiw/react-md-editor';

export interface MarkdownEditorProps {
  text: string;
}

export const MarkdownEditor = ({ text = '' }: MarkdownEditorProps) => {
  const [value, setValue] = React.useState(text);
  return <MDEditor value={value} onChange={(val) => setValue(val ?? '')} previewOptions={{}} />;
};
