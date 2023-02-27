<template>
  <div class="position-relative">
    <img alt="" src="@/assets/images/bg/bg.png" width="100%" height="100%" class="position-absolute" loading="lazy">
    <div class="preloader position-fixed d-flex align-items-center justify-content-center">
      <div class="block">
        <div class="loader-image mb-20">
          <h2 class="loader-text ">
            <span class="h3 fw-medium mb-1 text-uppercase">Welcome to</span>
            <div class="d-flex fw-extra-bold fs-36 justify-content-center align-items-center mt-3">
              <span>w</span><span class="" style="border: 4px solid #101B52">FIL</span>
            </div>
          </h2>
        </div>
      </div>
    </div>
    <i-header/>
    <router-view/>
    <i-footer></i-footer>
  </div>
</template>
<script>
import IHeader from '@/components/header/IHeader'
import IFooter from '@/components/footer/IFooter'

export default {
  name: 'App',
  components: {
    IHeader,
    IFooter
  },
  data() {
    return {
      address: undefined,
      disconnect: undefined,
      useSwitchNetwork: undefined
    }
  },
  created() {
  },
  methods: {

  },
  computed: {

  }
}
</script>
<style lang="scss">
body {
}
</style>

