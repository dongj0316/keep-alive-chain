<template>
  <div class="infinity-list">
    <template v-for="i in list">
      <router-link class="item" :key="i" :to="`/info?id=${i}&page=List`">
        <div>{{i}} 点我进入Info</div>
      </router-link>
    </template>
    <div ref="loading" class="loading">加载中...</div>
  </div>
</template>

<script>
export default {
  name: 'infinity-list',
  data () {
    return {
      list: [],
      loading: false
    }
  },
  mounted () {
    const name = this.$route.name
    this.$nextTick(() => {
      const observer = new IntersectionObserver(entries => {
        if (entries[0].intersectionRatio <= 0) {
          return
        }

        this.loadList()
      })

      observer.observe(this.$refs.loading)

      this.$once('hook:beforeDestroy', () => {
        console.log(`${name} hook:beforeDestroy`)
        observer.unobserve(this.$refs.loading)
      })
    })
  },
  methods: {
    loadList () {
      if (this.loading) {
        return
      }
      this.loading = true
      return new Promise(resolve => {
        setTimeout(() => {
          const last = this.list[this.list.length - 1] || 0
          const arr = Array.from({ length: 10 }).map((_, i) => i + 1 + last)
          this.list = this.list.concat(arr)
          resolve()
        }, 1000)
      }).then(() => {
        this.loading = false
      })
    }
  }
}
</script>

<style lang="less" scoped>
.infinity-list {
  .item {
    display: block;
    line-height: 100px;
    text-align: center;
  }
  .loading {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
  }
}
</style>