import { 
    Cell,
    Slice, 
    Address, 
    Builder, 
    beginCell, 
    ComputeError, 
    TupleItem, 
    TupleReader, 
    Dictionary, 
    contractAddress, 
    ContractProvider, 
    Sender, 
    Contract, 
    ContractABI, 
    ABIType,
    ABIGetter,
    ABIReceiver,
    TupleBuilder,
    DictionaryValue
} from 'ton-core';

export type StateInit = {
    $$type: 'StateInit';
    code: Cell;
    data: Cell;
}

export function storeStateInit(src: StateInit) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeRef(src.code);
        b_0.storeRef(src.data);
    };
}

export function loadStateInit(slice: Slice) {
    let sc_0 = slice;
    let _code = sc_0.loadRef();
    let _data = sc_0.loadRef();
    return { $$type: 'StateInit' as const, code: _code, data: _data };
}

function loadTupleStateInit(source: TupleReader) {
    let _code = source.readCell();
    let _data = source.readCell();
    return { $$type: 'StateInit' as const, code: _code, data: _data };
}

function storeTupleStateInit(source: StateInit) {
    let builder = new TupleBuilder();
    builder.writeCell(source.code);
    builder.writeCell(source.data);
    return builder.build();
}

function dictValueParserStateInit(): DictionaryValue<StateInit> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeStateInit(src)).endCell());
        },
        parse: (src) => {
            return loadStateInit(src.loadRef().beginParse());
        }
    }
}

export type Context = {
    $$type: 'Context';
    bounced: boolean;
    sender: Address;
    value: bigint;
    raw: Cell;
}

export function storeContext(src: Context) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeBit(src.bounced);
        b_0.storeAddress(src.sender);
        b_0.storeInt(src.value, 257);
        b_0.storeRef(src.raw);
    };
}

export function loadContext(slice: Slice) {
    let sc_0 = slice;
    let _bounced = sc_0.loadBit();
    let _sender = sc_0.loadAddress();
    let _value = sc_0.loadIntBig(257);
    let _raw = sc_0.loadRef();
    return { $$type: 'Context' as const, bounced: _bounced, sender: _sender, value: _value, raw: _raw };
}

function loadTupleContext(source: TupleReader) {
    let _bounced = source.readBoolean();
    let _sender = source.readAddress();
    let _value = source.readBigNumber();
    let _raw = source.readCell();
    return { $$type: 'Context' as const, bounced: _bounced, sender: _sender, value: _value, raw: _raw };
}

function storeTupleContext(source: Context) {
    let builder = new TupleBuilder();
    builder.writeBoolean(source.bounced);
    builder.writeAddress(source.sender);
    builder.writeNumber(source.value);
    builder.writeSlice(source.raw);
    return builder.build();
}

function dictValueParserContext(): DictionaryValue<Context> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeContext(src)).endCell());
        },
        parse: (src) => {
            return loadContext(src.loadRef().beginParse());
        }
    }
}

export type SendParameters = {
    $$type: 'SendParameters';
    bounce: boolean;
    to: Address;
    value: bigint;
    mode: bigint;
    body: Cell | null;
    code: Cell | null;
    data: Cell | null;
}

export function storeSendParameters(src: SendParameters) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeBit(src.bounce);
        b_0.storeAddress(src.to);
        b_0.storeInt(src.value, 257);
        b_0.storeInt(src.mode, 257);
        if (src.body !== null && src.body !== undefined) { b_0.storeBit(true).storeRef(src.body); } else { b_0.storeBit(false); }
        if (src.code !== null && src.code !== undefined) { b_0.storeBit(true).storeRef(src.code); } else { b_0.storeBit(false); }
        if (src.data !== null && src.data !== undefined) { b_0.storeBit(true).storeRef(src.data); } else { b_0.storeBit(false); }
    };
}

export function loadSendParameters(slice: Slice) {
    let sc_0 = slice;
    let _bounce = sc_0.loadBit();
    let _to = sc_0.loadAddress();
    let _value = sc_0.loadIntBig(257);
    let _mode = sc_0.loadIntBig(257);
    let _body = sc_0.loadBit() ? sc_0.loadRef() : null;
    let _code = sc_0.loadBit() ? sc_0.loadRef() : null;
    let _data = sc_0.loadBit() ? sc_0.loadRef() : null;
    return { $$type: 'SendParameters' as const, bounce: _bounce, to: _to, value: _value, mode: _mode, body: _body, code: _code, data: _data };
}

