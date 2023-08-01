import "@stdlib/deploy";
import "@stdlib/ownable";
import "./messages";
import "./todo_child";

contract TodoParent with Deployable, Ownable {

    owner: Address;
    numTodos: Int as uint256 = 0;

    init() {
        self.owner = sender();
    }

    receive(msg: NewTodo) {
        self.numTodos = self.numTodos + 1;
        let init: StateInit = initOf TodoChild(myAddress(), self.numTodos);

        send(SendParameters{
            to: contractAddress(init),
            body: InternalSetTask{task: msg.task}.toCell(),
            value: ton("0.2"),
            mode: SendIgnoreErrors,
            code: init.code,
            data: init.data
        });

        self.reply(NewTodoResponse{seqno: self.numTodos}.toCell());
    }

    receive(msg: CompleteTodo){
        self.requireOwner();
        require(msg.seqno <= self.numTodos, "Todo does not exist");
        send(SendParameters{
            to: contractAddress(initOf TodoChild(myAddress(), msg.seqno)),
            body: InternalComplete{excess: sender()}.toCell(),
            value: 0,
            mode: SendRemainingValue + SendIgnoreErrors
        });
    }

    get fun numTodos(): Int {
        return self.numTodos;
    }

    get fun todoAddress(seqno: Int): Address{
        return contractAddress(initOf TodoChild(myAddress(), seqno));
    }
}
