<template>
  <section class="section-padding pt-0 horizontal-accordion content-full-height mt-4">
    <div class="container">
      <div class="row justify-content-center flex-column align-content-center align-items-center">
        <h3 class="fw-extra-bold fs-36" style="z-index: 1">{{ $t('home title') }}</h3>
      </div>
      <div class="row mt-4 justify-content-center">

        <div class="col-lg-7 col-10 order-lg-0 order-1 mt-3">

          <div class=" pr-lg-5">

            <div class="fs-30 fw-extra-bold pl-2 pr-2" style="border: 3px solid #101B52">
              Put plainly, wFIL is "wrapped FIL" but let's start by introducing the players.
            </div>
            <div class="fs-24 fw-bold mt-4 ">
              FIRST, THERE'S Filecoin TOKEN
            </div>
            <div class="fs-16 fw-medium ">
              FIL is the native currency built on the Filecoin blockchain.
            </div>

            <div class="fs-24 fw-bold mt-4 ">
              SECOND, THERE ARE ALT TOKENS
            </div>
            <div class="fs-16 fw-medium ">
              When a dApp (decentralized app) is built off of the Filecoin Blockchain it usually implements its own form
              of Token.
            </div>

            <div class="fs-24 fw-bold mt-4 ">
              NOW THE ERC-20 STANDARD
            </div>
            <div class="fs-16 fw-medium ">
              ERC-20 is a standard that defines how tokens are transferred and how
              to keep a consistent record of those transfers among tokens in the Filecoin Network.
            </div>

          </div>


        </div>
        <div class="col-lg-5 col-12 order-lg-1 order-0 mb-5">

          <div class="row justify-content-center mt-3 mb-3">
            <div class="col-xl-12 col-lg-12">
              <SlideTabs @select="selectTab" ref="slideTabs"></SlideTabs>
            </div>
          </div>

          <div class="row justify-content-center">
            <div class="col-xl-12 col-lg-12 text-white ">
              <div class="" style="background: linear-gradient(52.01deg, rgb(40, 20, 74) 0%, rgb(81, 42, 150) 100%);
             margin-bottom: -30px; padding: 30px 0 35px 0;border-top-left-radius: 1rem;border-top-right-radius: 1rem">
                <div class="d-flex align-items-center">
                  <div v-if="tabIndex === 0" class="col-7 col-md-7 p-0 pl-4">
                    <div class="fs-7">FIL Balance</div>
                    <div class="fs-5 font-weight-bold">{{ balance ? parseFloat(balance).toFixed(6) || 0 : 0 }}
                      FIL
                    </div>
                  </div>
                  <div v-if="tabIndex !== 0" class="col-7 col-md-7 p-0 pl-4">
                    <div class="fs-7">WFIL Balance</div>
                    <div class="fs-5 font-weight-bold">
                      {{ wfilBalance ? parseFloat(wfilBalance).toFixed(4) || 0 : 0 }}
                      WFIL
                    </div>
                  </div>
                  <template v-if="isConnected">
                    <div class="col-5 col-md-5 p-0 text-right" style="padding-right: 30px!important;">
                      <div class="p-1 pl-2 pr-3 d-inline-flex"
                           @click="showAccount"
                           style="cursor: pointer; border-radius: 50px;background-color: rgba(0, 0, 0, 0.2)">
                        <div class="ml-1 text-nowrap">
                          <span>
                           <img style="border-radius: 100%; width: 1.5rem;" src="@/assets/images/avatar/default.webp"
                                alt="">
                          </span>
                          <span class="ml-2 fs-8">{{ simpleAddress }}</span>
                        </div>
                      </div>
                    </div>
                  </template>
                </div>

                <div class="col-12 mt-2">
                  <div style="height: 1px; width: 100%;background-color: #504a4a;"></div>
                </div>

                <div class="d-flex mt-3">
                  <div class="col-6 p-0 pl-4">
                    <div>TOTAL SUPPLY</div>
                    <div>{{ parseFloat(totalSupply).toFixed(4) }} FIL</div>
                  </div>
                  <div class="col-6 p-0 pl-4">
                    <div>FIL PRICE</div>
                    <div>{{ parseFloat(filPrice).toFixed(3) }} USDT</div>
                  </div>
                </div>

                <div class="d-flex align-items-center mt-3">
                  <div class="col-12 p-0 pl-4">
                    <div class="pl-3 pt-1 pb-1 pr-3 mr-4"
                         style="cursor: pointer; border-radius: 50px;background-color: rgba(0, 0, 0, 0.2)">
                      <img src="@/assets/images/filecoin-logo.svg" style="width: 16px;" class="mr-1" alt="">
                      <span class="fs-14"><span class="opacity-08 mr-1">Filecoin:</span> <span @click="gotoBrowser"
                                                                                               class="wfil-address-text">
                        {{ simpleContractAddress }}
                      </span>
                        <span class="ml-2" @click="gotoBrowser">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                               class="bi bi-link-45deg" viewBox="0 0 16 16">
                          <path
                              d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
                          <path
                              d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/>
                        </svg>
                        </span>

                          <span style="opacity: .8" class="ml-2 cursor-pointer copy-text" @click="copyAddress">
