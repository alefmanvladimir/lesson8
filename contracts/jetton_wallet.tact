import "@stdlib/deploy";
import "./messages";

contract JettonWallet with Deployable {

    parent: Address;
    owner: Address;
    balance: Int as coins;

    init(parent: Address, owner: Address) {
        self.parent = parent;
        self.owner = owner;
        self.balance = 0;
    }

    // step 2
    receive(msg: InternalAdd) {
        if(msg.origin == self.parent){
            require(sender() == self.parent, "Parent only");
        } else {
            let init: StateInit = initOf JettonWallet(self.parent, msg.origin);
            require(sender() == contractAddress(init), "JettonWallet only");
        }
        self.balance = self.balance + msg.amount;
    }


    // step 1
    receive(msg: Transfer) {
        require(sender()==self.owner, "Access denied");
        require(self.balance >= msg.amount, "Insufficient balance");
        self.balance = self.balance - msg.amount;
        let init: StateInit = initOf JettonWallet(self.parent, msg.to);
        send(SendParameters{
            to: contractAddress(init),
            body: InternalAdd{amount: msg.amount, origin: self.owner}.toCell(),
            value: ton("0.03"),
            mode: SendIgnoreErrors,
            code: init.code,
            data: init.data
        });
        self.reply("transferred".asComment());
    }
}
