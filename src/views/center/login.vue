<template>
  <div class="login p10">
    <form onsubmit="return false;">
      <!-- autocomplete="off" -->
      <nut-textinput v-model.trim="name" :disabled="false" :clear-btn="false" placeholder="请输入账号" maxlength="30"/>
      <div class="pt10 rel">
        <nut-textinput v-model.trim="pass" :clear-btn="false" :type="type" placeholder="请输入密码" maxlength="30" @keyup.enter="login"/>
      </div>
    </form>
    <nut-button block class="login-btn" @click="login">登录</nut-button>
  </div>
</template>

<script>
import { apiLogin } from '@/api/login.js'
export default {
  data () {
    return {
      name: '',
      pass: '',
      type: 'password'
    }
  },
  methods: {
    login () {
      if (!this.name.length) {
        this.$toast.text('请输入账号')
        return false
      }
      if (!this.pass.length) {
        this.$toast.text('请输入密码')
        return false
      }

      const par = {
        name: this.name,
        pass: this.pass
      }
      apiLogin(par).then(res => {
        this.$toast.text('成功')
        this.$store.dispatch('Login').then(() => {
          this.$router.push({ path: this.redirect || '/' })
        }).catch(error => {
          console.log(error)
        })
      })
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
