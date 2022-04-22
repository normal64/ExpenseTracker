import { connect } from "react-redux";
import "../css/transactionHistory.css";
import {removeHistoryRecord} from "../actions"

const TransactionHistory = (props) => {
    console.log(`props in transaction history`, props);
    return (
        <div className="ui list transaction-history">
            {props.expense.history ? props.expense.history.map(elem =>
                <div className="item ui transaction-history-element" 
                key={elem.description}
                customhistorytag={elem.description}
                >
                    <i className="map marker icon"></i>
                    <div className="content ">
                        <a className="header">Amount: {elem.amount}</a>
                        <div className="description"
                        customamount={elem.amount}
                        customtype={elem.type}
                        >
                            Type: {elem.type} 
                            Description: {elem.description} &nbsp;
                            <button 
                            
                            className="mini ui brown button"
                            onClick={(e) =>props.removeHistoryRecord(e)}
                            >Remove</button>
                            </div>
                        
                    </div>
                </div>

            ) : null 
        }

        </div>
    )

}
const mapStateToProps = (state) => {
    return {
        expense: state.expenseReducer,

    }
}

export default connect(mapStateToProps, {removeHistoryRecord:removeHistoryRecord})(TransactionHistory);