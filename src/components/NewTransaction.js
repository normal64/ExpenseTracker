import {useState} from "react";
import {handleTransaction} from "../actions";
import { connect } from "react-redux";
import "../css/newTransaction.css"
const NewTransaction = (props) => {
const [newExpense,setNewExpense] = useState(0);
const [transactionType,setTransactionType] = useState("");
const [transactionDescription, setTransactionDescription] = useState("")

console.log(`props`, props);

const handleTransactionChange = (e) =>   {
    switch(e.target.value){
        case "expense":
            console.log("case of expense");
            console.log(`transactionDescription`, transactionDescription);
            setTransactionType("expense");
            break;
        case "income":
            console.log("case of income");
            setTransactionType("income");
            break;
            default:
                return;
    }
}
    return (
        <div className="ui center aligned grid new-transaction-container">
                <form className="ui form">
                <div className="field">
                    <label>Add new NewTransaction</label>
                    <input type="text" name="transaction" placeholder="Transaction text" onChange={(e)  => setTransactionDescription(e.target.value)} />
                </div>

                <div className="inline field">
                    <label>Transaction amount </label>
                    <input type="text" placeholder="Enter amount" onChange={(e) => setNewExpense(e.target.value)} />
                </div>

                <select className="ui  dropdown" onChange={(e) =>handleTransactionChange(e)}>
                    <option value="">Transaction type</option>
                    <option  value="expense">Expense</option>
                    <option value="income">Income</option>
                </select>
               

                <button className="massive ui button submit-transaction-button " onClick={(e) => props.handleTransaction(e,{newExpense},{transactionType},{transactionDescription})}>
                    Submit
                </button>

            </form>

        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        expense: state.expenseReducer,

    }
}

export default  connect(mapStateToProps,{handleTransaction:handleTransaction})(NewTransaction);