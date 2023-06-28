const filTestChain = {
    id: 314159,
    name: 'Filecoin - Calibration',
    network: 'Calibration',
    nativeCurrency: {
        decimals: 18,
        name: 'TFIL',
        symbol: 'TFIL',
    },
    rpcUrls: {
        default: {http: ['https://api.calibration.node.glif.io/']},
        public: {http: ['https://api.calibration.node.glif.io/']},
    },
    blockExplorers: {
        default: {name: 'SnowTrace', url: 'https://calibration.filfox.info/en'},
    },
}

const filChain = {
    id: 314,
    name: 'Filecoin - Mainnet',
    network: 'main',
    nativeCurrency: {
        decimals: 18,
        name: 'FIL',
        symbol: 'FIL',
    },
    rpcUrls: {
        default: { http: ['https://api.node.glif.io/'] },
    },
    blockExplorers: {
        default: { name: 'SnowTrace', url: 'https://filfox.info/en' },
    },
}

export {filChain,filTestChain}
