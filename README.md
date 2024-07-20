Markdown is a lightweight markup language that is easy to read by humans and also creates good-looking content on the web.

It uses simple [delimiters](https://www.markdownguide.org/cheat-sheet/) to create nicely formatted text.

A core focus of Markdown is wrapping text in characters like asterisks or underscores to style it with italics or underlines, respectively. Normally, if the text is already typed, you would have to arrow over to the beginning of the word, type your character, and then arrow over to the end of the word to type the final character. This is time consuming.

This extension allows users to select the text they want to wrap, press whatever key they want to wrap the selection with, and automatically wrap the word.

Supported characters:
"markdown" `"`
{markdown} `{`
*markdown* `*`
_markdown_ `_`
$markdown$ `$`
`markdown` backtick 
~~markdown~~ `~~`
==markdown== `==`
[markdown] `[`

Note: `$text$` is used for MathML and LaTeX compatibility, while backticks in `\`` are used for code.

This extension also allows for link creation with `[text]`, and automatically creates the complete Markdown format for links in the form: `[link]()`. Your cursor will be inserted into the open parentheses to paste in a link.

This extension was inspired by VSCode, which provides helpful text editing features for markdown editing and faster code completion.