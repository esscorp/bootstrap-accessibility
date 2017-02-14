# bootstrap-accessibility

## Overview
Collection of jQuery plugins with the goal of making bootstrap-powered pages more accessible.

## Install

```javascript
npm install @esscorp/accessibility;
```

## Use

1. Move `accessibility.js` and `accessibility.css` to your static assets folder (e.g., `public/libs`).

    ```bash
    mkdir -p public/libs/bootstrap-accessibility;
    cp -a node_modules/@esscorp/accessibility/accessibility.js public/libs/bootstrap-accessibility/accessibility.js;
    cp -a node_modules/@esscorp/accessibility/accessibility.css public/libs/bootstrap-accessibility/accessibility.css;
    ```

2. When your site wants to run in accessibility mode, send the above files to the browser.

    ```html
    <script type="text/javascript" src="/libs/bootstrap-accessibility/accessibility.js"></script>
    <link rel="stylesheet" href="/libs/bootstrap-accessibility/accessibility.css">
    ```

3. No initialization needed. But if you add DOM elements after the page is loaded, you'll need to re-run the jQuery accessibility plugins. Do this by triggering the 'activate.accessibility' event on any DOM element in the `<body>`. Example:

    ```html
    <script type="text/javascript">
        $(function() {
            $('body').append('<p><i class="fa fa-user"></i> This icon needs an aria-hidden tag.</p>');
            $('body').trigger('activate.accessibility');

            // this will generate the same result as above
            var added = $('body').append('<p><i class="fa fa-user"></i> This icon needs an aria-hidden tag.</p>');
            added.trigger('activate.accessibility');
        });
    </script>
    ```
