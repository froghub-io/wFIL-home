<template>
  <footer class="has-shapes has-bg-brash bg-brash-top"
          style=" padding-top: 55px;">
    <div v-if="false" class="container">
      <div class="row pt-60 pb-60">
        <div class="col-lg-5 col-md-6">
          <div class="pr-0 pr-lg-4">
            <a class="mb-25" href="#">
              <img class="img-fluid mb-4 logo-ad" src="@/assets/images/logo/logo.png">
            </a>
            <p>
              STFIL is a liquidity pledge protocol built on FVM that is designed to be community-owned, decentralized, and trust-free, allowing users to earn block rewards without locking up assets or maintaining Storage Provider infrastructure.
            </p>
          </div>
        </div>
        <div class="col-lg-2 col-md col-sm-6">
          <div class="pl-0 pl-md-3 mt-5 mt-md-0">
            <h5 class="font-weight-600 mb-20">Social Links</h5>
            <ul class="list-unstyled footer-links">
              <li><a href="#">GitHub</a></li>
              <li><a href="#">Forum</a></li>
              <li><a href="#">Twitter</a></li>
            </ul>
          </div>
        </div>
        <div class="col-lg-2 col-md col-sm-6">
          <div class="pl-0 pl-md-3 mt-5 mt-md-0">
            <h5 class="font-weight-600 mb-20">Learn</h5>
            <ul class="list-unstyled footer-links">
              <li><a href="#">Introduction</a></li>
              <li><a href="#">Guides</a></li>
              <li><a href="#">Developers</a></li>
            </ul>
          </div>
        </div>
        <div class="col-lg-2 col-md col-sm-6">
          <div class="pl-0 pl-md-3 mt-5 mt-md-0">
            <h5 class="font-weight-600 mb-20">Quick Links</h5>
            <ul class="list-unstyled footer-links">
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="block border-top text-center content cursor-pointer" @click="gotoFrogHub">©2023 FrogHub All rights reserved.</div>
          </div>
        </div>
      </div>
    </div>

    <div class="shape-1 shape-xs bg-orange rounded-circle"></div>
    <div class="shape-2 shape-sm-2 bg-cyan rounded-circle"></div>
    <div class="shape-3 shape-sm bg-yellow rounded-circle"></div>
    <div class="shape-4 shape-xs-2 bg-cyan rounded-circle"></div>
    <div class="shape-5 shape-sm-2 bg-yellow rounded-circle"></div>
    <div class="shape-6 shape-sm-2 bg-orange rounded-circle"></div>
  </footer>
</template>

<script>
export default {
  name: "IFooter",
  methods: {
    gotoFrogHub(){
      window.location.href = `https://www.froghub.io`
    }
  }
}
</script>

<style scoped>

</style>
