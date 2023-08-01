import { Blockchain, SandboxContract } from '@ton-community/sandbox';
import { toNano } from 'ton-core';
import { JettonMaster } from '../wrappers/JettonMaster';
import '@ton-community/test-utils';

describe('JettonMaster', () => {
    let blockchain: Blockchain;
    let jettonMaster: SandboxContract<JettonMaster>;

    beforeEach(async () => {
        blockchain = await Blockchain.create();

        jettonMaster = blockchain.openContract(await JettonMaster.fromInit());

        const deployer = await blockchain.treasury('deployer');

        const deployResult = await jettonMaster.send(
            deployer.getSender(),
            {
                value: toNano('0.05'),
            },
            {
                $$type: 'Deploy',
                queryId: 0n,
            }
        );

        expect(deployResult.transactions).toHaveTransaction({
            from: deployer.address,
            to: jettonMaster.address,
            deploy: true,
            success: true,
        });
    });

    it('should deploy', async () => {
        // the check is done inside beforeEach
        // blockchain and jettonMaster are ready to use
    });
});