<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-clipboard-fill"
     viewBox="0 0 16 16">
  <path fill-rule="evenodd"
        d="M10 1.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-1Zm-5 0A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5v1A1.5 1.5 0 0 1 9.5 4h-3A1.5 1.5 0 0 1 5 2.5v-1Zm-2 0h1v1A2.5 2.5 0 0 0 6.5 5h3A2.5 2.5 0 0 0 12 2.5v-1h1a2 2 0 0 1 2 2V14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3.5a2 2 0 0 1 2-2Z"/>
</svg>                        </span>

                      </span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div class="row justify-content-center mt-2" v-if="tabIndex === 0">
            <div class="col-xl-12 col-lg-12">
              <div class="rounded shadow p-4 bg-white" style="border-radius: 1rem !important;">
                <div class="form-group mb-30">
                  <div class="position-relative">
                    <div class="position-absolute d-flex justify-content-center align-items-center h-100"
                         style="left: 0;z-index: 100; width: 4rem; ">
                      <div style="width: 1.8rem;">
                        <img src="@/assets/images/filecoin-logo.svg" alt="">
                      </div>
                    </div>
                    <div class="position-absolute d-flex justify-content-center align-items-center h-100"
                         style="right: 0;width: 6rem;">
                      <button type="button" class="btn btn-info btn-sm btn-max" style="padding: 4px 15px;"
                              @click="maxFil">
                        {{ $t("max") }}
                      </button>
                    </div>
                    <input class="form-control shadow-none"
                           v-on:input="filChange"
                           v-model="data.fil.receive"
                           style="padding: 1rem 6rem 1rem 4rem;appearance:none; height: 60px; font-size: 1.2rem;border-color: #101B5233"
                           type="number" placeholder="0.00" autocomplete="off" id="fname" required=""/>
                  </div>
                </div>

                <div class="text-black-600">
                  <div class="mt-4">
                    <button v-if="!isConnected" class="btn btn-primary w-100" type="submit" @click="connectWallet">
                      {{ $t('connect-wallet') }}
                      {{
                        isConnecting && pendingConnector && connectors[0].id === pendingConnector?.id ? ' (connecting...)' : ''
                      }}
                    </button>
                    <button v-if="isConnected" class="btn btn-primary w-100" type="submit" @click="wrap">Submit</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row justify-content-center mt-2" v-if="tabIndex === 1">
            <div class="col-xl-12 col-lg-12">
              <div class="rounded shadow p-4 bg-white" style="border-radius: 1rem !important;">
                <div class="form-group mb-30">
                  <div class="position-relative">
                    <div class="position-absolute d-flex justify-content-center align-items-center h-100"
                         style="left: 0;z-index: 100; width: 4rem; ">
                      <div style="width: 1.8rem;">
                        <img src="@/assets/images/wf1@2x.png" style="width: 30px;height: 30px;" alt="">
                      </div>
                    </div>
                    <div class="position-absolute d-flex justify-content-center align-items-center h-100"
                         style="right: 0;width: 6rem;">
                      <button type="button" class="btn btn-info btn-sm btn-max" style="padding: 4px 15px;"
                              @click="maxWFil">
                        {{ $t("max") }}
                      </button>
                    </div>
                    <input class="form-control shadow-none"
                           v-on:input="wfilChange"
                           v-model="data.wfil.receive"
                           style="padding: 1rem 6rem 1rem 4rem;appearance:none; height: 60px; font-size: 1.2rem;border-color: #101B5233"
                           type="number" placeholder="0.00" autocomplete="off" id="fname2" required=""/>
                  </div>
                </div>

                <div class="text-black-600">
                  <div class="mt-4">
                    <button v-if="!isConnected" class="btn btn-primary w-100" type="submit" @click="connectWallet">
                      {{ $t('connect-wallet') }}
                    </button>
                    <button v-if="isConnected" class="btn btn-primary w-100" type="submit" @click="unwrap">Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>


      <div class="row pr-lg-5" style="margin-top: 100px;">
        <div class="col-lg-12 col-md-12 text-center mb-40" data-aos="fade-in">
          <h2 class="section-title fw-bold">How It Works</h2>
          <p class="fw-medium" style="opacity: .8;">Improve capital efficiency through DeFI based on liquidity for stake
            assets.</p>
        </div>
        <div class="has-colored-text text-center row">
          <div v-for="(tab, index) in tablist" :key="index" class="col-lg-6 col-md-12">
            <div class="text-center p-0 p-md-2 mb-30" data-aos="fade-up">
              <div class="has-text-color h2">
                <img :src="tab.icon" alt="" style="height: 60px; width: 60px;">
              </div>
              <h5 class="mt-20 mb-15 fw-extra-bold fs-18">{{ tab.name }}</h5>
              <p class="fs-16" style="opacity: .6;">{{ tab.content }}</p>
            </div>
          </div>
        </div>
      </div>

    </div>

    <div class="ok-message-bottom" v-if="voteResuleOk">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor"
           class="bi bi-check-circle-fill mr-2" viewBox="0 0 16 16">
        <path
            d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
      </svg>
      Submit Success
    </div>

    <div class="fail-message-bottom" v-if="voteResuleFail">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor"
           class="bi bi-dash-circle-fill mr-2" viewBox="0 0 16 16">
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7z"/>
      </svg>
      {{ voteResuleFailMes }}
    </div>

      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-6 col-md-9 text-center mb-30 " style="margin-top: 100px;">
            <span class="section-title fw-extra-bold fs-36">Partners</span>
          </div>
        </div>
        <div class="d-none d-md-block">
          <div class="row ">
            <div class="col-12" data-aos="fade-left">
              <div class="brand-carousel-s d-flex align-items-center">
                <div v-for="(log,index) in logos" :key="index" @click="toParthers(index)" class="brand-item d-flex align-items-center justify-content-center ">
                  <img style="width: 70px" class="img-fluid" :src="log" alt="">
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="d-md-none d-block">
          <div class="row " v-for="(log,index) in logos" :key="index" >
            <div class="col-12 mt-2" data-aos="fade-left" :key="index">
              <div class="brand-carousel-s d-flex align-items-center justify-content-center">
                <div  class="brand-item d-flex align-items-center justify-content-center " @click="toParthers(index)" style="margin-left: 0 !important;">
                  <img style="width: 70px" class="img-fluid" :src="log" alt="">
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
  </section>
