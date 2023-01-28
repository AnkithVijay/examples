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
  env: Environment.WALLET_EXTENSION,
  rpc: {
    local: 'https://goerli.infura.io/v3/3c221e60e7a2496886ca6b9edc23e6b7',
    mainnet: 'https://goerli.infura.io/v3/3c221e60e7a2496886ca6b9edc23e6b7',
  },
  wallet: {
    address: '0x750F225371a4e962c24B4Cd3dAACED3003B55873',
    privateKey:
      'e2bc7938291c1884b2513cdbdd70c56b026400ef67e356e050e6457b0c744f08',
  },
  tokens: {
    token0: WETH_TOKEN,
    token0Amount: 0.01,
    token1: UNI_TOKEN,
    token1Amount: 0.01,
    poolFee: FeeAmount.LOW,
  },
}
