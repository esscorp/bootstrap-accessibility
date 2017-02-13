# bootstrap-accessibility

## Overview
Collection of jQuery plugins with the goal of making bootstrap-powered pages more accessible.

## Install

```javascript
npm install @esscorp/accessibility;
```

## Use

1. Move `node_modules/@esscorp/accessibility/plugins.js` to your static assets folder (e.g., `public/libs`).

    ```bash
    mkdir -p public/libs/bootstrap-accessibility;
    cp -a node_modules/@esscorp/accessibility/plugins.js public/libs/bootstrap-accessibility/plugins.js;
    ```

2. Include the plugin file in your html files.

    ```html
    <script type="text/javascript" src="public/libs/bootstrap-accessibility/plugins.js"></script>
    ```

3. Done. No initialization necessary.
