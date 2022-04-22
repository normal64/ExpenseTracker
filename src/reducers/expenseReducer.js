

const initialState = {
    balance: 0,
    history: [],

}

export default (state = initialState, action) =>{
    // console.log("expense reducer action", action.type);
    console.clear();
    console.log(`state`,state );
    switch(action.type){
        case "ADD_EXPENSE":
            console.log("ADDING EXPENSE HAPPENING");
            
            return  {
                balance: state.balance - action.payload,
                history: [...state.history,
                    {
                        description:action.transactionDescription,
                        amount: action.payload,
                        type: action.transactionType,

                    }]
            }
            case "ADD_INCOME":
                console.log("ADDING INCOME HAPPENING");
                
                return  {
                    balance: state.balance + Number(action.payload),
                    history: [...state.history,
                        {
                            description:action.transactionDescription,
                            amount: action.payload,
                            type: action.transactionType,
    
                        }]
                } 
            case "REMOVE_TRANSACTION":
                console.log("REMOVE TRANSACTION HAPPENING");
                console.log(action.removeThisDescription);
                console.log();
                let neededTransaction = state.history.filter(elem => elem.description === action.removeThisDescription);
                neededTransaction = neededTransaction.filter(elem =>  elem.amount   ===  action.removeThisAmount )
                neededTransaction = neededTransaction.filter(elem =>  elem.type   ===  action.removeThisType )
                console.log("needed transaction",neededTransaction);
                console.log(`neededtransaction.type`, neededTransaction[0].type);
                let neededAmount = neededTransaction[0].amount;
                let filteredHistory = state.history.filter( hist => hist != neededTransaction[0]);
                console.log(`filteredHistory`, filteredHistory);
                switch(neededTransaction[0].type){
                    case   "expense" :
                            return{
                                    balance: state.balance + Number(neededAmount),
                                    history: filteredHistory,
                            }
                    case "income":{
                            return{
                                balance: state.balance - Number(neededAmount),
                                history: filteredHistory,
                            }
                    }
                }

            default:
                return state;
    }
    
}

