# TACT Compilation Report
Contract: JettonMaster
BOC Size: 1017 bytes

# Types
Total Types: 14

## StateInit
TLB: `_ code:^cell data:^cell = StateInit`
Signature: `StateInit{code:^cell,data:^cell}`

## Context
TLB: `_ bounced:bool sender:address value:int257 raw:^slice = Context`
Signature: `Context{bounced:bool,sender:address,value:int257,raw:^slice}`

## SendParameters
TLB: `_ bounce:bool to:address value:int257 mode:int257 body:Maybe ^cell code:Maybe ^cell data:Maybe ^cell = SendParameters`
Signature: `SendParameters{bounce:bool,to:address,value:int257,mode:int257,body:Maybe ^cell,code:Maybe ^cell,data:Maybe ^cell}`

## Deploy
TLB: `deploy#946a98b6 queryId:uint64 = Deploy`
Signature: `Deploy{queryId:uint64}`

## DeployOk
TLB: `deploy_ok#aff90f57 queryId:uint64 = DeployOk`
Signature: `DeployOk{queryId:uint64}`

## FactoryDeploy
TLB: `factory_deploy#6d0ff13b queryId:uint64 cashback:address = FactoryDeploy`
Signature: `FactoryDeploy{queryId:uint64,cashback:address}`

## NewTodo
TLB: `new_todo#6b90cc37 task:^string = NewTodo`
Signature: `NewTodo{task:^string}`

## InternalSetTask
TLB: `internal_set_task#bbeae65e task:^string = InternalSetTask`
Signature: `InternalSetTask{task:^string}`

## CompleteTodo
TLB: `complete_todo#9a374e9e seqno:uint256 = CompleteTodo`
Signature: `CompleteTodo{seqno:uint256}`

## InternalComplete
TLB: `internal_complete#cf008c4c excess:address = InternalComplete`
Signature: `InternalComplete{excess:address}`

## NewTodoResponse
TLB: `new_todo_response#e563e39e seqno:uint256 = NewTodoResponse`
Signature: `NewTodoResponse{seqno:uint256}`

## InternalAdd
TLB: `internal_add#12412733 amount:coins origin:address = InternalAdd`
Signature: `InternalAdd{amount:coins,origin:address}`

## Transfer
TLB: `transfer#73dabe5c amount:coins to:address = Transfer`
Signature: `Transfer{amount:coins,to:address}`

## Metadata
TLB: `_ symbol:^string totalSupply:int257 = Metadata`
Signature: `Metadata{symbol:^string,totalSupply:int257}`

# Get Methods
Total Get Methods: 2

## walletAddress
Argument: owner

## metadata

# Error Codes
2: Stack undeflow
3: Stack overflow
4: Integer overflow
5: Integer out of expected range
6: Invalid opcode
7: Type check error
8: Cell overflow
9: Cell underflow
10: Dictionary error
13: Out of gas error
32: Method ID not found
34: Action is invalid or not supported
37: Not enough TON
38: Not enough extra-currencies
128: Null reference exception
129: Invalid serialization prefix
130: Invalid incoming message
131: Constraints error
132: Access denied
133: Contract stopped
134: Invalid argument
135: Code of a contract was not found
136: Invalid address
137: Masterchain support is not enabled for this contract
34232: JettonWallet only
49469: Access denied
54404: Parent only
54615: Insufficient balance