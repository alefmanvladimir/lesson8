import { toNano } from 'ton-core';
import { JettonMaster } from '../wrappers/JettonMaster';
import { NetworkProvider } from '@ton-community/blueprint';

export async function run(provider: NetworkProvider) {
    const jettonMaster = provider.open(await JettonMaster.fromInit());

    await jettonMaster.send(
        provider.sender(),
        {
            value: toNano('0.05'),
        },
        {
            $$type: 'Deploy',
            queryId: 0n,
        }
    );

    await provider.waitForDeploy(jettonMaster.address);

    // run methods on `jettonMaster`
}
