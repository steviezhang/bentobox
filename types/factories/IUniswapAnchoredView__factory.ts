/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { IUniswapAnchoredView } from "../IUniswapAnchoredView";

export class IUniswapAnchoredView__factory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IUniswapAnchoredView {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IUniswapAnchoredView;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
    ],
    name: "price",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
