# Deployment fixes for router in history mode

When the vue router uses history mode, any reloads or initial loads of e.g. /hello-world route will not work. This
folder contains catch-all fallback route for different servers (php, firebase etc.)

Copy the required file to the public folder.

## Files

- For netlify: _redirects
- For php: .htaccess
- For firebase: firebase.json

[See vue docs](https://router.vuejs.org/guide/essentials/history-mode.html#example-server-configurations)
