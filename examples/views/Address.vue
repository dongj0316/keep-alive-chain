<template>
  <div class="page-address">
    <div>
      <a href="/" @click.prevent="$router.back(-1)">返回</a>
    </div>
    <template v-for="(address, i) in list">
      <div class="item" @click="click(address)" :key="i">{{i + 1}}. {{address}}</div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'page-address',
  data () {
    return {
      list: [
        '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室',
        '浙江省杭州市拱墅区莫干山路 50 号'
      ]
    }
  },
  methods: {
    click (address) {
      sessionStorage.setItem('address', address)
      this.$router.back(-1)
    }
  }
}
</script>

<style lang="less" scoped>
.page-address {
  .item {
    padding: 10px 15px;
    border-bottom: 1px solid #ccc;
  }
}
</style>