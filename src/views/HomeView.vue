<template>
  <section class="section-padding pt-0 horizontal-accordion content-full-height mt-4">
    <div class="container">
      <div class="row justify-content-center flex-column align-content-center align-items-center">
        <h3 class="fw-extra-bold fs-36" style="z-index: 1">{{ $t('home title') }}</h3>
        <span class="fw-medium fs-18 fs-sm-14" style="z-index: 1">{{ $t('home tips') }}</span>
      </div>
      <div class="row mt-4 justify-content-center">

        <div class="col-lg-7 col-10 order-lg-0 order-1 mt-3">

          <div class=" pr-lg-5">

            <div class="fs-30 fw-extra-bold pl-2 pr-2" style="border: 3px solid #101B52">
              Put plainly, wFIL is "wrapped FIL" but let's start by introducing the players.
            </div>
            <div class="fs-24 fw-bold mt-4 ">
              FIRST, THERE'S FILECOIN TOKEN
            </div>
            <div class="fs-16 fw-medium ">
              FILECOIN or FIL is the native currency built on the FILECOIN blockchain.
            </div>

            <div class="fs-24 fw-bold mt-4 ">
              SECOND, THERE ARE ALT TOKENS
            </div>
            <div class="fs-16 fw-medium ">
              When a dApp (decentralized app) is built off of the FILECOIN Blockchain it usually implements its own form of Token.
            </div>

            <div class="fs-24 fw-bold mt-4 ">
              NOW THE FRC-2612 STANDARD
            </div>
            <div class="fs-16 fw-medium ">
              FRC-2612 is a standard developed after the release of FIL that defines how tokens are transferred and how to keep a consistent record of those transfers among tokens in the Filecoin Network.
            </div>

            <div class="fs-24 fw-bold mt-4 ">
              FUTURE THE FRC-46 STANDARD
            </div>
            <div class="fs-16 fw-medium ">
              Coming soon...
            </div>

          </div>


        </div>
        <div class="col-lg-5 col-12 order-lg-1 order-0 mb-5">

          <div class="row justify-content-center mt-3 mb-3">
            <div class="col-xl-12 col-lg-12">
              <SlideTabs @select="selectTab" ref="slideTabs"></SlideTabs>
            </div>
          </div>

          <div class="row justify-content-center" v-if="isConnected">
            <div class="col-xl-12 col-lg-12 text-white ">
              <div class="" style="background: linear-gradient(52.01deg, rgb(40, 20, 74) 0%, rgb(81, 42, 150) 100%);
             margin-bottom: -30px; padding: 30px 0 35px 0;border-top-left-radius: 1rem;border-top-right-radius: 1rem">
                <div class="d-flex align-items-center">
                  <div v-if="tabIndex === 0" class="col-7 col-md-7 p-0 pl-4">
                    <div class="fs-7">FIL Balance</div>
                    <div class="fs-5 font-weight-bold">{{ balance ? parseFloat(balance.formatted).toFixed(6) || 0 : 0 }}
                      FIL
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

                <div class="d-flex mt-3">
                  <div class="col-6 p-0 pl-4">
                    <div>TOTAL SUPPLY</div>
                    <div>200,000,000 FIL</div>
                  </div>
                  <div class="col-6 p-0 pl-4">
                    <div>HOLDERS</div>
                    <div>72,458</div>
                  </div>
                </div>

                <div class="d-flex align-items-center mt-3">
                  <div class="col-12 p-0 pl-4" >
                    <div class="pl-3 pt-1 pb-1 pr-3 mr-4" style="cursor: pointer; border-radius: 50px;background-color: rgba(0, 0, 0, 0.2)">
                      <img src="@/assets/images/filecoin-logo.svg" style="width: 16px;" class="mr-1" alt="">
                      <span class="fs-14"><span class="opacity-08 mr-1">Filecoin:</span> <span @click="gotoBrowser" class="wfil-address-text">
                        {{simpleContractAddress}}
                      </span>
                        <span class="ml-2" @click="gotoBrowser">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-link-45deg" viewBox="0 0 16 16">
                          <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
                          <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/>
                        </svg>
                        </span>
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
                      <button type="button" class="btn btn-info btn-sm btn-max" style="padding: 4px 15px;">
                        {{ $t("max") }}
                      </button>
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
                      {{ $t('connect-wallet') }}
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
                      <button type="button" class="btn btn-info btn-sm btn-max" style="padding: 4px 15px;">
                        {{ $t("max") }}
                      </button>
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
                      {{ $t('connect-wallet') }}
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
                <img src="@/assets/images/icons/w.png" alt="" style="height: 60px; width: 60px;">
              </div>
              <h5 class="mt-20 mb-15 fw-extra-bold fs-18">{{ tab.name }}</h5>
              <p class="fs-16" style="opacity: .6;">{{ tab.content }}</p>
            </div>
          </div>
        </div>
      </div>

    </div>


  </section>
