# Rainbow.linenumbers.js

A plugin for [Rainbow](https://github.com/ccampbell/rainbow) that adds line numbers. It's about 500 bytes, minified and gzipped.

# Screenshots

Everybody loves screenshots:

![With](https://raw.github.com/Blender3D/rainbow.linenumbers.js/master/screenshot.png)

# Setup

Just include `rainbow.linenumbers.js`:

    <script src="js/rainbow.linenumbers.js"></script>

# Supported Browsers

The JavaScript works for IE8 and above. Send me a pull request if you find a way to cleanly support IE7 and IE6.

The CSS `:before` pseudo-selector is used to display uncopyable line numbers, so it won't work in IE7 and below.

# Styling

You will need to include some CSS to actually give the lines their numbers:

    @background: #22282A;

    pre {
        padding: 0;
        
        font-family: 'Monaco', 'Source Code Pro', monospace;
        font-size: 1em;
    }

    .rainbow {
        border-spacing: 0;
        border-collapse: collapse;

        .line {
            &:hover {
                background-color: darken(@background, 5%);

                .line-number {
                    background-color: darken(@background, 8%);
                }
            }

            .line-number {
                text-align: right;

                background-color: darken(@background, 3%);

                padding-left: 0.8em;
                padding-right: 0.8em;
                
                &:before {
                    content: attr(data-line-number);
                }
            }

            .line-code {
                padding-left: 1em;
                width: 100%;
            }
        }
    }