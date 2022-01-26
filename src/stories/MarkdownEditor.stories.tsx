import { MarkdownEditor, MarkdownEditorProps } from '../components/MarkdownEditor';

import React from 'react';

export default {
  title: 'components/MarkdownEditor',
  component: MarkdownEditor,
  argTypes: {
    onPress: { action: 'pressed' },
  },
};

export const basic = (args: MarkdownEditorProps) => <MarkdownEditor {...args}></MarkdownEditor>;

const markdownWithBullets = `
- bullet one
- bullet two
- bullet three
`;

const markdownPropsWithBullets = { text: markdownWithBullets };
export const withBullets = () => <MarkdownEditor {...markdownPropsWithBullets}></MarkdownEditor>;
