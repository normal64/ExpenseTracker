import YourBalance from "./components/YourBalance";
import NewTransaction from "./components/NewTransaction";
import TransactionHistory from "./components/TransactionHistory";
import { connect } from "react-redux";

const App = () => {
    // const  gradient = {background-image: "linear-gradient(to right, #2c3e50, #4ca1af)"};
    document.body.style.backgroundImage = "linear-gradient(to right, #2c3e50, #4ca1af)";
    return <div>
            <YourBalance />
            <NewTransaction />
            <TransactionHistory />
    </div>

}
const mapStateToProps = (state) => {
    return {
        pokeDataResponse: state.expenseReducer,

    }
}

export default  connect(mapStateToProps,{})(App);