</template>

<script>
import Clipboard from 'clipboard';
import SlideTabs from '@/components/SlideTabs'
import {prepareWriteContract, writeContract} from "@wagmi/core";
import {ethers} from "ethers";
import WFILABI from '@/assets/WFIL_metadata.json'

export default {
  name: 'HomeView',
  components: {SlideTabs},
  data() {
    return {
      voteResuleOk: false,
      voteResuleFail: false,
      voteResuleFailMes: '',
      tabIndex: 0,
      innerWeb3: undefined,
      data: {
        fil: {
          receive: ''
        },
        wfil: {
          receive: ''
        }
      },
      logos: ["/images/brands/filecoin.png","/images/brands/ipfs.png","/images/brands/glif.png","/images/brands/fvm.png","/images/brands/protocol labs.png","/images/brands/filecoin_foundation.png","/images/brands/froghub.png"],
      urls: ["https://filecoin.io/","https://ipfs.tech/","https://www.glif.io/","https://fvm.filecoin.io/","https://protocol.ai/","https://fil.org/","https://www.froghub.io/"],
      tablist: [
        {
          id: 'TaskManagement',
          name: 'ERC-20',
          icon: '/images/icons/ioc1.png',
          content: 'wFIL is a wrapper token that features a 1:1 peg ratio to FIL and uses the ERC-20 token standard instead.',
        },
        {
          id: 'Decentralized',
          name: 'Decentralized',
          icon: '/images/icons/ioc2.png',
          content: 'You can use a decentralized exchange (similar to Uniswap on ETH) to wrap/ unwrap FIL directly',
        },
      ],
      filPrice: 0
    }
  },
  created() {
    this.getFilPrice()
  },
  mounted() {
    this.$store.dispatch('initAccount')
    this.interval()
  },
  methods: {
    toParthers(index){
      window.open(this.urls[index])
    },
    connectWallet() {
      this.web3modal.openModal()
    },
    showAccount() {
      console.log('showAccount', this.web3modal)
      this.web3modal.openModal('Account')
    },
    interval() {
      setTimeout(() => {
        console.log('interval')
        this.$store.dispatch('initAccount')
        this.getFilPrice()
        this.interval()
      }, 30000)
    },
    getFilPrice() {
      let url = "https://api.binance.com/api/v3/ticker/price?symbol=FILUSDT"
      fetch(url).then(async res => {
        let data = await res.json();
        this.filPrice = data['price']
      })
    },
    selectTab(v) {
      this.tabIndex = v
    },
    maxFil() {
      this.data.fil.receive = parseFloat(this.balance).toFixed(10)
    },
    maxWFil() {
      this.data.wfil.receive = parseFloat(this.wfilBalance).toFixed(10)
    },
    filChange() {
      if (this.data.fil.receive.toString().indexOf('-') >= 0 || this.data.fil.receive.toString().indexOf('e') >= 0) {
        this.data.fil.receive = 0
        return
      }
      if (parseFloat(this.data.fil.receive) <= 0) {
        this.data.fil.receive = 0
        return
      }
      if (parseFloat(this.data.fil.receive) > parseFloat(this.balance).toFixed(10)) {
        this.data.fil.receive = parseFloat(this.balance).toFixed(10)
      }
    },
    wfilChange() {
      if (this.data.wfil.receive.toString().indexOf('-') >= 0 || this.data.wfil.receive.toString().indexOf('e') >= 0) {
        this.data.wfil.receive = 0
        return
      }
      if (parseFloat(this.data.wfil.receive) <= 0) {
        this.data.wfil.receive = 0
        return
      }
      if (parseFloat(this.data.wfil.receive) > parseFloat(this.wfilBalance).toFixed(10)) {
        this.data.wfil.receive = parseFloat(this.wfilBalance).toFixed(10)
      }
    },
    async wrap() {
      let receive = this.data.fil.receive
      if (receive === '' || receive === undefined || receive === null || receive <= 0) {
        return
      }
      this.data.fil.receive = ''

      console.log('wrap',ethers.utils.parseEther(receive.toString()), this.$store.state.contractAddress)

      const config = await prepareWriteContract({
        address: this.$store.state.contractAddress,
        abi: WFILABI.output.abi,
        functionName: 'deposit',
        overrides: {
          from: this.address,
          value: ethers.utils.parseEther(receive.toString()),
        },
      })
      try {

        const data = await writeContract(config)
        data.wait().then(res => {
          console.log('ok', res)
          this.$store.dispatch('initAccount')
          this.voteResuleFail = false
          this.voteResuleOk = true
          setTimeout(() => {
            this.voteResuleFail = false
            this.voteResuleOk = false
            this.voteResuleFailMes = ''
          }, 3000)
        }).catch(er => {
          console.log(er)
          this.voteResuleFailMes = er.message
          this.voteResuleFail = true
          this.voteResuleOk = false
          setTimeout(() => {
            this.voteResuleFail = false
            this.voteResuleOk = false
            this.voteResuleFailMes = ''
          }, 3000)

        })
      } catch (e) {
        console.log(e)
      }
      // let receive = this.data.fil.receive
      // this.data.fil.receive = ''
      // let _this = this
      // const contract = new this.innerWeb3.eth.Contract(WFILABI.abi, this.contractAddress);
      // contract.methods.deposit().send({
      //   from: this.address,
      //   value: Web3.utils.toWei(receive.toString(), "ether")
      // }).on('receipt', (receipt) => {
      //   this.initTotalSupply()
      //   console.log(receipt)
      //   _this.voteResuleFail = false
      //   _this.voteResuleOk = true
      //   setTimeout(() => {
      //     _this.voteResuleFail = false
      //     _this.voteResuleOk = false
      //     _this.voteResuleFailMes = ''
      //   }, 3000)
      // }).on("error", function (error) {
      //
      //   _this.voteResuleFailMes = error.message
      //   _this.voteResuleFail = true
      //   _this.voteResuleOk = false
      //   setTimeout(() => {
      //     _this.voteResuleFail = false
      //     _this.voteResuleOk = false
      //     _this.voteResuleFailMes = ''
      //   }, 3000)
      // });
    },
    async unwrap() {
      let receive = this.data.wfil.receive
      if (receive === '' || receive === undefined || receive === null || receive <= 0) {
        return
      }

      const config = await prepareWriteContract({
        address: this.$store.state.contractAddress,
        abi: WFILABI.output.abi,
        functionName: 'withdraw',
        overrides: {
          from: this.address
        },
        args: [ethers.utils.parseEther(receive.toString())]
      })
      try {
        const data = await writeContract(config)
        data.wait().then(res => {
          console.log('ok', res)
          this.data.wfil.receive = ''
          this.$store.dispatch('initAccount')
          this.voteResuleFail = false
          this.voteResuleOk = true
          setTimeout(() => {
            this.voteResuleFail = false
            this.voteResuleOk = false
            this.voteResuleFailMes = ''
          }, 3000)
        }).catch(er => {
          console.log(er)

          this.voteResuleFailMes = er.message
          this.voteResuleFail = true
          this.voteResuleOk = false
          setTimeout(() => {
            this.voteResuleFail = false
            this.voteResuleOk = false
            this.voteResuleFailMes = ''
          }, 3000)

        })
      } catch (e) {
        this.voteResuleFailMes = e.message
        this.voteResuleFail = true
        this.voteResuleOk = false
        setTimeout(() => {
          this.voteResuleFail = false
          this.voteResuleOk = false
          this.voteResuleFailMes = ''
        }, 3000)
      }

      // let _this = this
      // const contract = new this.innerWeb3.eth.Contract(WFILABI.abi, this.contractAddress);
      // contract.methods.withdraw(Web3.utils.toWei(receive.toString(), "ether"))
      //     .send({
      //       from: this.address,
      //       data: Web3.utils.toWei(receive.toString(), "ether")
      //     })
      //     .on('receipt', (receipt) => {
      //       this.data.wfil.receive = ''
      //       this.initTotalSupply()
      //       console.log(receipt)
      //       _this.voteResuleFail = false
      //       _this.voteResuleOk = true
      //       setTimeout(() => {
      //         _this.voteResuleFail = false
      //         _this.voteResuleOk = false
      //         _this.voteResuleFailMes = ''
      //       }, 3000)
      //     }).on("error", function (error) {
      //
      //   _this.voteResuleFailMes = error.message
      //   _this.voteResuleFail = true
      //   _this.voteResuleOk = false
      //   setTimeout(() => {
      //     _this.voteResuleFail = false
      //     _this.voteResuleOk = false
      //     _this.voteResuleFailMes = ''
      //   }, 3000)
      // });
    },
    gotoBrowser() {
      if (this.contractAddress === '0x60E1773636CF5E4A227d9AC24F20fEca034ee25A'){
        window.open(`https://explorer.glif.io/address/${this.contractAddress}`)
      }else {
        window.open(`https://explorer.glif.io/address/${this.contractAddress}/?network=hyperspace`)
      }
    },
    copyAddress() {

      let clipboard = new Clipboard('.copy-text', {
        text: () => {
          return this.contractAddress
        }
      })
      clipboard.on('success', e => {
        console.log(e)
        // 释放内存
        clipboard.destroy()
      })
      clipboard.on('error', e => {
        console.error(e)

        clipboard.destroy()
      })
    }
  },
  computed: {
    simpleAddress() {
      if (!this.address) {
        return ''
      }
      return this.address.toString().substring(0, 6) + '...' + this.address.toString().substring(this.address.length - 2)
    },
    contractAddress(){
      return this.$store.state.contractAddress
    },
    simpleContractAddress() {
      if (!this.contractAddress) {
        return ''
      }
      return this.contractAddress.toString().substring(0, 8) + '...' + this.contractAddress.toString().substring(this.contractAddress.length - 8)
    },
    web3modal() {
      return this.$store.state.web3modal
    },
    balance() {
      return this.$store.state.balance
    },
    address() {
      return this.$store.state.address
    },
    totalSupply() {
      return this.$store.state.totalSupply
    },
    isConnected() {
      return this.$store.state.isConnected
    },
    isConnecting() {
      return this.$store.state.isConnecting
    },
    wfilBalance() {
      return this.$store.state.wfilBalance
    }
  }
}
</script>
