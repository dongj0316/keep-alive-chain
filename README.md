# keep-alive-chain
vue缓存链控制，Vue前进刷新，后退不刷新（Forward refresh, back not refresh）

[online demo](https://dongj0316.github.io/keep-alive-chain/demo/)

## Installation

## Use

```bash
$ npm install keep-alive-chain
```

```js
// main.js
import { mergeBeforeEachHook, KeepAliveChain } from 'keep-alive-chain'

Vue.use(KeepAliveChain, {
  key: 'cacheTo' // 可选的 默认为cacheTo
})

// 如果你没有注册过beforeEach
router.beforeEach(mergeBeforeEachHook())

// 如果有注册beforeEach
router.beforeEach(mergeBeforeEachHook((to, from, next) => {
  next()
}))
```

然后在App.vue（视你的情况而定）中

```html
<keep-alive>
  <router-view v-if="$route.meta.keepAlive"/>
</keep-alive>
<KeepAliveChain>
  <router-view v-if="!$route.meta.keepAlive"/>
</KeepAliveChain>
```

接着在router中配置你的需求

```js
[
  {
    path: '/list',
    name: 'list',
    meta: {
      cacheTo: ['info']
    }
    // ...
  },
  {
    path: '/info',
    name: 'info',
    // ...
  }
]
```

然后就能愉快的玩耍了

## Local setup

```
npm install
npm run serve
```

## License

[MIT](https://opensource.org/licenses/MIT)