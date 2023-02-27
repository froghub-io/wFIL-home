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
          <div style="height: 25px; width: 1px; background-color: #d0d0d0" class="mr-4 d-md-block d-none"></div>
          <div class="d-md-block d-none">
            <w3m-network-switch></w3m-network-switch>
          </div>
        </div>

      </nav>
    </div>
  </header>
</template>

<script>
import {chainsMap} from "@/utils/model";
import {configureChains, createClient} from "@wagmi/core";
import {filChain} from "@/utils/filChain";
import {EthereumClient, modalConnectors, walletConnectProvider} from "@web3modal/ethereum";
import {Web3Modal} from "@web3modal/html";

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
    const chains = [filChain];
    const {provider} = configureChains(chains, [
      walletConnectProvider({projectId: "ec217442a0dcd42b786be90246dfdb30"}),
    ]);
    this.wagmiClient = createClient({
      autoConnect: true,
      connectors: modalConnectors({
        projectId: "ec217442a0dcd42b786be90246dfdb30",
        version: "2", // or "2"
        appName: "web3Modal",
        chains,
      }),
      provider,
    })
    const ethereumClient = new EthereumClient(this.wagmiClient, chains);
    let web3modal = new Web3Modal(
        {
          projectId: "ec217442a0dcd42b786be90246dfdb30",
          themeZIndex: 9999,
          themeColor: 'blackWhite'
        },
        ethereumClient
    )

    this.$store.commit('SET_WEB3MODAL', web3modal)

    ethereumClient.watchAccount(() => {
      this.$store.dispatch('initAccount')
    })
  },
  methods: {
    gotoDocs() {
      window.open('https://docs.froghub.io/wfil/overview')
    },
    gotoGit() {
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