function loadTupleSendParameters(source: TupleReader) {
    let _bounce = source.readBoolean();
    let _to = source.readAddress();
    let _value = source.readBigNumber();
    let _mode = source.readBigNumber();
    let _body = source.readCellOpt();
    let _code = source.readCellOpt();
    let _data = source.readCellOpt();
    return { $$type: 'SendParameters' as const, bounce: _bounce, to: _to, value: _value, mode: _mode, body: _body, code: _code, data: _data };
}

function storeTupleSendParameters(source: SendParameters) {
    let builder = new TupleBuilder();
    builder.writeBoolean(source.bounce);
    builder.writeAddress(source.to);
    builder.writeNumber(source.value);
    builder.writeNumber(source.mode);
    builder.writeCell(source.body);
    builder.writeCell(source.code);
    builder.writeCell(source.data);
    return builder.build();
}

function dictValueParserSendParameters(): DictionaryValue<SendParameters> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeSendParameters(src)).endCell());
        },
        parse: (src) => {
            return loadSendParameters(src.loadRef().beginParse());
        }
    }
}

export type Deploy = {
    $$type: 'Deploy';
    queryId: bigint;
}

export function storeDeploy(src: Deploy) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2490013878, 32);
        b_0.storeUint(src.queryId, 64);
    };
}

export function loadDeploy(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2490013878) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    return { $$type: 'Deploy' as const, queryId: _queryId };
}

function loadTupleDeploy(source: TupleReader) {
    let _queryId = source.readBigNumber();
    return { $$type: 'Deploy' as const, queryId: _queryId };
}

function storeTupleDeploy(source: Deploy) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    return builder.build();
}

function dictValueParserDeploy(): DictionaryValue<Deploy> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeDeploy(src)).endCell());
        },
        parse: (src) => {
            return loadDeploy(src.loadRef().beginParse());
        }
    }
}

export type DeployOk = {
    $$type: 'DeployOk';
    queryId: bigint;
}

export function storeDeployOk(src: DeployOk) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2952335191, 32);
        b_0.storeUint(src.queryId, 64);
    };
}

export function loadDeployOk(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2952335191) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    return { $$type: 'DeployOk' as const, queryId: _queryId };
}

function loadTupleDeployOk(source: TupleReader) {
    let _queryId = source.readBigNumber();
    return { $$type: 'DeployOk' as const, queryId: _queryId };
}

function storeTupleDeployOk(source: DeployOk) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    return builder.build();
}

function dictValueParserDeployOk(): DictionaryValue<DeployOk> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeDeployOk(src)).endCell());
        },
        parse: (src) => {
            return loadDeployOk(src.loadRef().beginParse());
        }
    }
}

export type FactoryDeploy = {
    $$type: 'FactoryDeploy';
    queryId: bigint;
    cashback: Address;
}

export function storeFactoryDeploy(src: FactoryDeploy) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(1829761339, 32);
        b_0.storeUint(src.queryId, 64);
        b_0.storeAddress(src.cashback);
    };
}

export function loadFactoryDeploy(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 1829761339) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    let _cashback = sc_0.loadAddress();
    return { $$type: 'FactoryDeploy' as const, queryId: _queryId, cashback: _cashback };
}

function loadTupleFactoryDeploy(source: TupleReader) {
    let _queryId = source.readBigNumber();
    let _cashback = source.readAddress();
    return { $$type: 'FactoryDeploy' as const, queryId: _queryId, cashback: _cashback };
}

function storeTupleFactoryDeploy(source: FactoryDeploy) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    builder.writeAddress(source.cashback);
    return builder.build();
}

function dictValueParserFactoryDeploy(): DictionaryValue<FactoryDeploy> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeFactoryDeploy(src)).endCell());
        },
        parse: (src) => {
            return loadFactoryDeploy(src.loadRef().beginParse());
        }
    }
}

export type NewTodo = {
    $$type: 'NewTodo';
    task: string;
}

export function storeNewTodo(src: NewTodo) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(1804651575, 32);
        b_0.storeStringRefTail(src.task);
    };
}

