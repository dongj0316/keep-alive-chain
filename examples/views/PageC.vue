<template>
  <div class="page-c">
    <h2>C</h2>
    <hr>
    <div>C -> B，B会使用缓存</div>
    <div>B -> List，List会使用缓存</div>
    <div>
      <a href="/" @click.prevent="$router.back(-1)">点我（或者返回键）返回B</a>
    </div>
    <hr>
    <div>
      <router-link to="/">
        点我去Index，List和B的缓存会被清除，下次进入会重新加载
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'page-c'
}
</script>