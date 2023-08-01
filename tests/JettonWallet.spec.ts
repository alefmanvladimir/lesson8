import { Blockchain, SandboxContract } from '@ton-community/sandbox';
import { toNano } from 'ton-core';
import { JettonWallet } from '../wrappers/JettonWallet';
import '@ton-community/test-utils';

describe('JettonWallet', () => {
    let blockchain: Blockchain;
    let jettonWallet: SandboxContract<JettonWallet>;

    beforeEach(async () => {
        blockchain = await Blockchain.create();

        jettonWallet = blockchain.openContract(await JettonWallet.fromInit());

        const deployer = await blockchain.treasury('deployer');

        const deployResult = await jettonWallet.send(
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
            to: jettonWallet.address,
            deploy: true,
            success: true,
        });
    });

    it('should deploy', async () => {
        // the check is done inside beforeEach
        // blockchain and jettonWallet are ready to use
    });
});