export function loadNewTodo(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 1804651575) { throw Error('Invalid prefix'); }
    let _task = sc_0.loadStringRefTail();
    return { $$type: 'NewTodo' as const, task: _task };
}

function loadTupleNewTodo(source: TupleReader) {
    let _task = source.readString();
    return { $$type: 'NewTodo' as const, task: _task };
}

function storeTupleNewTodo(source: NewTodo) {
    let builder = new TupleBuilder();
    builder.writeString(source.task);
    return builder.build();
}

function dictValueParserNewTodo(): DictionaryValue<NewTodo> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeNewTodo(src)).endCell());
        },
        parse: (src) => {
            return loadNewTodo(src.loadRef().beginParse());
        }
    }
}

export type InternalSetTask = {
    $$type: 'InternalSetTask';
    task: string;
}

export function storeInternalSetTask(src: InternalSetTask) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(3152733790, 32);
        b_0.storeStringRefTail(src.task);
    };
}

export function loadInternalSetTask(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 3152733790) { throw Error('Invalid prefix'); }
    let _task = sc_0.loadStringRefTail();
    return { $$type: 'InternalSetTask' as const, task: _task };
}

function loadTupleInternalSetTask(source: TupleReader) {
    let _task = source.readString();
    return { $$type: 'InternalSetTask' as const, task: _task };
}

function storeTupleInternalSetTask(source: InternalSetTask) {
    let builder = new TupleBuilder();
    builder.writeString(source.task);
    return builder.build();
}

function dictValueParserInternalSetTask(): DictionaryValue<InternalSetTask> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeInternalSetTask(src)).endCell());
        },
        parse: (src) => {
            return loadInternalSetTask(src.loadRef().beginParse());
        }
    }
}

export type CompleteTodo = {
    $$type: 'CompleteTodo';
    seqno: bigint;
}

export function storeCompleteTodo(src: CompleteTodo) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2587315870, 32);
        b_0.storeUint(src.seqno, 256);
    };
}

export function loadCompleteTodo(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2587315870) { throw Error('Invalid prefix'); }
    let _seqno = sc_0.loadUintBig(256);
    return { $$type: 'CompleteTodo' as const, seqno: _seqno };
}

function loadTupleCompleteTodo(source: TupleReader) {
    let _seqno = source.readBigNumber();
    return { $$type: 'CompleteTodo' as const, seqno: _seqno };
}

function storeTupleCompleteTodo(source: CompleteTodo) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.seqno);
    return builder.build();
}

function dictValueParserCompleteTodo(): DictionaryValue<CompleteTodo> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeCompleteTodo(src)).endCell());
        },
        parse: (src) => {
            return loadCompleteTodo(src.loadRef().beginParse());
        }
    }
}

export type InternalComplete = {
    $$type: 'InternalComplete';
    excess: Address;
}

export function storeInternalComplete(src: InternalComplete) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(3472919628, 32);
        b_0.storeAddress(src.excess);
    };
}

export function loadInternalComplete(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 3472919628) { throw Error('Invalid prefix'); }
    let _excess = sc_0.loadAddress();
    return { $$type: 'InternalComplete' as const, excess: _excess };
}

function loadTupleInternalComplete(source: TupleReader) {
    let _excess = source.readAddress();
    return { $$type: 'InternalComplete' as const, excess: _excess };
}

function storeTupleInternalComplete(source: InternalComplete) {
    let builder = new TupleBuilder();
    builder.writeAddress(source.excess);
    return builder.build();
}

function dictValueParserInternalComplete(): DictionaryValue<InternalComplete> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeInternalComplete(src)).endCell());
        },
        parse: (src) => {
            return loadInternalComplete(src.loadRef().beginParse());
        }
    }
}

export type NewTodoResponse = {
    $$type: 'NewTodoResponse';
    seqno: bigint;
}

export function storeNewTodoResponse(src: NewTodoResponse) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(3848528798, 32);
        b_0.storeUint(src.seqno, 256);
    };
}

export function loadNewTodoResponse(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 3848528798) { throw Error('Invalid prefix'); }
    let _seqno = sc_0.loadUintBig(256);
    return { $$type: 'NewTodoResponse' as const, seqno: _seqno };
}

