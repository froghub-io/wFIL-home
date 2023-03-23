const filTestChain = {
    id: 3141,
    name: 'Filecoin - Hyperspace',
    network: 'wallaby',
    nativeCurrency: {
        decimals: 18,
        name: 'TFIL',
        symbol: 'TFIL',
    },
    rpcUrls: {
        default: { http: ['https://api.hyperspace.node.glif.io/rpc/v1'] },
    },
    blockExplorers: {
        default: { name: 'SnowTrace', url: 'https://hyperspace.filfox.info/en' },
    },
}

const filChain = {
    id: 314,
    name: 'Filecoin',
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
