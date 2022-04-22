import { connect } from "react-redux";
import {store} from '../index';

export const handleTransaction = (e,newExpense,transactionType,transactionDescription) =>  {
    e.preventDefault()
    console.log("handleTransaction is  by click");
    console.log(`newExpense`, newExpense.newExpense);
    console.log(`transactionType`, transactionType.transactionType);

    switch(transactionType.transactionType){
        case "expense":
            return (dispatch)   => {
                console.log(`dispatch running`,transactionDescription.transactionDescription);
                dispatch({ 
                type:"ADD_EXPENSE",
                payload: newExpense.newExpense,
                transactionDescription: transactionDescription.transactionDescription,
                transactionType: transactionType.transactionType
            })
        }
        case "income":
            return (dispatch)   => {
                console.log(`dispatch running`);
                dispatch({ 
                    type:"ADD_INCOME",
                    payload: newExpense.newExpense,
                    transactionDescription: transactionDescription.transactionDescription,
                    transactionType: transactionType.transactionType
                })
        }
    
}
}
export const removeHistoryRecord = (e)  =>  {
    
    let originalDescription = e.target.parentNode.parentNode.parentNode.getAttribute("customhistorytag");
    let originalAmount = e.target.parentNode.getAttribute("customamount");
    let originalType = e.target.parentNode.getAttribute("customtype");
    console.log("remove history record", originalDescription);
    console.log(`originalAmount`, originalAmount);
    
    return (dispatch)   =>  {
        
        dispatch({
            type: "REMOVE_TRANSACTION",
            removeThisDescription:  originalDescription,
            removeThisAmount:   originalAmount,
            removeThisType: originalType,
        })
    }

}

const mapStateToProps = (state) => {
    return {
        expense: state.expenseReducer,

    }
}

export default connect(mapStateToProps,{} )(removeHistoryRecord);