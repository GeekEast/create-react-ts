## Create React App From Scratch
### Features
- Webpack
- Bundle Analysis `build/analyse/bundle_size.html`
- React && ReactDOM && 
- React Hot Loader
- Typescript (No Babel!)
- ESLint && Prettier && Husky
- Jest && Enzyme


```javascript
...
import { hot } from 'react-hot-loader';
@hot(module)
class App extends ...
```

### Prepare
- **Step 1**: `git clone git@github.com:GeekEast/create-react-ts.git project_folder_name` 
- **Step 2**: `cd project_folder_name && rm -rf .git`

### Install 
```sh
yarn
# or
npm install
```

### Start
```sh
yarn start
# or
npm run start
```

### Build
```sh
yarn build
# or
npm run build
```

## References
[Typescript+Reat](https://www.jianshu.com/p/5b9d330c3740)

[ESLint for Typescript](https://zhuanlan.zhihu.com/p/62401626)

[Typescript Docs](https://typescript.bootcss.com/generics.html)

[Typescript Configs](https://github.com/hstarorg/HstarDoc/blob/master/%E5%89%8D%E7%AB%AF%E7%9B%B8%E5%85%B3/TypeScript%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6tsconfig%E7%AE%80%E6%9E%90.md)