function loadTupleNewTodoResponse(source: TupleReader) {
    let _seqno = source.readBigNumber();
    return { $$type: 'NewTodoResponse' as const, seqno: _seqno };
}

function storeTupleNewTodoResponse(source: NewTodoResponse) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.seqno);
    return builder.build();
}

function dictValueParserNewTodoResponse(): DictionaryValue<NewTodoResponse> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeNewTodoResponse(src)).endCell());
        },
        parse: (src) => {
            return loadNewTodoResponse(src.loadRef().beginParse());
        }
    }
}

export type InternalAdd = {
    $$type: 'InternalAdd';
    amount: bigint;
    origin: Address;
}

export function storeInternalAdd(src: InternalAdd) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(306259763, 32);
        b_0.storeCoins(src.amount);
        b_0.storeAddress(src.origin);
    };
}

export function loadInternalAdd(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 306259763) { throw Error('Invalid prefix'); }
    let _amount = sc_0.loadCoins();
    let _origin = sc_0.loadAddress();
    return { $$type: 'InternalAdd' as const, amount: _amount, origin: _origin };
}

function loadTupleInternalAdd(source: TupleReader) {
    let _amount = source.readBigNumber();
    let _origin = source.readAddress();
    return { $$type: 'InternalAdd' as const, amount: _amount, origin: _origin };
}

function storeTupleInternalAdd(source: InternalAdd) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.amount);
    builder.writeAddress(source.origin);
    return builder.build();
}

function dictValueParserInternalAdd(): DictionaryValue<InternalAdd> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeInternalAdd(src)).endCell());
        },
        parse: (src) => {
            return loadInternalAdd(src.loadRef().beginParse());
        }
    }
}

export type Transfer = {
    $$type: 'Transfer';
    amount: bigint;
    to: Address;
}

export function storeTransfer(src: Transfer) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(1943715420, 32);
        b_0.storeCoins(src.amount);
        b_0.storeAddress(src.to);
    };
}

export function loadTransfer(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 1943715420) { throw Error('Invalid prefix'); }
    let _amount = sc_0.loadCoins();
    let _to = sc_0.loadAddress();
    return { $$type: 'Transfer' as const, amount: _amount, to: _to };
}

function loadTupleTransfer(source: TupleReader) {
    let _amount = source.readBigNumber();
    let _to = source.readAddress();
    return { $$type: 'Transfer' as const, amount: _amount, to: _to };
}

function storeTupleTransfer(source: Transfer) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.amount);
    builder.writeAddress(source.to);
    return builder.build();
}

function dictValueParserTransfer(): DictionaryValue<Transfer> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeTransfer(src)).endCell());
        },
        parse: (src) => {
            return loadTransfer(src.loadRef().beginParse());
        }
    }
}

export type Metadata = {
    $$type: 'Metadata';
    symbol: string;
    totalSupply: bigint;
}

export function storeMetadata(src: Metadata) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeStringRefTail(src.symbol);
        b_0.storeInt(src.totalSupply, 257);
    };
}

export function loadMetadata(slice: Slice) {
    let sc_0 = slice;
    let _symbol = sc_0.loadStringRefTail();
    let _totalSupply = sc_0.loadIntBig(257);
    return { $$type: 'Metadata' as const, symbol: _symbol, totalSupply: _totalSupply };
}

function loadTupleMetadata(source: TupleReader) {
    let _symbol = source.readString();
    let _totalSupply = source.readBigNumber();
    return { $$type: 'Metadata' as const, symbol: _symbol, totalSupply: _totalSupply };
}

function storeTupleMetadata(source: Metadata) {
    let builder = new TupleBuilder();
    builder.writeString(source.symbol);
    builder.writeNumber(source.totalSupply);
    return builder.build();
}

function dictValueParserMetadata(): DictionaryValue<Metadata> {
    return {
        serialize: (src, buidler) => {
            buidler.storeRef(beginCell().store(storeMetadata(src)).endCell());
        },
        parse: (src) => {
            return loadMetadata(src.loadRef().beginParse());
        }
    }
}

 type JettonMaster_init_args = {
    $$type: 'JettonMaster_init_args';
}

function initJettonMaster_init_args(src: JettonMaster_init_args) {
    return (builder: Builder) => {
        let b_0 = builder;
    };
}

