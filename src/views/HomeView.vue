<template>
  <section class="section-padding pt-0 horizontal-accordion content-full-height mt-4">
    <div class="container">
      <div class="row justify-content-center flex-column align-content-center align-items-center">
        <h3 class="fw-extra-bold fs-36" style="z-index: 1">{{$t('home title')}}</h3>
        <span class="fw-medium fs-18 fs-sm-14" style="z-index: 1">{{$t('home tips')}}</span>
      </div>
      <div class="row mt-4">

        <div class="col-7 mt-3">

          <div class="row pr-5">

            <div class="fs-30 fw-extra-bold pl-2 pr-2" style="border: 3px solid #101B52">
              Put plainly, wETH is "wrapped ETH" but let's start by introducing the players.
            </div>
            <div class="fs-24 fw-bold mt-4 ">
              FIRST, THERE'S ETHER TOKEN
            </div>
            <div class="fs-16 fw-medium ">
              Ether or ETH is the native currency built on the Ethereum blockchain.
            </div>

            <div class="fs-24 fw-bold mt-4 ">
              SECOND, THERE ARE ALT TOKENS
            </div>
            <div class="fs-16 fw-medium ">
              When a dApp (decentralized app) is built off of the Ethereum Blockchain it usually implements its own form of Token. Think Augur’s REP Token, or Bancor's BNT Token.
            </div>

            <div class="fs-24 fw-bold mt-4 ">
              FINALLY THE ERC-20 STANDARD
            </div>
            <div class="fs-16 fw-medium ">
              ERC-20 is a standard developed after the release of ETH that defines how tokens are transferred and how to keep a consistent record of those transfers among tokens in the Ethereum Network.
            </div>

          </div>

          <div class="row pr-5" style="margin-top: 150px;">
            <div class="col-lg-12 col-md-12 text-center mb-40" data-aos="fade-in">
              <h2 class="section-title fw-bold">How It Works</h2>
              <p class="fw-medium" style="opacity: .8;">Improve capital efficiency through DeFI based on liquidity for stake assets.</p>
            </div>
            <div class="has-colored-text text-center row">
              <div v-for="(tab, index) in tablist" :key="index" class="col-lg-12 col-md-12">
                <div class="text-center p-0 p-md-2 mb-30" data-aos="fade-up">
                  <div class="has-text-color h2">
                    <img src="@/assets/images/icons/w.png" alt="" style="height: 60px; width: 60px;">
                  </div>
                  <h5 class="mt-20 mb-15 fw-extra-bold fs-18">{{tab.name}}</h5>
                  <p class="fs-16" style="opacity: .6;">{{tab.content}}</p>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div class="col-5">

          <div class="row justify-content-center mt-3 mb-3">
            <div class="col-xl-12 col-lg-12">
              <SlideTabs @select="selectTab" ref="slideTabs"></SlideTabs>
            </div>
          </div>

          <div class="row justify-content-center" v-if="isConnected">
            <div class="col-xl-12 col-lg-12 text-white ">
              <div class="d-flex align-items-center" style="background: linear-gradient(52.01deg, rgb(40, 20, 74) 0%, rgb(81, 42, 150) 100%);
             margin-bottom: -30px; padding: 30px 0 50px 0;border-top-left-radius: 1rem;border-top-right-radius: 1rem">
                <div v-if="tabIndex === 0" class="col-7 col-md-7 p-0 pl-4">
                  <div class="fs-7">FIL Balance</div>
                  <div class="fs-5 font-weight-bold">{{ balance ? parseFloat(balance.formatted).toFixed(6) || 0 : 0 }} FIL
                  </div>
                </div>
                <div v-if="tabIndex !== 0" class="col-7 col-md-7 p-0 pl-4">
                  <div class="fs-7">WFIL Balance</div>
                  <div class="fs-5 font-weight-bold">{{ 0.0 }} WFIL</div>
                </div>
                <div class="col-5 col-md-5 p-0 text-right" style="padding-right: 30px!important;">
                  <div class="p-1 pl-2 pr-3 d-inline-flex"
                       data-toggle="modal" data-target="#exampleModal"
                       style="cursor: pointer; border-radius: 50px;background-color: rgba(0, 0, 0, 0.2)">
                    <div class="ml-1 text-nowrap">
                <span>
                 <img style="border-radius: 100%; width: 1.5rem;" src="@/assets/images/avatar/default.webp" alt="">
                </span>
                      <span class="ml-2 fs-8">{{ simpleAddress }}</span>
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
                      <button type="button" class="btn btn-info btn-sm btn-max" style="padding: 4px 15px;">{{$t("max")}}</button>
                    </div>
                    <input class="form-control shadow-none"
                           v-model="data.fil.receive"
                           style="padding: 1rem 6rem 1rem 4rem;appearance:none; height: 60px; font-size: 1.2rem;border-color: #101B5233"
                           type="number" placeholder="0.00" autocomplete="off" id="fname" required=""/>
                  </div>
                </div>

                <div class="text-black-600">
                  <div class="mt-4">
                    <button v-if="!isConnected" class="btn btn-primary w-100" type="submit" @click="connectWallet">
                      {{$t('connect-wallet')}}
                      {{
                        isConnecting && pendingConnector && connectors[0].id === pendingConnector?.id ? ' (connecting...)' : ''
                      }}
                    </button>
                    <button v-if="isConnected" class="btn btn-primary w-100" type="submit" @click="wrap">Wrap</button>
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
                        <img src="@/assets/images/filecoin-logo.svg" alt="">
                      </div>
                    </div>
                    <div class="position-absolute d-flex justify-content-center align-items-center h-100"
                         style="right: 0;width: 6rem;">
                      <button type="button" class="btn btn-info btn-sm btn-max" style="padding: 4px 15px;">{{$t("max")}}</button>
                    </div>
                    <input class="form-control shadow-none"
                           v-model="data.fil.receive"
                           style="padding: 1rem 6rem 1rem 4rem;appearance:none; height: 60px; font-size: 1.2rem;border-color: #101B5233"
                           type="number" placeholder="0.00" autocomplete="off" id="fname2" required=""/>
                  </div>
                </div>

                <div class="text-black-600">
                  <div class="mt-4">
                    <button v-if="!isConnected" class="btn btn-primary w-100" type="submit" @click="connectWallet">
                      {{$t('connect-wallet')}}
                      {{
                        isConnecting && pendingConnector && connectors[0].id === pendingConnector?.id ? ' (connecting...)' : ''
                      }}
                    </button>
                    <button v-if="isConnected" class="btn btn-primary w-100" type="submit" @click="wrap">Unwrap</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row justify-content-center mt-4 flex-column align-content-center">
            <div class="col-xl-12 col-lg-12 text-center">
              <h5 class="fw-extra-bold fs-18">WFIL {{$t("statistics")}}</h5>
            </div>
            <div class="col-xl-12 col-lg-12 mt-2">
              <div class="rounded shadow p-4 bg-white" style="border-radius: 1rem !important;">

                <div class="text-black-600">
                  <div class="row">
                    <div class="col-12 text-left fw-medium fs-14">MAX TOTAL SUPPLY</div>
                    <div class="col-12 text-left fw-medium fs-14 opacity-08">3,995,425.365160066731749719 WFIL</div>
                  </div>
                  <div class="row mt-3">
                    <div class="col-12 text-left fw-medium fs-14">HOLDERS</div>
                    <div class="col-12 text-left fw-medium fs-14 opacity-08">72,458</div>
                  </div>
                  <div class="row mt-3">
                    <div class="col-12 text-left fw-medium fs-14">CONTRACT</div>
                    <div class="col-12 text-left fw-medium fs-14 align-items-center cursor-pointer">
                      <div class="pl-2 pr-3 d-flex align-items-center mt-1 justify-content-between" style="background-color: rgba(236,239,243,0.5);padding-top: 5px; padding-bottom: 5px;border-radius: 5px;">
                        <div class="d-flex align-items-center">
                          <img src="@/assets/images/filecoin-logo.svg" style="width: 16px;" class="mr-1" alt="">
                          <span><span class="opacity-08 mr-1">Filecoin:</span> <span>0x123123123123</span></span>
                        </div>
                        <div class="ml-2 opacity-08">
                          <svg t="1677047506421" class="icon" style="opacity: .6" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2774" width="18" height="18"><path d="M640 341.333333H128a42.666667 42.666667 0 0 0-42.666667 42.666667v512a42.666667 42.666667 0 0 0 42.666667 42.666667h512a42.666667 42.666667 0 0 0 42.666667-42.666667V384a42.666667 42.666667 0 0 0-42.666667-42.666667z m-42.666667 512H170.666667V426.666667h426.666666v426.666666z" fill="" p-id="2775"></path><path d="M896 85.333333H384a42.666667 42.666667 0 0 0-42.666667 42.666667v128h85.333334V170.666667h426.666666v426.666666h-85.333333v85.333334h128a42.666667 42.666667 0 0 0 42.666667-42.666667V128a42.666667 42.666667 0 0 0-42.666667-42.666667z" fill="" p-id="2776"></path></svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>


  </section>
