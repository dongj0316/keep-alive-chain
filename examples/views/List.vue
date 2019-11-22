<template>
  <div class="list">
    <h2>List</h2>
    <div>List -> Index，下次进入List重新加载</div>
    <hr>
    <div>A -> List，List重新加载</div>
    <div>
      <router-link to="/page-a">点我进入A页面</router-link>
    </div>
    <hr>
    B -> List，List会使用缓存，支持多层
    <div>
      <router-link to="/page-B">点我进入B页面</router-link>
    </div>

    <hr>
    <div>无限列表，若没有缓存，每次进入都会重新加载</div>
    <div>Info -> List，List会使用缓存</div>
    <InfinityList/>
  </div>
</template>

<script>
import InfinityList from '@/components/InfinityList'

export default {
  name: 'list',
  components: {
    InfinityList
  }
}
</script>