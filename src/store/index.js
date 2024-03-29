import {createStore} from 'vuex'
import {fetchBalance, getAccount, readContract} from "@wagmi/core";
import WFILABI from "@/assets/WFIL_metadata.json";
import {utils} from "ethers";

export default createStore({
    state: {
        totalSupply: 0,
        address: '',
        isConnected: undefined,
        isConnecting: undefined,
        balance: 0,
        contractAddress: '0x60E1773636CF5E4A227d9AC24F20fEca034ee25A',
        web3modal: undefined,
        wfilBalance: 0
    },
    getters: {},
    mutations: {
        SET_CONTRACT_ADDRESS(state, {contractAddress}){
            state.contractAddress = contractAddress
        },
        SET_WEB3MODAL(state, web3modal) {
            state.web3modal = web3modal
        },
        SET_TOTALSUPPLY(state, totalSupply) {
            state.totalSupply = totalSupply
        },
        SET_ADDRESS(state, address) {
            state.address = address
        },
        SET_ISCONNECTED(state, isConnected) {
            state.isConnected = isConnected
        },
        SET_ISCONNECTING(state, isConnecting) {
            state.isConnecting = isConnecting
        },
        SET_BALANCE(state, balance) {
            state.balance = balance
        },
        SET_WFILBALANCE(state, wfilBalance) {
            state.wfilBalance = wfilBalance
        }
    },
    actions: {
        async initAccount({commit, dispatch,state}) {
            const account = getAccount()
            console.log('account', account)
            commit('SET_ISCONNECTED', account.isConnected)
            commit('SET_ISCONNECTING', account.isConnecting)
            commit('SET_ADDRESS', account.address)

            if (account.address) {
                const balance = await fetchBalance({
                    address: account.address,
                })
                commit('SET_BALANCE', balance.formatted)

                const wfilBalance = await fetchBalance({
                    address: account.address,
                    token: state.contractAddress
                })
                commit('SET_WFILBALANCE', wfilBalance.formatted)
            } else {
                commit('SET_BALANCE', 0)
                commit('SET_WFILBALANCE', 0)
            }

            dispatch('initTotalSupply')
        },
        async initTotalSupply({commit, state}) {
            const data = await readContract({
                address: state.contractAddress,
                abi: WFILABI.output.abi,
                functionName: 'totalSupply',
            })
            commit('SET_TOTALSUPPLY', utils.formatEther(data.toString()))
        }
    },
    modules: {}
})
