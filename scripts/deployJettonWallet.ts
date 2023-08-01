import { toNano } from 'ton-core';
import { JettonWallet } from '../wrappers/JettonWallet';
import { NetworkProvider } from '@ton-community/blueprint';

export async function run(provider: NetworkProvider) {
    const jettonWallet = provider.open(await JettonWallet.fromInit());

    await jettonWallet.send(
        provider.sender(),
        {
            value: toNano('0.05'),
        },
        {
            $$type: 'Deploy',
            queryId: 0n,
        }
    );

    await provider.waitForDeploy(jettonWallet.address);

    // run methods on `jettonWallet`
}