async function JettonMaster_init() {
    const __code = Cell.fromBase64('te6ccgECFwEAA+0AART/APSkE/S88sgLAQIBYgIDAqbQAdDTAwFxsKMB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiFRQUwNvBPhhAvhi2zxa2zzy4ILI+EMBzH8BygBZyFjPFslYzAH6AsntVA8EAgEgBgcBigGSMH/gcCHXScIflTAg1wsf3oIQlGqYtrqOp9MfAYIQlGqYtrry4IHTPwExyAGCEK/5D1dYyx/LP8n4QgFwbds8f+AwcAUBOm1tIm6zmVsgbvLQgG8iAZEy4hAkcAMEgEJQI9s8FAIRvzWe2ebZ42EUDwgCASAJCgACXACVu70YJwXOw9XSyuex6E7DnWSoUbZoJwndY1LStkfLMi068t/fFiOYJwIFXAG4BnY5TOWDquRyWyw4JwnZdOWrNOy3M6DpZtlGbopIAgEgCwwCASANDgJLt1AEGukwICF3XlwRBBrhYUQQIJ/3XloRMGE3XlwRG2eLG2eNhDAPEAARsK+7UTQ0gABgAHWybuNDVpcGZzOi8vUW1SdlNwNjVORlFLY2V3M0RYNFNXeGt4S0FxQ3BycURvY1NqWUFGakttbkY4RoIAFG7UTQ1AH4Y9IAAZnUAdAB+gBZbBLgMPgo1wsKgwm68uCJ2zwRAZD4Q/goWNs8cFnIcAHLAXMBywFwAcsAEszMyfkAyHIBywFwAcsAEsoHy//J0CDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IgWASSLNUT06IIYdGpSiAD4QlIQ2zwSAvb4Q/goWNs8XHBZyHABywFzAcsBcAHLABLMzMn5AMhyAcsBcAHLABLKB8v/ydAg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCI+CgUyFmCEBJBJzNQA8sfAfoCASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFskWEwEcggnJw4Bacll/BkVV2zwUAcrIcQHKAVAHAcoAcAHKAlAFINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiM8WUAP6AnABymgjbrORf5MkbrPilzMzAXABygDjDSFus5x/AcoAASBu8tCAAcyVMXABygDiyQH7ABUAmH8BygDIcAHKAHABygAkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDiJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4nABygACfwHKAALJWMwA1gLQ9AQwbQGBDrUBgBD0D2+h8uCHAYEOtSICgBD0F8gByPQAyQHMcAHKAEADWSDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFgEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxbJ');
    const __system = Cell.fromBase64('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');
    let builder = beginCell();
    builder.storeRef(__system);
    builder.storeUint(0, 1);
    initJettonMaster_init_args({ $$type: 'JettonMaster_init_args' })(builder);
    const __data = builder.endCell();
    return { code: __code, data: __data };
}

const JettonMaster_errors: { [key: number]: { message: string } } = {
    2: { message: `Stack undeflow` },
    3: { message: `Stack overflow` },
    4: { message: `Integer overflow` },
    5: { message: `Integer out of expected range` },
    6: { message: `Invalid opcode` },
    7: { message: `Type check error` },
    8: { message: `Cell overflow` },
    9: { message: `Cell underflow` },
    10: { message: `Dictionary error` },
    13: { message: `Out of gas error` },
    32: { message: `Method ID not found` },
    34: { message: `Action is invalid or not supported` },
    37: { message: `Not enough TON` },
    38: { message: `Not enough extra-currencies` },
    128: { message: `Null reference exception` },
    129: { message: `Invalid serialization prefix` },
    130: { message: `Invalid incoming message` },
    131: { message: `Constraints error` },
    132: { message: `Access denied` },
    133: { message: `Contract stopped` },
    134: { message: `Invalid argument` },
    135: { message: `Code of a contract was not found` },
    136: { message: `Invalid address` },
    137: { message: `Masterchain support is not enabled for this contract` },
    34232: { message: `JettonWallet only` },
    49469: { message: `Access denied` },
    54404: { message: `Parent only` },
    54615: { message: `Insufficient balance` },
}

