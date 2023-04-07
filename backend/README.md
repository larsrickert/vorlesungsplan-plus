# Vorlesungsplan+ API

## Project setup

```
pnpm install
```

### Run with hot-reload for development

```
pnpm dev
```

### Start for production

```
pnpm start
```

### Lints and fixes files

```
pnpm lint
```

<br />

# Folder structure inside src

| Folder / File | Description                                                            |
| ------------- | ---------------------------------------------------------------------- |
| controllers   | App functionality, used by routes                                      |
| middleware    | Express middleware for intercepting requests                           |
| routes        | Handlers for all API routes                                            |
| types         | Global TypeScript types, interfaces, classes etc                       |
| utils         | Common helper functions/utilities                                      |
| app.ts        | Main app entry file. Creates app and registers middleware, routes etc. |
| config.ts     | Static configuration/environments                                      |

<br />

# Code Guidelines

It is recommend to follow the below guidelines which contain best practices.

## File naming convention

- Controllers: `*.controllers.ts`
- Middleware: `*.middleware.ts`
- Routes: `*.routes.ts`
