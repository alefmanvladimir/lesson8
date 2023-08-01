import { toNano } from 'ton-core';
import { TodoParent } from '../wrappers/TodoParent';
import { NetworkProvider } from '@ton-community/blueprint';

export async function run(provider: NetworkProvider) {
    const todoParent = provider.open(await TodoParent.fromInit());

    await todoParent.send(
        provider.sender(),
        {
            value: toNano('0.05'),
        },
        {
            $$type: 'Deploy',
            queryId: 0n,
        }
    );

    await provider.waitForDeploy(todoParent.address);

    // run methods on `todoParent`
}
