<template>
  <div class="footer-box">
    <div class="hr28"/>
    <footer class="footer footer-icons">
      <router-link :class="{active : isHomePage}" class="footer-item" to="/">
        <i :class="{'icon-home_fill_light' : isHomePage}" class="iconfont icon-home_light"/>
        <p>首页</p>
      </router-link>
      <router-link :class="{active : curPage == '/shopcart'}" class="footer-item" to="/shopCart">
        <i :class="{'icon-cart_fill_light' : curPage == '/shopcart'}" class="iconfont icon-cart_light"/>
        <p>购物车</p>
      </router-link>
      <router-link :class="{active : curPage == '/mine'}" class="footer-item" to="/mine">
        <i :class="{'icon-my_fill_light' : curPage == '/mine'}" class="iconfont icon-my_light"/>
        <p>个人中心</p>
      </router-link>
    </footer>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      curPage: this.$route.path.toLowerCase() // 当前视图页路径
    }
  },
  computed: {
    ...mapState({
    })
  }
}
</script>
<style lang="scss">
.footer~.page-content {
    bottom: 2.8rem;
}

.footer {
    position: fixed;
    display: -webkit-flex;
    display: flex;
    bottom: 0;
    width: 100%;
    max-width: 640px;
    height: 2.9rem;
    z-index: 5; //less than popup
    background-color: rgba(247,247,248,.9);
    .footer-item {
        position: relative;
        height: 2.8rem;
        text-align: center;
        -webkit-flex: 1;
        flex: 1;
        &.active,
        &:active {
            color: #ec584e;
        }

    }
}
.footer-icons{
    .footer-item{
        padding-top:1.85rem;
        color:#3a3836;
        font-size: 0.6rem;
    }
    .iconfont{
        &:before{
            position:absolute;
            top:0;
            left:50%;
            -webkit-transform:translate(-50%);
            transform:translate(-50%);
            font-size: 1.5rem!important;
        }
    }
}

</style>
