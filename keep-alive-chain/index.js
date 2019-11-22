import Vue from 'vue'

let cacheKey = 'cacheTo'
const state = Vue.observable({
  caches: []
})
const clearCache = () => {
  if (state.caches.length > 0) {
    state.caches = []
  }
}
const addCache = name => state.caches.push(name)

const defaultHook = (to, from, next) => next()
export const mergeBeforeEachHook = (hook = defaultHook) => {
  return (to, from, next) => {
    // 1. 都不是类列表页
    //     清空缓存
    // 2. 都是类列表页
    //     若`to`不在`from`的配置中，清空缓存，同时要新增`to`缓存
    //     保留`from`的缓存，新增`to`缓存
    // 3. 新路由是类列表页
    //     若`from`不在`to`的配置中，清空缓存，新增`to`缓存
    //     否则，无需处理
    // 4. 旧路由是类列表页
    //     若`to`不在`from`的配置中，清空缓存

    const toName = to.name
    const toCacheTo = (to.meta || {})[cacheKey]
    const isToPageLikeList = toCacheTo && toCacheTo.length > 0
    const fromName = from.name
    const fromCacheTo = (from.meta || {})[cacheKey]
    const isFromPageLikeList = fromCacheTo && fromCacheTo.length > 0

    if (!isToPageLikeList && !isFromPageLikeList) {
      clearCache()
    } else if (isToPageLikeList && isFromPageLikeList) {
      if (fromCacheTo.indexOf(toName) === -1) {
        clearCache()
      }
      addCache(toName)
    } else if (isToPageLikeList) {
      if (toCacheTo.indexOf(fromName) === -1) {
        clearCache()
        addCache(toName)
      }
    } else if (isFromPageLikeList) {
      if (fromCacheTo.indexOf(toName) === -1) {
        clearCache()
      }
    }

    return hook(to, from, next)
  }
}

export const VKeepAliveChain = {
  install (Vue, options = { key: 'cacheTo' }) {
    const { key } = options

    if (key) {
      cacheKey = key
    }

    const component = {
      name: 'VKeepAliveChain',
      functional: true,
      render (h, { children }) {
        return h(
          'keep-alive',
          { props: { include: state.caches } },
          children
        )
      }
    }

    Vue.component('VKeepAliveChain', component)
  }
}