<template>
  <div class="login p10">
    <nut-textinput v-model="name" :disabled="false" :clear-btn="false" placeholder="请输入内容" maxlength="30"/>
    <div class="pt10 rel">
      <nut-textinput v-model="pass" :clear-btn="false" :type="type" placeholder="请输入密码" maxlength="30"/>
    </div>
    <nut-button block class="login-btn">登录</nut-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: '',
      pass: '',
      type: 'password'
    }
  }
}
</script>

<style lang="scss" scoped>
  .login{
    padding-top:20px;
    .login-btn {
      margin-top:20px;
    }
  }
</style>
