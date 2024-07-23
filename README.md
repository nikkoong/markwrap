Markdown is a lightweight markup language that is easy to read by humans and also creates good-looking content on the web.

It uses simple [delimiters](https://www.markdownguide.org/cheat-sheet/) to create nicely formatted text.

One of the reasons I developed this extension was to make writing markdown blog posts easier on [bearblog](https://bearblog.dev/). It will not work on all textboxes on the web, just on `TEXTAREA`, text `INPUT`, contentEditable `div`s. If you want another text input support, please let me know.

A core focus of Markdown is wrapping text in characters like asterisks or underscores to style it with italics or underlines, respectively. Normally, if the text is already typed, you would have to arrow over to the beginning of the word, type your character, and then arrow over to the end of the word to type the final character. This is time consuming.

This extension allows users to select the text they want to wrap, press whatever key they want to wrap the selection with, and automatically wrap the word.

Supported characters:
"markdown" `"`

{markdown} `{`

*markdown* `*`

_markdown_ `_`
 
$markdown$ `$`

`markdown` wrap in backticks `

~~markdown~~ `~~`

==markdown== `==`

[markdown] `[`

(markdown) `(`

Note: `$text$` is used for MathML and LaTeX compatibility, while backticks are used for code.

This extension also allows for image linking and link creation with `[text]`, and automatically creates the complete Markdown format for links in the form: `[link]()`. Your cursor will be inserted into the open parentheses to paste in a link. For images, select your alt text and press  `!` to insert the markdown syntax for an image.

For more Markdown syntax, see this [basic syntax link](https://www.markdownguide.org/basic-syntax/).

This extension was inspired by VSCode, which provides helpful text editing features for markdown editing and faster code completion.

## Privacy Policy
We respect your privacy and are committed to protecting your personal information. Our extension does not collect, store, or share any personal data from its users. All operations performed by the extension are executed locally on your device. The only data stored locally (not accessible to us) is the ON or OFF state of the extension so you won't have to keep turning it on or off constantly.

If you have any questions or concerns about our privacy practices, please feel free to contact us.

