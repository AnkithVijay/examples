import { Token } from '@uniswap/sdk-core'
import { FeeAmount } from '@uniswap/v3-sdk'
import { UNI_TOKEN, WETH_TOKEN } from './libs/constants'

// Sets if the example should run locally or on chain
export enum Environment {
  LOCAL,
  WALLET_EXTENSION,
  MAINNET,
}

// Inputs that configure this example to run
export interface ExampleConfig {
  env: Environment
  rpc: {
    local: string
    mainnet: string
  }
  wallet: {
    address: string
    privateKey: string
  }
  tokens: {
    token0: Token
    token0Amount: number
    token1: Token
    token1Amount: number
    poolFee: FeeAmount
  }
}

// Example Configuration

export const CurrentConfig: ExampleConfig = {
  env: Environment.LOCAL,
  rpc: {
    local: 'https://goerli.infura.io/v3/3c221e60e7a2496886ca6b9edc23e6b7',
    mainnet: 'https://goerli.infura.io/v3/3c221e60e7a2496886ca6b9edc23e6b7',
  },
  wallet: {
    address: '0x31eBDa2691dA28640A2350A9D804c0fcd765A54A',
    privateKey:
      'ff3388d43b9313125c223bb692c781d618d14bff8a5e3319900bcb9a0188e5b8',
  },
  tokens: {
    token0: WETH_TOKEN,
    token0Amount: 0.01,
    token1: UNI_TOKEN,
    token1Amount: 0.01,
    poolFee: FeeAmount.LOW,
  },
}
