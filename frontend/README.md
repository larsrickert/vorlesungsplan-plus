# Vorlesungsplan+ App

## Project setup

```
pnpm install
```

### Run with hot-reload for development

```
pnpm dev
```

### Compiles and minifies for production

```
pnpm build
```

### Serves production build in local webserver

```
pnpm preview
```

### Lints and fixes files

```
pnpm lint
```

# Pursue following guidelines

1. Use BEM for CSS class names. You can find more information about BEM [here](http://getbem.com/).

2. Components

- Name components according to:
  - Prefix basic app components with app specific styles etc. such as a button component with "App", e.g. AppButton
  - Prefix single use components (that only exist once) with "The", e.g. TheHeader
- use `<script setup lang="ts">` for components if possible, if not use composition API only
- only use one root element in components, e.g.
  - good:
  ```html
  <template>
    <div>Some content</div>
  </template>
  ```
  - bad:
  ```html
  <template>
    <div>Some content</div>
    <div>Some other content</div>
  </template>
  ```

## Folder structure inside src

| Folder     | Description                                                            |
| ---------- | ---------------------------------------------------------------------- |
| assets     | Images/assets that are not favicons/icons                              |
| axios      | Axios client for REST requests                                         |
| components | Vue components                                                         |
| configs    | Static configuration/environments                                      |
| helpers    | Helper functions/utilities that don't rely an reactive state           |
| i18n       | Multilanguage / locales                                                |
| router     | Router / routes                                                        |
| store      | Reactive stores (similar to angular services that need reactive state) |
| styles     | Global reusable CSS                                                    |
| types      | Global TypeScript types, interfaces, classes etc.                      |
| views      | Vue components for the routes                                          |
