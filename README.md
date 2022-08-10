# vue-project
* this app is a ground-up template
* doesn't include any frontend stuff (e.g. creative tim tplt)

# auth
* this project is meant to be an auth template. currently looking at implementing:
  * passport with:
    * express backend (for now)
    * all the necessary views
    * google oauth 2.0
## general notes on auth processing

* `.openid-button` class is used to indicate clickable elements that trigger a 3rd party auth process
* the following attr. are required
  * `data-provider` to identify the 3rd party (git, google, fb, etc.). this is just a custom key used internally
  * then those may or not be needed depending on the specifics:
    * `data-oauthserver` to identify the url 
    * `data-oauthversion` for the version used
* [passport-js](https://www.passportjs.org/) is used to process most 3rd party. the `data-provider` attr. serves to match in the code the correct passport strategy


## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