</template>

<script>
import {useAccount, useBalance, useConnect, useClient} from "vagmi";
import SlideTabs from '@/components/SlideTabs'
import Web3 from "web3";
import WFILABI from '@/assets/WFIL.json'

export default {
  name: 'HomeView',
  components: {SlideTabs},
  data() {
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
      contractAddress: '0xAf6518f6F370D2f92df657299F7d910548Fb1205',
      tablist: [
        {
          id: 'TaskManagement',
          name: 'FRC-2612',
          content: 'WFIL is a wrapper token that features a 1:1 peg ratio to FIL and uses the FRC-2612 token standard instead.',
        },
        {
          id: 'Decentralized',
          name: 'Decentralized',
          content: 'You can use a decentralized exchange (similar to Uniswap on ETH) to wrap/ unwrap FIL directly',
        },
        {
          id: 'Interoperability',
          name: 'Interoperability',
          content: 'Seamless transactions between WFIL and FRC-2612 tokens reduce the risk of smart contract errors and enhance interoperability between dapps.',
        },
        {
          id: 'Compatibility',
          name: 'Compatibility',
          content: 'WFIL will support the upcoming FRC-46 standard',
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
    const {address, isConnected} = useAccount();
    this.address = address
    this.isConnected = isConnected

    const {data: balance} = useBalance(
        {
          addressOrName: address
        })
    this.balance = balance

  },
  mounted() {
    var client = useClient();
    console.log(client.value)
    const _web3 = new Web3(Web3.givenProvider);
    console.log(window.web3.currentProvider)

    console.log(this.address)
    _web3.eth.getBalance(this.address, (err, wei) => {
      console.log(wei)
    })


    // this.tans(_web3)
  },
  methods: {
    async tans(_web3){
      const contract = new _web3.eth.Contract(WFILABI.abi, this.contractAddress);


      contract.methods.deposit().send({from: this.address, value: Web3.utils.toWei("1","ether")})
      .on('receipt' , (receipt) => {
        console.log(receipt)
      })

    },
    selectTab(v) {
      this.tabIndex = v
    },
    connectWallet() {
      if (this.isConnecting && this.pendingConnector && this.connectors[0].id === this.pendingConnector?.id) {
        return
      }
      this.connect(this.connectors[0])
    },
    wrap() {

    },
    gotoBrowser(){
      window.location.href = `https://explorer.glif.io/address/${this.contractAddress}/?network=hyperspace`
    }
  },
  computed: {
    simpleAddress() {
      if (!this.address) {
        return ''
      }
      return this.address.toString().substring(0, 6) + '...' + this.address.toString().substring(this.address.length - 2)
    },
    simpleContractAddress() {
      if (!this.contractAddress) {
        return ''
      }
      return this.contractAddress.toString().substring(0, 15) + '...' + this.contractAddress.toString().substring(this.contractAddress.length - 10)
    }
  }
}
</script>