const JettonMaster_types: ABIType[] = [
    {"name":"StateInit","header":null,"fields":[{"name":"code","type":{"kind":"simple","type":"cell","optional":false}},{"name":"data","type":{"kind":"simple","type":"cell","optional":false}}]},
    {"name":"Context","header":null,"fields":[{"name":"bounced","type":{"kind":"simple","type":"bool","optional":false}},{"name":"sender","type":{"kind":"simple","type":"address","optional":false}},{"name":"value","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"raw","type":{"kind":"simple","type":"slice","optional":false}}]},
    {"name":"SendParameters","header":null,"fields":[{"name":"bounce","type":{"kind":"simple","type":"bool","optional":false}},{"name":"to","type":{"kind":"simple","type":"address","optional":false}},{"name":"value","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"mode","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"body","type":{"kind":"simple","type":"cell","optional":true}},{"name":"code","type":{"kind":"simple","type":"cell","optional":true}},{"name":"data","type":{"kind":"simple","type":"cell","optional":true}}]},
    {"name":"Deploy","header":2490013878,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}}]},
    {"name":"DeployOk","header":2952335191,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}}]},
    {"name":"FactoryDeploy","header":1829761339,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"cashback","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"NewTodo","header":1804651575,"fields":[{"name":"task","type":{"kind":"simple","type":"string","optional":false}}]},
    {"name":"InternalSetTask","header":3152733790,"fields":[{"name":"task","type":{"kind":"simple","type":"string","optional":false}}]},
    {"name":"CompleteTodo","header":2587315870,"fields":[{"name":"seqno","type":{"kind":"simple","type":"uint","optional":false,"format":256}}]},
    {"name":"InternalComplete","header":3472919628,"fields":[{"name":"excess","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"NewTodoResponse","header":3848528798,"fields":[{"name":"seqno","type":{"kind":"simple","type":"uint","optional":false,"format":256}}]},
    {"name":"InternalAdd","header":306259763,"fields":[{"name":"amount","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}},{"name":"origin","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"Transfer","header":1943715420,"fields":[{"name":"amount","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}},{"name":"to","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"Metadata","header":null,"fields":[{"name":"symbol","type":{"kind":"simple","type":"string","optional":false}},{"name":"totalSupply","type":{"kind":"simple","type":"int","optional":false,"format":257}}]},
]

const JettonMaster_getters: ABIGetter[] = [
    {"name":"walletAddress","arguments":[{"name":"owner","type":{"kind":"simple","type":"address","optional":false}}],"returnType":{"kind":"simple","type":"address","optional":false}},
    {"name":"metadata","arguments":[],"returnType":{"kind":"simple","type":"Metadata","optional":false}},
]

const JettonMaster_receivers: ABIReceiver[] = [
    {"receiver":"internal","message":{"kind":"typed","type":"Deploy"}},
]

export class JettonMaster implements Contract {
    
    static async init() {
        return await JettonMaster_init();
    }
    
    static async fromInit() {
        const init = await JettonMaster_init();
        const address = contractAddress(0, init);
        return new JettonMaster(address, init);
    }
    
    static fromAddress(address: Address) {
        return new JettonMaster(address);
    }
    
    readonly address: Address; 
    readonly init?: { code: Cell, data: Cell };
    readonly abi: ContractABI = {
        types:  JettonMaster_types,
        getters: JettonMaster_getters,
        receivers: JettonMaster_receivers,
        errors: JettonMaster_errors,
    };
    
    private constructor(address: Address, init?: { code: Cell, data: Cell }) {
        this.address = address;
        this.init = init;
    }
    
    async send(provider: ContractProvider, via: Sender, args: { value: bigint, bounce?: boolean| null | undefined }, message: Deploy) {
        
        let body: Cell | null = null;
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'Deploy') {
            body = beginCell().store(storeDeploy(message)).endCell();
        }
        if (body === null) { throw new Error('Invalid message type'); }
        
        await provider.internal(via, { ...args, body: body });
        
    }
    
    async getWalletAddress(provider: ContractProvider, owner: Address) {
        let builder = new TupleBuilder();
        builder.writeAddress(owner);
        let source = (await provider.get('walletAddress', builder.build())).stack;
        let result = source.readAddress();
        return result;
    }
    
    async getMetadata(provider: ContractProvider) {
        let builder = new TupleBuilder();
        let source = (await provider.get('metadata', builder.build())).stack;
        const result = loadTupleMetadata(source);
        return result;
    }
    
}