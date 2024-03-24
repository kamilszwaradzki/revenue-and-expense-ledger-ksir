import React from "react";
import ReactDOM  from "react-dom";
import RevenueAndExpenseContextProvider from "./contexts/revenueAndExpenseContext";
import RevenueAndExpenseTable from "./components/revenueAndExpenseTable";

class App extends React.Component {
    render() {
        return (
            <RevenueAndExpenseContextProvider>
                <RevenueAndExpenseTable/>
            </RevenueAndExpenseContextProvider>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));