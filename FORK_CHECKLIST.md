## Template forking checklist

When you fork the template app as start for your own app, go through this list of things you should do to make it your own.

- [ ] change the app name
  - inside `public/index.html`
  - inside `capacitor.config.ts`
  - inside `package.json`
  - inside `vue.config.js`(name and short_name in pwa option)
  - in SideMenu inside `src/App.vue`
- [ ] change the app description
  - inside `public/index.html` (Description and apple-mobile-web-app-title meta)
  - inside `vue.config.js` (in pwa option)
  - in SideMenu inside `src/App.vue`
- [ ] change the app icons
  - make sure to not change the icon names
  - `src/assets/logo-icon.png`
  - `public/favicon.ico`
  - inside `public/img` (for pwa icons)
  - you can use [realfavicongenerator.net](https://realfavicongenerator.net/) to generate the pwa icons
  - for generating the native app icons, go to `resources` and change `icon.png`,`splash.png`,`android/icon-background.png` and `android/icon-foreground.png`. Then run `npm run generate:resources`. Make sure to not change the image dimensions! This will automatically generate and copy icons and splash screen images for the ios and android app
- [ ] change the remaining pwa settings
  - themeColor inside `vue.config.js`
  - msTileColor inside `vue.config.js`
- [ ] change the app id
  - inside `capacitor.config.ts`
  - inside XCode (for hybrid apps)
- [ ] change data in .env files to the data for your application
- [ ] resolve all comments that start with `@todo project` by doing what is described in the comment or taking note of it and removing it.
- [ ] check if the settings in `capacitor.config.ts` fit your project's needs
  - you can take a look at the [documentation](https://capacitor.ionicframework.com/docs/basics/configuring-your-app/) for what is possible
