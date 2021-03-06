/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface IWETHInterface extends ethers.utils.Interface {
  functions: {
    "deposit()": FunctionFragment;
    "withdraw(uint256)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "deposit", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;

  events: {};
}

export class IWETH extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  listeners<T, G>(
    eventFilter?: TypedEventFilter<T, G>
  ): Array<TypedListener<T, G>>;
  off<T, G>(
    eventFilter: TypedEventFilter<T, G>,
    listener: TypedListener<T, G>
  ): this;
  on<T, G>(
    eventFilter: TypedEventFilter<T, G>,
    listener: TypedListener<T, G>
  ): this;
  once<T, G>(
    eventFilter: TypedEventFilter<T, G>,
    listener: TypedListener<T, G>
  ): this;
  removeListener<T, G>(
    eventFilter: TypedEventFilter<T, G>,
    listener: TypedListener<T, G>
  ): this;
  removeAllListeners<T, G>(eventFilter: TypedEventFilter<T, G>): this;

  queryFilter<T, G>(
    event: TypedEventFilter<T, G>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<T & G>>>;

  interface: IWETHInterface;

  functions: {
    deposit(overrides?: PayableOverrides): Promise<ContractTransaction>;

    "deposit()"(overrides?: PayableOverrides): Promise<ContractTransaction>;

    withdraw(
      arg0: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "withdraw(uint256)"(
      arg0: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  deposit(overrides?: PayableOverrides): Promise<ContractTransaction>;

  "deposit()"(overrides?: PayableOverrides): Promise<ContractTransaction>;

  withdraw(
    arg0: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "withdraw(uint256)"(
    arg0: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    deposit(overrides?: CallOverrides): Promise<void>;

    "deposit()"(overrides?: CallOverrides): Promise<void>;

    withdraw(arg0: BigNumberish, overrides?: CallOverrides): Promise<void>;

    "withdraw(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    deposit(overrides?: PayableOverrides): Promise<BigNumber>;

    "deposit()"(overrides?: PayableOverrides): Promise<BigNumber>;

    withdraw(arg0: BigNumberish, overrides?: Overrides): Promise<BigNumber>;

    "withdraw(uint256)"(
      arg0: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    deposit(overrides?: PayableOverrides): Promise<PopulatedTransaction>;

    "deposit()"(overrides?: PayableOverrides): Promise<PopulatedTransaction>;

    withdraw(
      arg0: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "withdraw(uint256)"(
      arg0: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
