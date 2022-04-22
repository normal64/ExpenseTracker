import { connect } from "react-redux";
import "../css/yourBalance.css"

const YourBalance = (props)  =>{
    // const [expenseAmount, setExpenseAmount] = useState(0);
    console.log(props.expense.history);
    // console.log("filter function",props.expense.history.filter(elem => elem.type ==   "income"));
    return (
        <div className="actual-balance">
            
    <div className="ui center aligned grid ">
            <div className="column ">
                <h1 className="ui header">Expense Tracker</h1>
            </div>

        </div>

        <div className="ui center aligned grid">
            <div className="ui statistic ">
                <div className="label">
                    Your Balance
            </div>
                <div className="value">
                    {`${props.expense.balance}$`}
            </div>
            </div>
        </div>

        <div className="ui center aligned grid statistics">
            <div className="green statistic">
                <div className="value">
                    {props.expense.history  ?   props.expense.history.filter(elem => elem.type ==   "income").length    : null}
                </div>
                <div className="label">
                    Income
                </div>
            </div>
            <div className="red statistic">
                <div className="value">
                {props.expense.history ?    props.expense.history.filter(elem => elem.type ==   "expense").length  : null }
                </div>
                <div className="label">
                    Expense
                </div>
            </div>
        </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        expense: state.expenseReducer,

    }
}

export default  connect(mapStateToProps,{})(YourBalance);
