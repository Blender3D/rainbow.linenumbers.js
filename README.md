#Rainbow.linecount.js

A plugin for [Rainbow](https://github.com/ccampbell/rainbow) that adds line numbers.

#Dependencies

 - **[Rainbow](https://github.com/ccampbell/rainbow)** - Syntax highlighting
 - **[jQuery](https://github.com/jquery/jquery)** - DOM manipulation. It's heavy, but I can't find a way to accomplish the same task with vanilla JS.

#Screenshots

Everybody loves screenshots:

![With](https://raw.github.com/Blender3D/rainbow.linenumbers.js/master/screenshots/enabled.png)

#Setup

Just include `rainbow.linecount.js` and you're good to go:

    <script src="js/rainbow.linecount.js"></script>

#Styling

You will need to include some CSS (LESS in this case) to actually give the lines their numbers:

    .rainbow {
        padding: 0;
        font-size: 0.9em;

        .rainbow-header {
            background-color: darken(#22282A, 3%);

            .rainbow-language {
                text-align: right;

                padding: 0.5em;
            }
        }

        .rainbow-line {
            &:hover {
                background-color: darken(#22282A, 5%);

                .rainbow-line-number {
                    background-color: darken(#22282A, 8%);
                }
            }

            .rainbow-line-number {
                text-align: right;
                vertical-align: top;

                background-color: darken(#22282A, 3%);

                padding-left: 0.4em;
                padding-right: 0.4em;

                &::before {
                    content: attr(data-number);
                }
            }

            .rainbow-line-code {
                padding-left: 1em;
                width: 100%;
            }
        }
    }