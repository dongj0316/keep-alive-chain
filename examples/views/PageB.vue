<template>
  <div class="page-b">
    <h2>B</h2>
    <hr>
    <div>B -> List，List会使用缓存，B的缓存会被清除</div>
    <router-link to="/list">点我（或者返回键）返回List</router-link>
    <hr>
    <div>C -> B，B会使用缓存</div>
    <div>
      <router-link to="/page-c">点我进入C页面</router-link>
    </div>
    <hr>
    <div>
      <router-link to="/">
        点我去Index，List和B的缓存会被清除，下次进入会重新加载
      </router-link>
    </div>
    <hr>
    <div>无限列表，若没有缓存，每次进入都会重新加载</div>
    <div>Info -> B，B会使用缓存</div>
    <InfinityList/>
  </div>
</template>

<script>
import InfinityList from '@/components/InfinityList'

export default {
  name: 'page-b',
  components: {
    InfinityList
  }
}
</script>