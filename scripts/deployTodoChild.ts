import { toNano } from 'ton-core';
import { TodoChild } from '../wrappers/TodoChild';
import { NetworkProvider } from '@ton-community/blueprint';

export async function run(provider: NetworkProvider) {
    const todoChild = provider.open(await TodoChild.fromInit());

    await todoChild.send(
        provider.sender(),
        {
            value: toNano('0.05'),
        },
        {
            $$type: 'Deploy',
            queryId: 0n,
        }
    );

    await provider.waitForDeploy(todoChild.address);

    // run methods on `todoChild`
}
