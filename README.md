```sh
npm init
git init
git add -A
git commit -m 'initial'
git remote add origin git@github.com:GeekEast/create-react-ts.git
git push -u origin master
npm init -y
```
- .gitignore

```sh
yarn add --dev webpack webpack-cli
```
- package.json
- webpack.config.js
```sh
yarn add --dev typescript awesome-typescript-loader
node_modules/.bin/tsc --init
```

```sh
yarn add react react-dom 
yarn add --dev @types/react @types/react-dom
```

```sh
yarn add --dev html-webpack-plugin
```

```sh
yarn add --dev ts-node @types/node @types/webpack @types/webpack-dev-server
```

```sh
yarn add --dev sass-loader node-sass style-loader css-loader
```

### Hot Load
```javascript
...
import { hot } from 'react-hot-loader';
@hot(module)
class App extends ...
```
## References
[License](https://www.jianshu.com/p/86251523e898)

[Webpack Loaders](https://webpack.js.org/loaders/)

[**Typescript+React**](https://www.jianshu.com/p/5b9d330c3740)

[**ESLint for Typescript**](https://zhuanlan.zhihu.com/p/62401626)