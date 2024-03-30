import React, { createContext } from "react";
import axios from "axios";
import dayjs, { Dayjs } from 'dayjs';

export const RevenueAndExpenseContext = createContext();
const splitCurrency = function(arr) {
    return { 0: Number(arr[0] ?? '0'), 1: Number(arr[1] ?? '0') };
};

class RevenueAndExpenseContextProvider extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            revenueledgeritems: [
                // {
                //     id: 0,
                //     date: "01-01-2024",
                //     nrproof: "01/2024",
                //     company: "Hans Mullermilch",
                //     addr: "Kraków, ul. Drzewiecka 16",
                //     eventdesc: "N/A",
                //     valsold: [0, 0],
                //     oincome: [0, 0],
                //     sincome: [0, 0],
                //     purchase: [0, 0],
                //     costs: [0, 0],
                //     wages: [0, 0],
                //     ocosts: [0, 0],
                //     scosts: [0, 0],
                //     ecosts: [0, 0],
                //     cdesc: "",
                //     cval: [0, 0],
                //     notes: "",
                // },
                // {
                //     id: 1,
                //     date: "02-01-2024",
                //     nrproof: "01/2024",
                //     company: "Bruner Gerhard",
                //     addr: "Częstochowa, ul. Drzewiecka 13",
                //     eventdesc: "N/A",
                //     valsold: [0, 0],
                //     oincome: [0, 0],
                //     sincome: [0, 0],
                //     purchase: [0, 0],
                //     costs: [0, 0],
                //     wages: [0, 0],
                //     ocosts: [0, 0],
                //     scosts: [0, 0],
                //     ecosts: [0, 0],
                //     cdesc: "",
                //     cval: [0, 0],
                //     notes: "",
                // }
            ]
        };
        this.readRevenueAndExpense();
    }

    createRevenueAndExpense(event, revenueledgeritemdata) {
        event.preventDefault();
        axios.post('/api/revenueandexpenseledger/create', {
            date: revenueledgeritemdata.date.format('YYYY-MM-DD'),
            nrProof: revenueledgeritemdata.nrproof,
            company: revenueledgeritemdata.company,
            address: revenueledgeritemdata.addr,
            descriptionBusinessEvent: revenueledgeritemdata.eventdesc,
            valueSoldGoodsAndServices: Number(revenueledgeritemdata.valsold.join('.')),
            otherRevenues: Number(revenueledgeritemdata.oincome.join('.')),
            totalRevenue: Number(revenueledgeritemdata.sincome.join('.')),
            purchaseTradeGoodsAndMaterials: Number(revenueledgeritemdata.purchase.join('.')),
            sideCostsPurchase: Number(revenueledgeritemdata.costs.join('.')),
            wages: Number(revenueledgeritemdata.wages.join('.')),
            otherExpenses: Number(revenueledgeritemdata.ocosts.join('.')),
            totalExpenses: Number(revenueledgeritemdata.scosts.join('.')),
            freeColumn: Number(revenueledgeritemdata.ecosts.join('.')),
            costDescription: revenueledgeritemdata.cdesc,
            companyCostsValue: Number(revenueledgeritemdata.cval.join('.')),
            notes: revenueledgeritemdata.notes
        }).then( response => {
            let revenueledgeritem = response.data;
            let revenueledgers = [...this.state.revenueledgeritems];
            revenueledgers.push({
                    id: revenueledgeritem.id,
                    date: dayjs(revenueledgeritem.date),
                    nrproof: revenueledgeritem.nrProof,
                    company: revenueledgeritem.company,
                    addr: revenueledgeritem.address,
                    eventdesc: revenueledgeritem.descriptionBusinessEvent,
                    valsold: splitCurrency(revenueledgeritem.valueSoldGoodsAndServices.toString().split('.')),
                    oincome: splitCurrency(revenueledgeritem.otherRevenues.toString().split('.')),
                    sincome: splitCurrency(revenueledgeritem.totalRevenue.toString().split('.')),
                    purchase: splitCurrency(revenueledgeritem.purchaseTradeGoodsAndMaterials.toString().split('.')),
                    costs: splitCurrency(revenueledgeritem.sideCostsPurchase.toString().split('.')),
                    wages: splitCurrency(revenueledgeritem.wages.toString().split('.')),
                    ocosts: splitCurrency(revenueledgeritem.otherExpenses.toString().split('.')),
                    scosts: splitCurrency(revenueledgeritem.totalExpenses.toString().split('.')),
                    ecosts: splitCurrency(revenueledgeritem.freeColumn.toString().split('.')),
                    cdesc: revenueledgeritem.costDescription,
                    cval: splitCurrency(revenueledgeritem.companyCostsValue.toString().split('.')),
                    notes: revenueledgeritem.notes,
            });
            this.setState ({ revenueledgeritems: revenueledgers });
        }).catch(error => {
            console.log(error);
        })
    }

    readRevenueAndExpense() {
        axios.get('/api/revenueandexpenseledger/read')
             .then(response => {
                this.setState ({
                    revenueledgeritems:
                        response.data.map(revenueledgeritem => ({
                            id: revenueledgeritem.id,
                            date: dayjs(revenueledgeritem.date),
                            nrproof: revenueledgeritem.nrProof,
                            company: revenueledgeritem.company,
                            addr: revenueledgeritem.address,
                            eventdesc: revenueledgeritem.descriptionBusinessEvent,
                            valsold: splitCurrency(revenueledgeritem.valueSoldGoodsAndServices.toString().split('.')),
                            oincome: splitCurrency(revenueledgeritem.otherRevenues.toString().split('.')),
                            sincome: splitCurrency(revenueledgeritem.totalRevenue.toString().split('.')),
                            purchase: splitCurrency(revenueledgeritem.purchaseTradeGoodsAndMaterials.toString().split('.')),
                            costs: splitCurrency(revenueledgeritem.sideCostsPurchase.toString().split('.')),
                            wages: splitCurrency(revenueledgeritem.wages.toString().split('.')),
                            ocosts: splitCurrency(revenueledgeritem.otherExpenses.toString().split('.')),
                            scosts: splitCurrency(revenueledgeritem.totalExpenses.toString().split('.')),
                            ecosts: splitCurrency(revenueledgeritem.freeColumn.toString().split('.')),
                            cdesc: revenueledgeritem.costDescription,
                            cval: splitCurrency(revenueledgeritem.companyCostsValue.toString().split('.')),
                            notes: revenueledgeritem.notes,
                        }))
                });
             }).catch(error => {
                console.error(error);
             });
    }

    updateRevenueAndExpense(data) {
        const cpRevenueLedger = {
            date: dayjs(data.revenueLedger.date),
            nrProof: data.revenueLedger.nrProof,
            company: data.revenueLedger.company,
            address: data.revenueLedger.address,
            descriptionBusinessEvent: data.revenueLedger.descriptionBusinessEvent,
            valueSoldGoodsAndServices: Object.values(data.revenueLedger.valueSoldGoodsAndServices).join("."),
            otherRevenues: Object.values(data.revenueLedger.otherRevenues).join("."),
            totalRevenue: Object.values(data.revenueLedger.totalRevenue).join("."),
            purchaseTradeGoodsAndMaterials: Object.values(data.revenueLedger.purchaseTradeGoodsAndMaterials).join("."),
            sideCostsPurchase: Object.values(data.revenueLedger.sideCostsPurchase).join("."),
            wages: Object.values(data.revenueLedger.wages).join("."),
            otherExpenses: Object.values(data.revenueLedger.otherExpenses).join("."),
            totalExpenses: Object.values(data.revenueLedger.totalExpenses).join("."),
            freeColumn: Object.values(data.revenueLedger.freeColumn).join("."),
            costDescription: data.revenueLedger.costDescription,
            companyCostsValue: Object.values(data.revenueLedger.companyCostsValue).join("."),
            notes: data.revenueLedger.notes,
        };

        axios.put('/api/revenueandexpenseledger/update/' + data.id, cpRevenueLedger)
            .then(response => {
                let revenueledgers = [...this.state.revenueledgeritems];
                let revenueledger = revenueledgers.find( revenueledger => {
                    return revenueledger.id === data.id;
                });
        
                revenueledger.date = data.revenueLedger.date;
                revenueledger.nrproof = data.revenueLedger.nrProof;
                revenueledger.company = data.revenueLedger.company;
                revenueledger.addr = data.revenueLedger.address;
                revenueledger.eventdesc = data.revenueLedger.descriptionBusinessEvent;
                revenueledger.valsold = data.revenueLedger.valueSoldGoodsAndServices;
                revenueledger.oincome = data.revenueLedger.otherRevenues;
                revenueledger.sincome = data.revenueLedger.totalRevenue;
                revenueledger.purchase = data.revenueLedger.purchaseTradeGoodsAndMaterials;
                revenueledger.costs = data.revenueLedger.sideCostsPurchase;
                revenueledger.wages = data.revenueLedger.wages;
                revenueledger.ocosts = data.revenueLedger.otherExpenses;
                revenueledger.scosts = data.revenueLedger.totalExpenses;
                revenueledger.ecosts = data.revenueLedger.freeColumn;
                revenueledger.cdesc = data.revenueLedger.costDescription;
                revenueledger.cval = data.revenueLedger.companyCostsValue;
                revenueledger.notes = data.revenueLedger.notes;
                this.setState({
                    revenueledgers: revenueledgers
                });
            }).catch(error => {
                console.error(error);
            })
    }

    deleteRevenueAndExpense(data) {
        axios.delete('/api/revenueandexpenseledger/delete/' + data.id)
            .then(response => {
                //message
                this.setState(currState => ({
                    revenueledgeritems: currState.revenueledgeritems.filter(revenueledger => revenueledger.id !== data.id)
                }));
            }).catch(error => {
                console.error(error);
            });
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