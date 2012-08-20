#Rainbow.linecount.js

A plugin for [Rainbow](https://github.com/ccampbell/rainbow) that adds line numbers.

#Dependencies

 - **[Rainbow](https://github.com/ccampbell/rainbow)** - Syntax highlighting
 - **[jQuery](https://github.com/jquery/jquery)** - DOM manipulation. It's heavy, but I can't find a way with vanilla JS.

#Screenshots

Everybody loves screenshots:

![With](https://raw.github.com/Blender3D/rainbow.linenumbers.js/master/screenshots/enabled.png)

#Setup

Just include `rainbow.linecount.js` and you're good to go:

    <script src="js/rainbow.linecount.js"></script>

Some styling is recommended (LESS):

    .rainbow {
      padding: 0;

      font-size: 0.9em;

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
        }

        .rainbow-line-code {
          padding-left: 1em;
          width: 100%;
        }
      }
    }