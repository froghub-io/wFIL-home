<template>
  <header class="header-nav position-relative">
    <div class="container">
      <nav class="navbar navbar-expand-xl navbar-light px-0 d-flex justify-content-between">
        <a class="navbar-brand p-0 fw-extra-bold fs-30" href="#">
          w<span class="" style="border: 4px solid #101B52">FIL</span>
        </a>

          <div class="d-flex align-items-center align-content-center">
            <div class="mr-4 cursor-pointer fw-bold fs-16 wfil-address-text" @click="gotoGit">
              GITHUB
            </div>
            <div class="mr-4 cursor-pointer fw-bold fs-16 wfil-address-text" @click="gotoDocs">
              DOCS
            </div>
            <div style="height: 25px; width: 1px; background-color: #d0d0d0" class="mr-4"></div>
            <div>
              <div class="border p-1 pl-lg-4 pr-lg-4" data-toggle="modal" data-target="#netWorkModal"
                   style="cursor: pointer; border-radius: 50px;border-color: #34b4db!important;">
                <div class="ml-1">
            <span>
                  <img :src="chainsMap[chain?.id].img" alt="" style="width: 20px; height: 20px; margin-right: 5px;">
                </span>
                  <span class="fw-medium fs-12 ml-1 d-lg-inline d-none">{{ chainsMap[chain?.id].name }}</span>
                </div>
              </div>
            </div>
          </div>

        <!--        <div class="d-flex flex-row justify-content-center" v-if="!address">-->
        <!--          <button class="btn btn-sm btn-outline-primary" data-toggle="modal" @click="connectWallet"-->
        <!--                  data-target="#signup-modal">连接钱包 {{-->
        <!--              isConnecting && pendingConnector && connectors[0].id === pendingConnector?.id ? ' (connecting...)' : ''-->
        <!--            }}-->
        <!--          </button>-->
        <!--        </div>-->
        <!--        <div class="d-flex flex-row justify-content-center" v-if="address">-->
        <!--          <div class="border p-1 pl-2 pr-2"-->
        <!--               data-toggle="modal" data-target="#exampleModal"-->
        <!--               style="cursor: pointer; border-radius: 50px;background-color: white;">-->
        <!--            <div class="ml-1">-->
        <!--            <span>-->
        <!--                  <img style="border-radius: 100%; width: 28px;" src="@/assets/images/avatar/default.webp" alt="">-->
        <!--                </span>-->
        <!--              <span class="ml-2" style="margin-top: 10px">{{ simpleAddress }}</span>-->
        <!--            </div>-->
        <!--          </div>-->
        <!--        </div>-->
      </nav>
    </div>
  </header>
</template>

<script>
import {useAccount, useConnect, useNetwork} from 'vagmi';
import {chainsMap} from "@/utils/model";

export default {
  name: "IHeader",
  data() {
    return {
      connect: undefined,
      connectors: [],
      isConnecting: false,
      pendingConnector: undefined,
      activeConnector: undefined,
      address: undefined,
      menus: [],
      locale: window.localStorage.getItem('locale') || 'en',
      localeDic: {
        'en': 'En'
      },
      chainsMap: chainsMap,
      chain: undefined
    }
  },
  watch: {
    activeConnector(val) {
      console.log('val = ', val)
    },
    '$i18n.locale'() {
      this.menus = [
        {
          label: this.$t('home'),
          link: '/'
        },
        {
          label: this.$t('faq'),
          link: '/faq'
        },
      ]
    }
  },
  created() {
    const {
      connect,
      connectors,
      isConnecting,
      pendingConnector,
      activeConnector
    } = useConnect();
    this.connect = connect
    this.connectors = connectors
    this.isConnecting = isConnecting
    this.pendingConnector = pendingConnector
    this.activeConnector = activeConnector

    const {address} = useAccount();
    this.address = address

    const {chain, chains} = useNetwork();
    this.chain = chain
    console.log(this.chain)
    this.chains = chains
    console.log('this.chains', this.chains)
  },
  methods: {
    connectWallet() {
      if (this.isConnecting && this.pendingConnector && this.connectors[0].id === this.pendingConnector?.id) {
        return
      }
      this.connect({
        chainId: 3141,
        connector: this.connectors[0]
      })
    },
    gotoDocs(){
      window.open('https://docs.froghub.io/wfil/overview')
    },
    gotoGit(){
      window.open('https://github.com/froghub-io/wfil')
    },
    checkMenu(menu) {
      let {link} = menu
      this.$router.push({path: link})
    },
    handleCommandLanguage(language) {
      let val = language.target.value
      this.locale = val
      this.$i18n.locale = val
      window.localStorage.setItem('locale', val)
    }
  },
  computed: {
    simpleAddress() {
      if (!this.address) {
        return ''
      }
      return this.address.toString().substring(0, 6) + '...' + this.address.toString().substring(this.address.length - 4)
    }
  }
}
</script>

<style scoped>

</style>