</template>

<script>
import {useAccount, useBalance, useConnect} from "vagmi";
import SlideTabs from '@/components/SlideTabs'

export default {
  name: 'HomeView',
  components: {SlideTabs},
  data(){
    return {
      tabIndex: 0,
      connect: undefined,
      connectors: [],
      isConnecting: false,
      pendingConnector: undefined,
      activeConnector: undefined,
      address: undefined,
      isConnected: undefined,
      balance: undefined,
      data: {
        fil: {
          receive: ''
        },
        wfil: {
          receive: ''
        }
      },
      tablist : [
        {
          id: 'TaskManagement',
          name : 'Task Management',
          content : 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat sed. At vero eos et accusam et justo duo dolores et ea rebum satet',
        },
        {
          id: 'BuiltInChat',
          name : 'Built In Chat',
          content : 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat sed. At vero eos et accusam et justo duo dolores et ea rebum satet',
        },
        {
          id: 'ProjectAnalytics',
          name : 'Project Analytics',
          content : 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat sed. At vero eos et accusam et justo duo dolores et ea rebum satet',
        },
        {
          id: 'TaskCollaboration',
          name : 'Task Collaboration',
          content : 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat sed. At vero eos et accusam et justo duo dolores et ea rebum satet',
        },
        {
          id: 'TaskManagement2',
          name : 'Task Management',
          content : 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat sed. At vero eos et accusam et justo duo dolores et ea rebum satet',
        }
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
    const {address, isConnected} = useAccount();
    this.address = address
    this.isConnected = isConnected

    const {data: balance} = useBalance(
        {
          addressOrName: address
        })
    this.balance = balance
  },
  methods: {
    selectTab(v) {
      this.tabIndex = v
    },
    connectWallet() {
      if (this.isConnecting && this.pendingConnector && this.connectors[0].id === this.pendingConnector?.id) {
        return
      }
      this.connect(this.connectors[0])
    },
    wrap(){

    }
  },
  computed: {
    simpleAddress() {
      if (!this.address) {
        return ''
      }
      return this.address.toString().substring(0, 6) + '...' + this.address.toString().substring(this.address.length - 2)
    }
  }
}
</script>
