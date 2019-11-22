<template>
  <div class="home">
    <h2>Index</h2>
    <ul>
      <li>
        <router-link to="/list">列表页 List</router-link>
      </li>
      <li>
        <router-link to="/form">表单页 Form</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'home'
}
</script>

<style lang="less" scoped>
.home {
  ul {
    list-style: none;
    padding: 0;
    line-height: 50px;
    font-size: 30px;
  }
}
</style>
