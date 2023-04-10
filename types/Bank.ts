/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export declare namespace Bank {
  export type AccountStruct = {
    owner: PromiseOrValue<string>;
    accountName: PromiseOrValue<string>;
    description: PromiseOrValue<string>;
    amount: PromiseOrValue<BigNumberish>;
    lockTime: PromiseOrValue<BigNumberish>;
    accountId: PromiseOrValue<BigNumberish>;
  };

  export type AccountStructOutput = [
    string,
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber
  ] & {
    owner: string;
    accountName: string;
    description: string;
    amount: BigNumber;
    lockTime: BigNumber;
    accountId: BigNumber;
  };
}

export interface BankInterface extends utils.Interface {
  functions: {
    "accounts(uint256)": FunctionFragment;
    "createAccount(string,string)": FunctionFragment;
    "deleteAccount(uint256)": FunctionFragment;
    "deposit(uint256)": FunctionFragment;
    "getAccount(uint256)": FunctionFragment;
    "getBankBalance()": FunctionFragment;
    "i_contractOwner()": FunctionFragment;
    "lockAccount(uint256,uint256)": FunctionFragment;
    "s_commission()": FunctionFragment;
    "s_totalAccount()": FunctionFragment;
    "updateCommission(uint256)": FunctionFragment;
    "withdraw(uint256,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "accounts"
      | "createAccount"
      | "deleteAccount"
      | "deposit"
      | "getAccount"
      | "getBankBalance"
      | "i_contractOwner"
      | "lockAccount"
      | "s_commission"
      | "s_totalAccount"
      | "updateCommission"
      | "withdraw"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "accounts",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "createAccount",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "deleteAccount",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "deposit",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getAccount",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getBankBalance",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "i_contractOwner",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "lockAccount",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "s_commission",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "s_totalAccount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "updateCommission",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(functionFragment: "accounts", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "createAccount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "deleteAccount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getAccount", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getBankBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "i_contractOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "lockAccount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "s_commission",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "s_totalAccount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateCommission",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;

  events: {
    "locked(tuple)": EventFragment;
    "newDeposit(uint256,uint256,address,string)": EventFragment;
    "newWithdraw(uint256,uint256,address,string)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "locked"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "newDeposit"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "newWithdraw"): EventFragment;
}

export interface lockedEventObject {
  account: Bank.AccountStructOutput;
}
export type lockedEvent = TypedEvent<
  [Bank.AccountStructOutput],
  lockedEventObject
>;

export type lockedEventFilter = TypedEventFilter<lockedEvent>;

export interface newDepositEventObject {
  amount: BigNumber;
  time: BigNumber;
  owner: string;
  accountName: string;
}
export type newDepositEvent = TypedEvent<
  [BigNumber, BigNumber, string, string],
  newDepositEventObject
>;

export type newDepositEventFilter = TypedEventFilter<newDepositEvent>;

export interface newWithdrawEventObject {
  amount: BigNumber;
  newBalance: BigNumber;
  owner: string;
  accoutName: string;
}
export type newWithdrawEvent = TypedEvent<
  [BigNumber, BigNumber, string, string],
  newWithdrawEventObject
>;

export type newWithdrawEventFilter = TypedEventFilter<newWithdrawEvent>;

export interface Bank extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: BankInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    accounts(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, BigNumber, BigNumber, BigNumber] & {
        owner: string;
        accountName: string;
        description: string;
        amount: BigNumber;
        lockTime: BigNumber;
        accountId: BigNumber;
      }
    >;

    createAccount(
      _accountName: PromiseOrValue<string>,
      _accountDescription: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    deleteAccount(
      _accountId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    deposit(
      _accountId: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getAccount(
      _accountId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [Bank.AccountStructOutput] & { _account: Bank.AccountStructOutput }
    >;

    getBankBalance(overrides?: CallOverrides): Promise<[BigNumber]>;

    i_contractOwner(overrides?: CallOverrides): Promise<[string]>;

    lockAccount(
      _accountId: PromiseOrValue<BigNumberish>,
      _timestamp: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    s_commission(overrides?: CallOverrides): Promise<[BigNumber]>;

    s_totalAccount(overrides?: CallOverrides): Promise<[BigNumber]>;

    updateCommission(
      newCommission: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    withdraw(
      _accountId: PromiseOrValue<BigNumberish>,
      _amountToWithdraw: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  accounts(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [string, string, string, BigNumber, BigNumber, BigNumber] & {
      owner: string;
      accountName: string;
      description: string;
      amount: BigNumber;
      lockTime: BigNumber;
      accountId: BigNumber;
    }
  >;

  createAccount(
    _accountName: PromiseOrValue<string>,
    _accountDescription: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  deleteAccount(
    _accountId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  deposit(
    _accountId: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getAccount(
    _accountId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<Bank.AccountStructOutput>;

  getBankBalance(overrides?: CallOverrides): Promise<BigNumber>;

  i_contractOwner(overrides?: CallOverrides): Promise<string>;

  lockAccount(
    _accountId: PromiseOrValue<BigNumberish>,
    _timestamp: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  s_commission(overrides?: CallOverrides): Promise<BigNumber>;

  s_totalAccount(overrides?: CallOverrides): Promise<BigNumber>;

  updateCommission(
    newCommission: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  withdraw(
    _accountId: PromiseOrValue<BigNumberish>,
    _amountToWithdraw: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    accounts(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, BigNumber, BigNumber, BigNumber] & {
        owner: string;
        accountName: string;
        description: string;
        amount: BigNumber;
        lockTime: BigNumber;
        accountId: BigNumber;
      }
    >;

    createAccount(
      _accountName: PromiseOrValue<string>,
      _accountDescription: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    deleteAccount(
      _accountId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    deposit(
      _accountId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    getAccount(
      _accountId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<Bank.AccountStructOutput>;

    getBankBalance(overrides?: CallOverrides): Promise<BigNumber>;

    i_contractOwner(overrides?: CallOverrides): Promise<string>;

    lockAccount(
      _accountId: PromiseOrValue<BigNumberish>,
      _timestamp: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    s_commission(overrides?: CallOverrides): Promise<BigNumber>;

    s_totalAccount(overrides?: CallOverrides): Promise<BigNumber>;

    updateCommission(
      newCommission: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    withdraw(
      _accountId: PromiseOrValue<BigNumberish>,
      _amountToWithdraw: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "locked(tuple)"(account?: null): lockedEventFilter;
    locked(account?: null): lockedEventFilter;

    "newDeposit(uint256,uint256,address,string)"(
      amount?: null,
      time?: null,
      owner?: null,
      accountName?: null
    ): newDepositEventFilter;
    newDeposit(
      amount?: null,
      time?: null,
      owner?: null,
      accountName?: null
    ): newDepositEventFilter;

    "newWithdraw(uint256,uint256,address,string)"(
      amount?: null,
      newBalance?: null,
      owner?: null,
      accoutName?: null
    ): newWithdrawEventFilter;
    newWithdraw(
      amount?: null,
      newBalance?: null,
      owner?: null,
      accoutName?: null
    ): newWithdrawEventFilter;
  };

  estimateGas: {
    accounts(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    createAccount(
      _accountName: PromiseOrValue<string>,
      _accountDescription: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    deleteAccount(
      _accountId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    deposit(
      _accountId: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getAccount(
      _accountId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getBankBalance(overrides?: CallOverrides): Promise<BigNumber>;

    i_contractOwner(overrides?: CallOverrides): Promise<BigNumber>;

    lockAccount(
      _accountId: PromiseOrValue<BigNumberish>,
      _timestamp: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    s_commission(overrides?: CallOverrides): Promise<BigNumber>;

    s_totalAccount(overrides?: CallOverrides): Promise<BigNumber>;

    updateCommission(
      newCommission: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    withdraw(
      _accountId: PromiseOrValue<BigNumberish>,
      _amountToWithdraw: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    accounts(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    createAccount(
      _accountName: PromiseOrValue<string>,
      _accountDescription: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    deleteAccount(
      _accountId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    deposit(
      _accountId: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getAccount(
      _accountId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getBankBalance(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    i_contractOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    lockAccount(
      _accountId: PromiseOrValue<BigNumberish>,
      _timestamp: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    s_commission(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    s_totalAccount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    updateCommission(
      newCommission: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    withdraw(
      _accountId: PromiseOrValue<BigNumberish>,
      _amountToWithdraw: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
