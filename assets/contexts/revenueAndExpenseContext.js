import React, { createContext } from "react";

export const RevenueAndExpenseContext = createContext();

class RevenueAndExpenseContextProvider extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            revenueledgeritems: [
                {
                    id: 0,
                    date: "01-01-2024",
                    nrproof: "01/2024",
                    company: "Hans Kloss",
                    addr: "Olsztyn, ul. Drzewiecka 16",
                    eventdesc: "N/A",
                    valsold: [0, 0],
                    oincome: [0, 0],
                    sincome: [0, 0],
                    purchase: [0, 0],
                    costs: [0, 0],
                    wages: [0, 0],
                    ocosts: [0, 0],
                    scosts: [0, 0],
                    ecosts: [0, 0],
                    cdesc: "",
                    cval: [0, 0],
                    notes: "",
                },
                {
                    id: 1,
                    date: "02-01-2024",
                    nrproof: "01/2024",
                    company: "Bruner Gerhard",
                    addr: "Olsztyn, ul. Drzewiecka 13",
                    eventdesc: "N/A",
                    valsold: [0, 0],
                    oincome: [0, 0],
                    sincome: [0, 0],
                    purchase: [0, 0],
                    costs: [0, 0],
                    wages: [0, 0],
                    ocosts: [0, 0],
                    scosts: [0, 0],
                    ecosts: [0, 0],
                    cdesc: "",
                    cval: [0, 0],
                    notes: "",
                }
            ]
        };
    }

    createRevenueAndExpense() {

    }

    readRevenueAndExpense() {

    }

    updateRevenueAndExpense() {

    }

    deleteRevenueAndExpense() {

    }

    render () {
        return (
            <RevenueAndExpenseContext.Provider value={{ 
                ...this.state,
                createRevenueAndExpense: this.createRevenueAndExpense.bind(this),
                updateRevenueAndExpense: this.updateRevenueAndExpense.bind(this),
                deleteRevenueAndExpense: this.deleteRevenueAndExpense.bind(this),

             }}>
                {this.props.children}
            </RevenueAndExpenseContext.Provider>
        );
    }
}
export default RevenueAndExpenseContextProvider;