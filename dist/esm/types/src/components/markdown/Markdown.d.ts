import { MarkdownToJSX } from 'markdown-to-jsx';
import React from 'react';
export interface MarkdownProps {
    [key: string]: any;
    children: string;
    options?: MarkdownToJSX.Options;
}
export declare function Markdown(props: MarkdownProps): React.JSX.Element;
//# sourceMappingURL=Markdown.d.ts.map