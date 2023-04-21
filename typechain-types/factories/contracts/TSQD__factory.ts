/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { TSQD, TSQDInterface } from "../../contracts/TSQD";

const _abi = [
  {
    inputs: [
      {
        internalType: "address[]",
        name: "recipients",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "percentages",
        type: "uint256[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
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
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162001f6938038062001f69833981810160405281019062000037919062000673565b6040518060400160405280600a81526020017f7453514420546f6b656e000000000000000000000000000000000000000000008152506040518060400160405280600481526020017f74535144000000000000000000000000000000000000000000000000000000008152508160039080519060200190620000bb92919062000451565b508060049080519060200190620000d492919062000451565b50505080518251146200011e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620001159062000805565b60405180910390fd5b600062000130620002d060201b60201c565b600a6200013e9190620009f9565b634fb100406200014f919062000b36565b9050600080600090505b84518110156200027f5760006064858381518110620001a1577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001015185620001b6919062000b36565b620001c2919062000966565b90506200021786838151811062000202577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001015182620002d960201b60201c565b84828151811062000251577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101518362000266919062000909565b9250508080620002769062000c18565b91505062000159565b5060648114620002c6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620002bd90620007e3565b60405180910390fd5b5050505062000d63565b60006012905090565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156200034c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620003439062000827565b60405180910390fd5b62000360600083836200044760201b60201c565b806002600082825462000374919062000909565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8360405162000427919062000849565b60405180910390a362000443600083836200044c60201b60201c565b5050565b505050565b505050565b8280546200045f9062000be2565b90600052602060002090601f016020900481019282620004835760008555620004cf565b82601f106200049e57805160ff1916838001178555620004cf565b82800160010185558215620004cf579182015b82811115620004ce578251825591602001919060010190620004b1565b5b509050620004de9190620004e2565b5090565b5b80821115620004fd576000816000905550600101620004e3565b5090565b60006200051862000512846200089a565b62000866565b905080838252602082019050828560208602820111156200053857600080fd5b60005b858110156200056c5781620005518882620005eb565b8452602084019350602083019250506001810190506200053b565b5050509392505050565b60006200058d6200058784620008c9565b62000866565b90508083825260208201905082856020860282011115620005ad57600080fd5b60005b85811015620005e15781620005c688826200065c565b845260208401935060208301925050600181019050620005b0565b5050509392505050565b600081519050620005fc8162000d2f565b92915050565b600082601f8301126200061457600080fd5b81516200062684826020860162000501565b91505092915050565b600082601f8301126200064157600080fd5b81516200065384826020860162000576565b91505092915050565b6000815190506200066d8162000d49565b92915050565b600080604083850312156200068757600080fd5b600083015167ffffffffffffffff811115620006a257600080fd5b620006b08582860162000602565b925050602083015167ffffffffffffffff811115620006ce57600080fd5b620006dc858286016200062f565b9150509250929050565b6000620006f5601e83620008f8565b91507f50657263656e7461676573206d7573742073756d20757020746f2031303000006000830152602082019050919050565b600062000737603b83620008f8565b91507f526563697069656e747320616e642070657263656e746167657320617272617960008301527f73206d7573742068617665207468652073616d65206c656e67746800000000006020830152604082019050919050565b60006200079f601f83620008f8565b91507f45524332303a206d696e7420746f20746865207a65726f2061646472657373006000830152602082019050919050565b620007dd8162000bcb565b82525050565b60006020820190508181036000830152620007fe81620006e6565b9050919050565b60006020820190508181036000830152620008208162000728565b9050919050565b60006020820190508181036000830152620008428162000790565b9050919050565b6000602082019050620008606000830184620007d2565b92915050565b6000604051905081810181811067ffffffffffffffff8211171562000890576200088f62000cf3565b5b8060405250919050565b600067ffffffffffffffff821115620008b857620008b762000cf3565b5b602082029050602081019050919050565b600067ffffffffffffffff821115620008e757620008e662000cf3565b5b602082029050602081019050919050565b600082825260208201905092915050565b6000620009168262000bcb565b9150620009238362000bcb565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156200095b576200095a62000c66565b5b828201905092915050565b6000620009738262000bcb565b9150620009808362000bcb565b92508262000993576200099262000c95565b5b828204905092915050565b6000808291508390505b6001851115620009f057808604811115620009c857620009c762000c66565b5b6001851615620009d85780820291505b8081029050620009e88562000d22565b9450620009a8565b94509492505050565b600062000a068262000bcb565b915062000a138362000bd5565b925062000a427fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff848462000a4a565b905092915050565b60008262000a5c576001905062000b2f565b8162000a6c576000905062000b2f565b816001811462000a85576002811462000a905762000ac6565b600191505062000b2f565b60ff84111562000aa55762000aa462000c66565b5b8360020a91508482111562000abf5762000abe62000c66565b5b5062000b2f565b5060208310610133831016604e8410600b841016171562000b005782820a90508381111562000afa5762000af962000c66565b5b62000b2f565b62000b0f84848460016200099e565b9250905081840481111562000b295762000b2862000c66565b5b81810290505b9392505050565b600062000b438262000bcb565b915062000b508362000bcb565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048311821515161562000b8c5762000b8b62000c66565b5b828202905092915050565b600062000ba48262000bab565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b6000600282049050600182168062000bfb57607f821691505b6020821081141562000c125762000c1162000cc4565b5b50919050565b600062000c258262000bcb565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141562000c5b5762000c5a62000c66565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60008160011c9050919050565b62000d3a8162000b97565b811462000d4657600080fd5b50565b62000d548162000bcb565b811462000d6057600080fd5b50565b6111f68062000d736000396000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c80633950935111610071578063395093511461016857806370a082311461019857806395d89b41146101c8578063a457c2d7146101e6578063a9059cbb14610216578063dd62ed3e14610246576100a9565b806306fdde03146100ae578063095ea7b3146100cc57806318160ddd146100fc57806323b872dd1461011a578063313ce5671461014a575b600080fd5b6100b6610276565b6040516100c39190610ebf565b60405180910390f35b6100e660048036038101906100e19190610b5e565b610308565b6040516100f39190610ea4565b60405180910390f35b61010461032b565b6040516101119190610fc1565b60405180910390f35b610134600480360381019061012f9190610b0f565b610335565b6040516101419190610ea4565b60405180910390f35b610152610364565b60405161015f9190610fdc565b60405180910390f35b610182600480360381019061017d9190610b5e565b61036d565b60405161018f9190610ea4565b60405180910390f35b6101b260048036038101906101ad9190610aaa565b6103a4565b6040516101bf9190610fc1565b60405180910390f35b6101d06103ec565b6040516101dd9190610ebf565b60405180910390f35b61020060048036038101906101fb9190610b5e565b61047e565b60405161020d9190610ea4565b60405180910390f35b610230600480360381019061022b9190610b5e565b6104f5565b60405161023d9190610ea4565b60405180910390f35b610260600480360381019061025b9190610ad3565b610518565b60405161026d9190610fc1565b60405180910390f35b606060038054610285906110f1565b80601f01602080910402602001604051908101604052809291908181526020018280546102b1906110f1565b80156102fe5780601f106102d3576101008083540402835291602001916102fe565b820191906000526020600020905b8154815290600101906020018083116102e157829003601f168201915b5050505050905090565b60008061031361059f565b90506103208185856105a7565b600191505092915050565b6000600254905090565b60008061034061059f565b905061034d858285610772565b6103588585856107fe565b60019150509392505050565b60006012905090565b60008061037861059f565b905061039981858561038a8589610518565b6103949190611013565b6105a7565b600191505092915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6060600480546103fb906110f1565b80601f0160208091040260200160405190810160405280929190818152602001828054610427906110f1565b80156104745780601f1061044957610100808354040283529160200191610474565b820191906000526020600020905b81548152906001019060200180831161045757829003601f168201915b5050505050905090565b60008061048961059f565b905060006104978286610518565b9050838110156104dc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104d390610fa1565b60405180910390fd5b6104e982868684036105a7565b60019250505092915050565b60008061050061059f565b905061050d8185856107fe565b600191505092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610617576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161060e90610f81565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610687576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161067e90610f01565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040516107659190610fc1565b60405180910390a3505050565b600061077e8484610518565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146107f857818110156107ea576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107e190610f21565b60405180910390fd5b6107f784848484036105a7565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561086e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161086590610f61565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156108de576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108d590610ee1565b60405180910390fd5b6108e9838383610a76565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490508181101561096f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161096690610f41565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610a5d9190610fc1565b60405180910390a3610a70848484610a7b565b50505050565b505050565b505050565b600081359050610a8f81611192565b92915050565b600081359050610aa4816111a9565b92915050565b600060208284031215610abc57600080fd5b6000610aca84828501610a80565b91505092915050565b60008060408385031215610ae657600080fd5b6000610af485828601610a80565b9250506020610b0585828601610a80565b9150509250929050565b600080600060608486031215610b2457600080fd5b6000610b3286828701610a80565b9350506020610b4386828701610a80565b9250506040610b5486828701610a95565b9150509250925092565b60008060408385031215610b7157600080fd5b6000610b7f85828601610a80565b9250506020610b9085828601610a95565b9150509250929050565b610ba38161107b565b82525050565b6000610bb482610ff7565b610bbe8185611002565b9350610bce8185602086016110be565b610bd781611181565b840191505092915050565b6000610bef602383611002565b91507f45524332303a207472616e7366657220746f20746865207a65726f206164647260008301527f65737300000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000610c55602283611002565b91507f45524332303a20617070726f766520746f20746865207a65726f20616464726560008301527f73730000000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000610cbb601d83611002565b91507f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006000830152602082019050919050565b6000610cfb602683611002565b91507f45524332303a207472616e7366657220616d6f756e742065786365656473206260008301527f616c616e636500000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000610d61602583611002565b91507f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008301527f64726573730000000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000610dc7602483611002565b91507f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008301527f72657373000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000610e2d602583611002565b91507f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008301527f207a65726f0000000000000000000000000000000000000000000000000000006020830152604082019050919050565b610e8f816110a7565b82525050565b610e9e816110b1565b82525050565b6000602082019050610eb96000830184610b9a565b92915050565b60006020820190508181036000830152610ed98184610ba9565b905092915050565b60006020820190508181036000830152610efa81610be2565b9050919050565b60006020820190508181036000830152610f1a81610c48565b9050919050565b60006020820190508181036000830152610f3a81610cae565b9050919050565b60006020820190508181036000830152610f5a81610cee565b9050919050565b60006020820190508181036000830152610f7a81610d54565b9050919050565b60006020820190508181036000830152610f9a81610dba565b9050919050565b60006020820190508181036000830152610fba81610e20565b9050919050565b6000602082019050610fd66000830184610e86565b92915050565b6000602082019050610ff16000830184610e95565b92915050565b600081519050919050565b600082825260208201905092915050565b600061101e826110a7565b9150611029836110a7565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561105e5761105d611123565b5b828201905092915050565b600061107482611087565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b60005b838110156110dc5780820151818401526020810190506110c1565b838111156110eb576000848401525b50505050565b6000600282049050600182168061110957607f821691505b6020821081141561111d5761111c611152565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000601f19601f8301169050919050565b61119b81611069565b81146111a657600080fd5b50565b6111b2816110a7565b81146111bd57600080fd5b5056fea2646970667358221220e211659f5e92e7c927a03b2a4ed9e025d9d0f58c586854effc6bf35e86674fb464736f6c63430008000033";

type TSQDConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TSQDConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TSQD__factory extends ContractFactory {
  constructor(...args: TSQDConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    recipients: PromiseOrValue<string>[],
    percentages: PromiseOrValue<BigNumberish>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TSQD> {
    return super.deploy(
      recipients,
      percentages,
      overrides || {}
    ) as Promise<TSQD>;
  }
  override getDeployTransaction(
    recipients: PromiseOrValue<string>[],
    percentages: PromiseOrValue<BigNumberish>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(recipients, percentages, overrides || {});
  }
  override attach(address: string): TSQD {
    return super.attach(address) as TSQD;
  }
  override connect(signer: Signer): TSQD__factory {
    return super.connect(signer) as TSQD__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TSQDInterface {
    return new utils.Interface(_abi) as TSQDInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): TSQD {
    return new Contract(address, _abi, signerOrProvider) as TSQD;
  }
}
