message NewTodo{
    task: String;
}

message InternalSetTask{
    task: String;
}

message CompleteTodo{
    seqno: Int as uint256;
}

message InternalComplete{
    excess: Address;
}

message NewTodoResponse{
    seqno: Int as uint256;
}

message InternalAdd{
    amount: Int as coins;
    origin: Address;
}

message Transfer {
    amount: Int as coins;
    to: Address;
}