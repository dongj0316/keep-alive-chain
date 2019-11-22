<template>
  <div class="page-form">
    <h2>Form</h2>
    <div>
      1. 输入任意内容，然后选择收货地址，跳转到新路由
    </div>
    <div>
      2. 从新路由返回，Form会使用缓存
    </div>
    <hr>
    <div class="field">
      <div class="field-label">输入</div>
      <div class="field-item">
        <input type="text" placeholder="随便填点内容验证">
      </div>
    </div>
    <div class="field">
      <div class="field-label">收货地址</div>
      <div
        class="field-item"
        :class="{'field-placeholder': address === defaultAddress}"
        @click="$router.push('/address')"
      >
        {{address}}
      </div>
      <div>&#62;</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'page-form',
  data () {
    const defaultAddress = '选择收货地址'
    return {
      defaultAddress,
      address: defaultAddress
    }
  },
  activated () {
    const address = sessionStorage.getItem('address')
    if (address) {
      this.address = address
      sessionStorage.removeItem('address')
    }
  }
}
</script>

<style lang="less" scoped>
.page-form {
  .field {
    display: flex;
    padding: 10px 15px;
    & + .field {
      border-top: 1px solid #ccc;
    }
    &-label {
      flex-basis: 6em;
      padding-right: 1em;
      text-align: right;
    }
    &-placeholder {
      color: #666;
    }
    &-item {
      flex: 1;
      input {
        width: 100%;
      }
    }
  }
}
</style>