<template>
  <div class="info">
    <h2>Info</h2>
    <hr>
    <div class="id">{{$route.query.id}}</div>
    <div v-if="$route.query.page === 'List'">Info -> List，List会使用缓存</div>
    <div v-else>Info -> B，B会使用缓存</div>
    <hr>
    <router-link to="/">
      点我去Index，{{$route.query.page === 'List' ? 'List' : 'List和B'}}会被销毁，下次进入会重新加载
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'info'
}
</script>

<style lang="less" scoped>
.info {
  font-size: 20px;
  .id {
    text-align: center;
    line-height: 200px;
    font-weight: bold;
  }
}
</style>