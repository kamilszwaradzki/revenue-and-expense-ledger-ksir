import React, { Fragment, useContext, useState } from "react";
import { RevenueAndExpenseContext } from "../contexts/revenueAndExpenseContext";
import { IconButton, Table, TableBody, TableCell, TableHead, TableRow, TextField } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import CloseIcon from '@material-ui/icons/Close';
import DoneIcon from '@material-ui/icons/Done';
import "../styles/app.css";
import dayjs, { Dayjs } from 'dayjs';
import DatePickerField from './DatePickerField';
import TextareaField from './TextareaField';
import NumberField, { InputAdornment } from './NumberField';
import DeleteDialog from "./DeleteDialog";
import NestedList from "./RevenueAndExpenseNotes";

  function RevenueAndExpenseTable() {
    const context = useContext(RevenueAndExpenseContext);
    const [addRLDate, setAddRLDate] = useState(dayjs());
    const [addRLNrProof, setAddRLNrProof] = useState('');
    const [addRLCompany, setAddRLCompany] = useState('');
    const [addRLAddr, setAddRLAddr] = useState('');
    const [addRLEventdesc, setAddRLEventdesc] = useState('');
    const [addRLValsold, setAddRLValsold] = useState([0, 0]);
    const [addRLOincome, setAddRLOincome] = useState([0, 0]);
    const [addRLSincome, setAddRLSincome] = useState([0, 0]);
    const [addRLPurchase, setAddRLPurchase] = useState([0, 0]);
    const [addRLCosts, setAddRLCosts] = useState([0, 0]);
    const [addRLWages, setAddRLWages] = useState([0, 0]);
    const [addRLOcosts, setAddRLOcosts] = useState([0, 0]);
    const [addRLScosts, setAddRLScosts] = useState([0, 0]);
    const [addRLEcosts, setAddRLEcosts] = useState([0, 0]);
    const [addRLCdesc, setAddRLCdesc] = useState('');
    const [addRLCval, setAddRLCval] = useState([0, 0]);
    const [addRLNotes, setAddRLNotes] = useState('');
    const [editIsShown, setEditIsShown] = useState(false);
    const [editRLDate, setEditRLDate] = useState('');
    const [editRLNrProof, setEditRLNrProof] = useState('');
    const [editRLCompany, setEditRLCompany] = useState('');
    const [editRLAddr, setEditRLAddr] = useState('');
    const [editRLEventdesc, setEditRLEventdesc] = useState('');
    const [editRLValsold, setEditRLValsold] = useState([0, 0]);
    const [editRLOincome, setEditRLOincome] = useState([0, 0]);
    const [editRLSincome, setEditRLSincome] = useState([0, 0]);
    const [editRLPurchase, setEditRLPurchase] = useState([0, 0]);
    const [editRLCosts, setEditRLCosts] = useState([0, 0]);
    const [editRLWages, setEditRLWages] = useState([0, 0]);
    const [editRLOcosts, setEditRLOcosts] = useState([0, 0]);
    const [editRLScosts, setEditRLScosts] = useState([0, 0]);
    const [editRLEcosts, setEditRLEcosts] = useState([0, 0]);
    const [editRLCdesc, setEditRLCdesc] = useState('');
    const [editRLCval, setEditRLCval] = useState([0, 0]);
    const [editRLNotes, setEditRLNotes] = useState('');
    const [deleteConfirmationIsShown, setDeleteConfirmationIsShown] = useState(false);
    const [revenueLedgerToBeDeleted, setRevenueLedgerToBeDeleted] = useState(null);

    function addRevenueLedger() {
        return {
            date: addRLDate,
            nrproof: addRLNrProof,
            company: addRLCompany,
            addr: addRLAddr,
            eventdesc: addRLEventdesc,
            valsold: addRLValsold,
            oincome: addRLOincome,
            sincome: addRLSincome,
            purchase: addRLPurchase,
            costs: addRLCosts,
            wages: addRLWages,
            ocosts: addRLOcosts,
            scosts: addRLScosts,
            ecosts: addRLEcosts,
            cdesc: addRLCdesc,
            cval: addRLCval,
            notes: addRLNotes,
        }
    }

    function setEditRevenueLedger(data) {
        setEditRLDate(data.date);
        setEditRLNrProof(data.nrproof);
        setEditRLCompany(data.company);
        setEditRLAddr(data.addr);
        setEditRLEventdesc(data.eventdesc);
        setEditRLValsold(data.valsold);
        setEditRLOincome(data.oincome);
        setEditRLSincome(data.sincome);
        setEditRLPurchase(data.purchase);
        setEditRLCosts(data.costs);
        setEditRLWages(data.wages);
        setEditRLOcosts(data.ocosts);
        setEditRLScosts(data.scosts);
        setEditRLEcosts(data.ecosts);
        setEditRLCdesc(data.cdesc);
        setEditRLCval(data.cval);
        setEditRLNotes(data.notes);
    }

    function editRevenueLedger() {
        return {
            date: editRLDate,
            nrProof: editRLNrProof,
            company: editRLCompany,
            address: editRLAddr,
            descriptionBusinessEvent: editRLEventdesc,
            valueSoldGoodsAndServices: editRLValsold,
            otherRevenues: editRLOincome,
            totalRevenue: editRLSincome,
            purchaseTradeGoodsAndMaterials: editRLPurchase,
            sideCostsPurchase: editRLCosts,
            wages: editRLWages,
            otherExpenses: editRLOcosts,
            totalExpenses: editRLScosts,
            freeColumn: editRLEcosts,
            costDescription: editRLCdesc,
            companyCostsValue: editRLCval,
            notes: editRLNotes,
        };
    }

    return (
        <Fragment>
            <form onSubmit={(event) => {context.createRevenueAndExpense(event, addRevenueLedger())}}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align="center" colSpan={1} rowSpan={3} className="borderTop borderLeft borderRight">Lp.</TableCell>
                            <TableCell align="center" colSpan={1} rowSpan={3} className="borderTop borderRight">Data zdarzenia gospodarczego</TableCell>
                            <TableCell align="center" colSpan={1} rowSpan={3} className="borderTop borderRight">Numer dowodu księgowego</TableCell>
                            <TableCell align="center" colSpan={2} rowSpan={1} className="borderTop">Kontrahent</TableCell>
                            <TableCell align="center" colSpan={1} rowSpan={3} className="borderTop borderLeft borderRight">Opis zdarzenia gospodarczego</TableCell>
                            <TableCell align="center" colSpan={6} rowSpan={1} className="borderTop">Przychód</TableCell>
                            <TableCell align="center" colSpan={2} rowSpan={2} className="borderTop borderLeft">Zakup towarów handlowych i materiałów wg cen zakupu</TableCell>
                            <TableCell align="center" colSpan={2} rowSpan={2} className="borderTop borderLeft borderRight">Koszty uboczne zakupu</TableCell>
                            <TableCell align="center" colSpan={8} rowSpan={1} className="borderTop borderRight">Wydatki (koszty)</TableCell>
                            <TableCell align="center" colSpan={3} rowSpan={1} className="borderTop">Koszty działalności badawczo-rozwojowej, o których mowa w art. 26e ustawy o podatku dochodowym</TableCell>
                            <TableCell align="center" colSpan={1} rowSpan={3} className="borderTop borderLeft borderRight">Uwagi</TableCell>
                            <TableCell align="center" colSpan={1} rowSpan={4} className="borderTop borderRight">Akcje</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="center" colSpan={1} rowSpan={2} className="borderRight">imię i nazwisko (firma)</TableCell>
                            <TableCell align="center" colSpan={1} rowSpan={2}>adres</TableCell>
                            <TableCell align="center" colSpan={2} rowSpan={1}>wartość sprzedanych towarów i usług</TableCell>
                            <TableCell align="center" colSpan={2} rowSpan={1} className="borderLeft">pozostałe przychody</TableCell>
                            <TableCell align="center" colSpan={2} rowSpan={1} className="borderLeft">razem przychód (7+8)</TableCell>
                            <TableCell align="center" colSpan={2} rowSpan={1}>wynagrodzenia w gotówce i w naturze</TableCell>
                            <TableCell align="center" colSpan={2} rowSpan={1} className="borderLeft">pozostałe wydatki</TableCell>
                            <TableCell align="center" colSpan={2} rowSpan={1} className="borderLeft">razem wydatki (12+13)</TableCell>
                            <TableCell align="center" colSpan={2} rowSpan={1} className="borderLeft"></TableCell>
                            <TableCell align="center" colSpan={1} rowSpan={2} className="borderLeft borderRight">Opis kosztu</TableCell>
                            <TableCell align="center" colSpan={2} rowSpan={1}>wartość</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="center">zł</TableCell>
                            <TableCell align="center" className="borderLeft">gr</TableCell>
                            <TableCell align="center" className="borderLeft">zł</TableCell>
                            <TableCell align="center" className="borderLeft">gr</TableCell>
                            <TableCell align="center" className="borderLeft">zł</TableCell>
                            <TableCell align="center" className="borderLeft">gr</TableCell>
                            <TableCell align="center" className="borderLeft">zł</TableCell>
                            <TableCell align="center" className="borderLeft">gr</TableCell>
                            <TableCell align="center" className="borderLeft">zł</TableCell>
                            <TableCell align="center" className="borderLeft">gr</TableCell>
                            <TableCell align="center" className="borderLeft">zł</TableCell>
                            <TableCell align="center" className="borderLeft">gr</TableCell>
                            <TableCell align="center" className="borderLeft">zł</TableCell>
                            <TableCell align="center" className="borderLeft">gr</TableCell>
                            <TableCell align="center" className="borderLeft">zł</TableCell>
                            <TableCell align="center" className="borderLeft">gr</TableCell>
                            <TableCell align="center" className="borderLeft">zł</TableCell>
                            <TableCell align="center" className="borderLeft">gr</TableCell>
                            <TableCell align="center">zł</TableCell>
                            <TableCell align="center" className="borderLeft">gr</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="center" className="borderLeft borderRight">1</TableCell>
                            <TableCell align="center" className="borderRight">2</TableCell>
                            <TableCell align="center" className="borderRight">3</TableCell>
                            <TableCell align="center" className="borderRight">4</TableCell>
                            <TableCell align="center" className="borderRight">5</TableCell>
                            <TableCell align="center" className="borderRight">6</TableCell>
                            <TableCell align="center" colSpan={2} rowSpan={1} className="borderRight">7</TableCell>
                            <TableCell align="center" colSpan={2} rowSpan={1} className="borderRight">8</TableCell>
                            <TableCell align="center" colSpan={2} rowSpan={1} className="borderRight">9</TableCell>
                            <TableCell align="center" colSpan={2} rowSpan={1} className="borderRight">10</TableCell>
                            <TableCell align="center" colSpan={2} rowSpan={1} className="borderRight">11</TableCell>
                            <TableCell align="center" colSpan={2} rowSpan={1} className="borderRight">12</TableCell>
                            <TableCell align="center" colSpan={2} rowSpan={1} className="borderRight">13</TableCell>
                            <TableCell align="center" colSpan={2} rowSpan={1} className="borderRight">14</TableCell>
                            <TableCell align="center" colSpan={2} rowSpan={1} className="borderRight">15</TableCell>
                            <TableCell align="center" colSpan={3} rowSpan={1} className="borderRight">16</TableCell>
                            <TableCell align="center" className="borderRight">17</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    <TableRow className="borderLeft borderRight">
                            <TableCell className="borderRight"></TableCell>
                            <TableCell className="borderRight">
                                <DatePickerField value={addRLDate} onChange={(newValue) => (setAddRLDate(newValue))}/>
                            </TableCell>
                            <TableCell className="borderRight">
                                <TextField value={addRLNrProof} onChange={(event) => (setAddRLNrProof(event.target.value))}/>
                            </TableCell>
                            <TableCell className="borderRight">
                                <TextField value={addRLCompany} onChange={(event) => (setAddRLCompany(event.target.value))}/>
                            </TableCell>
                            <TableCell className="borderRight">
                                <TextField value={addRLAddr} onChange={(event) => (setAddRLAddr(event.target.value))}/>
                            </TableCell>
                            <TableCell className="borderRight">
                                <TextareaField aria-label="Description Business Event" placeholder="Opisz zdarzenie..." value={addRLEventdesc} onChange={(event) => (setAddRLEventdesc(event.target.value))}/>
                            </TableCell>
                            <TableCell className="borderRight">
                                <NumberField startAdornment={ 
                                    <InputAdornment>
                                        zł
                                    </InputAdornment>} value={addRLValsold[0]} onChange={(event, val) => (setAddRLValsold([val, addRLValsold[1]]))}/>
                            </TableCell>
                            <TableCell className="borderRight">
                                <NumberField startAdornment={ 
                                    <InputAdornment>
                                        gr
                                    </InputAdornment>} value={addRLValsold[1]} onChange={(event, val) => (setAddRLValsold([addRLValsold[0], val]))}/>
                            </TableCell>
                            <TableCell className="borderRight">
                                <NumberField startAdornment={ 
                                    <InputAdornment>
                                        zł
                                    </InputAdornment>} value={addRLOincome[0]} onChange={(event, val) => (setAddRLOincome([val, addRLOincome[1]]))}/>
                            </TableCell>
                            <TableCell className="borderRight">
                                <NumberField startAdornment={ 
                                    <InputAdornment>
                                        gr
                                    </InputAdornment>} value={addRLOincome[1]} onChange={(event, val) => (setAddRLOincome([addRLOincome[0], val]))}/>
                            </TableCell>
                            <TableCell className="borderRight">
                                <NumberField startAdornment={ 
                                    <InputAdornment>
                                        zł
                                    </InputAdornment>} value={addRLSincome[0]} onChange={(event, val) => (setAddRLSincome(val, addRLSincome[1]))}/>
                            </TableCell>
                            <TableCell className="borderRight">
                                <NumberField startAdornment={ 
                                    <InputAdornment>
                                        gr
                                    </InputAdornment>} value={addRLSincome[1]} onChange={(event, val) => (setAddRLSincome(addRLSincome[0], val))}/>
                            </TableCell>
                            <TableCell className="borderRight">
                                <NumberField startAdornment={ 
                                    <InputAdornment>
                                        zł
                                    </InputAdornment>} value={addRLPurchase[0]} onChange={(event, val) => (setAddRLPurchase(val, addRLPurchase[1]))}/>
                            </TableCell>
                            <TableCell className="borderRight">
                                <NumberField startAdornment={ 
                                    <InputAdornment>
                                        gr
                                    </InputAdornment>} value={addRLPurchase[1]} onChange={(event, val) => (setAddRLPurchase(addRLPurchase[0], val))}/>
                            </TableCell>
                            <TableCell className="borderRight">
                                <NumberField startAdornment={ 
                                    <InputAdornment>
                                        zł
                                    </InputAdornment>} value={addRLCosts[0]} onChange={(event, val) => (setAddRLCosts(val, addRLCosts[1]))}/>
                            </TableCell>
                            <TableCell className="borderRight">
                                <NumberField startAdornment={ 
                                    <InputAdornment>
                                        gr
                                    </InputAdornment>} value={addRLCosts[1]} onChange={(event, val) => (setAddRLCosts(addRLCosts[0], val))}/>
                            </TableCell>
                            <TableCell className="borderRight">
                                <NumberField startAdornment={ 
                                    <InputAdornment>
                                        zł
                                    </InputAdornment>} value={addRLWages[0]} onChange={(event, val) => (setAddRLWages(val, addRLWages[1]))}/>
                            </TableCell>
                            <TableCell className="borderRight">
                                <NumberField startAdornment={ 
                                    <InputAdornment>
                                        gr
                                    </InputAdornment>} value={addRLWages[1]} onChange={(event, val) => (setAddRLWages(addRLWages[0], val))}/>
                            </TableCell>
                            <TableCell className="borderRight">
                                <NumberField startAdornment={ 
                                    <InputAdornment>
                                        zł
                                    </InputAdornment>} value={addRLOcosts[0]} onChange={(event, val) => (setAddRLOcosts(val, addRLOcosts[1]))}/>
                            </TableCell>
                            <TableCell className="borderRight">
                                <NumberField startAdornment={ 
                                    <InputAdornment>
                                        gr
                                    </InputAdornment>} value={addRLOcosts[1]} onChange={(event, val) => (setAddRLOcosts(addRLOcosts[0], val))}/>
                            </TableCell>
                            <TableCell className="borderRight">
                                <NumberField startAdornment={ 
                                    <InputAdornment>
                                        zł
                                    </InputAdornment>} value={addRLScosts[0]} onChange={(event, val) => (setAddRLScosts([val, addRLScosts[1]]))}/>
                            </TableCell>
                            <TableCell className="borderRight">
                                <NumberField startAdornment={ 
                                    <InputAdornment>
                                        gr
                                    </InputAdornment>} value={addRLScosts[1]} onChange={(event, val) => (setAddRLScosts(addRLScosts[0], val))}/>
                            </TableCell>
                            <TableCell className="borderRight">
                                <NumberField startAdornment={ 
                                    <InputAdornment>
                                        zł
                                    </InputAdornment>} value={addRLEcosts[0]} onChange={(event, val) => (setAddRLEcosts([val, addRLEcosts[1]]))}/>
                            </TableCell>
                            <TableCell className="borderRight">
                                <NumberField startAdornment={ 
                                    <InputAdornment>
                                        gr
                                    </InputAdornment>} value={addRLEcosts[1]} onChange={(event, val) => (setAddRLEcosts([addRLEcosts[0], val]))}/>
                            </TableCell>
                            <TableCell className="borderRight">
                                <TextareaField aria-label="Description Cost" placeholder="Opisz koszt..." value={addRLCdesc} onChange={(event) => (setAddRLCdesc(event.target.value))}/>
                            </TableCell>
                            <TableCell className="borderRight">
                                <NumberField startAdornment={ 
                                    <InputAdornment>
                                        zł
                                    </InputAdornment>} value={addRLCval[0]} onChange={(event, val) => (setAddRLCval([val, addRLCval[1]]))}/>
                            </TableCell>
                            <TableCell className="borderRight">
                                <NumberField startAdornment={ 
                                    <InputAdornment>
                                        gr
                                    </InputAdornment>} value={addRLCval[1]} onChange={(event, val) => (setAddRLCval([addRLCval[0], val]))}/>
                            </TableCell>
                            <TableCell className="borderRight">
                                <TextareaField aria-label="Notes" placeholder="Napisz uwagi..." value={addRLNotes} onChange={(event) => (setAddRLNotes(event.target.value))}/>
                            </TableCell>
                            <TableCell align="right">
                                <Fragment>
                                    <IconButton type="submit">
                                        <AddIcon/>
                                    </IconButton>
                                </Fragment>
                            </TableCell>
                        </TableRow>
                        {context.revenueledgeritems.map((revenueledgeritem, index) => (
                            <TableRow key={ 'revenueledgeritem' + index } className="borderLeft borderRight">
                                <TableCell className="borderRight">{index + 1}</TableCell>
                                <TableCell className="borderRight">
                                    {editIsShown === revenueledgeritem.id ?
                                    <DatePickerField value={editRLDate} onChange={(newValue) => (setEditRLDate(newValue))}/>
                                    :
                                    revenueledgeritem.date.format('YYYY-MM-DD')
                                    }
                                </TableCell>
                                <TableCell className="borderRight">
                                    {editIsShown === revenueledgeritem.id ?
                                    <TextField value={editRLNrProof} onChange={(event) => (setEditRLNrProof(event.target.value))}/>
                                    :
                                    revenueledgeritem.nrproof
                                    }
                                </TableCell>
                                <TableCell className="borderRight">
                                    {editIsShown === revenueledgeritem.id ?
                                    <TextField value={editRLCompany} onChange={(event) => (setEditRLCompany(event.target.value))}/>
                                    :
                                    revenueledgeritem.company
                                    }
                                </TableCell>
                                <TableCell className="borderRight">
                                    {editIsShown === revenueledgeritem.id ?
                                    <TextField value={editRLAddr} onChange={(event) => (setEditRLAddr(event.target.value))}/>
                                    :
                                    revenueledgeritem.addr
                                    }
                                </TableCell>
                                <TableCell className="borderRight">
                                    {editIsShown === revenueledgeritem.id ?
                                    <TextareaField aria-label="Description Business Event" placeholder="Opisz zdarzenie..." value={editRLEventdesc} onChange={(event) => (setEditRLEventdesc(event.target.value))}/>
                                    :
                                    revenueledgeritem.eventdesc
                                    }
                                </TableCell>
                                <TableCell className="borderRight">
                                    {editIsShown === revenueledgeritem.id ?
                                    <NumberField startAdornment={ 
                                        <InputAdornment>
                                            zł
                                        </InputAdornment>} value={editRLValsold[0]} onChange={(event, val) => (setEditRLValsold([val, editRLValsold[1]]))}/>
                                    :
                                    revenueledgeritem.valsold[0]
                                    }
                                </TableCell>
                                <TableCell className="borderRight">
                                    {editIsShown === revenueledgeritem.id ?
                                    <NumberField startAdornment={ 
                                        <InputAdornment>
                                            gr
                                        </InputAdornment>} value={editRLValsold[1]} onChange={(event, val) => (setEditRLValsold([editRLValsold[0], val]))}/>
                                    :
                                    revenueledgeritem.valsold[1]
                                    }
                                </TableCell>
                                <TableCell className="borderRight">
                                    {editIsShown === revenueledgeritem.id ?
                                    <NumberField startAdornment={ 
                                        <InputAdornment>
                                            zł
                                        </InputAdornment>} value={editRLOincome[0]} onChange={(event, val) => (setEditRLOincome([val, editRLOincome[1]]))}/>
                                    :
                                    revenueledgeritem.oincome[0]
                                    }
                                </TableCell>
                                <TableCell className="borderRight">
                                    {editIsShown === revenueledgeritem.id ?
                                    <NumberField startAdornment={ 
                                        <InputAdornment>
                                            gr
                                        </InputAdornment>} value={editRLOincome[1]} onChange={(event, val) => (setEditRLOincome([editRLOincome[0], val]))}/>
                                    :
                                    revenueledgeritem.oincome[1]
                                    }
                                </TableCell>
                                <TableCell className="borderRight">
                                    {editIsShown === revenueledgeritem.id ?
                                    <NumberField startAdornment={ 
                                        <InputAdornment>
                                            zł
                                        </InputAdornment>} value={editRLSincome[0]} onChange={(event, val) => (setEditRLSincome(val, editRLSincome[1]))}/>
                                    :
                                    revenueledgeritem.sincome[0]
                                    }
                                </TableCell>
                                <TableCell className="borderRight">
                                    {editIsShown === revenueledgeritem.id ?
                                    <NumberField startAdornment={ 
                                        <InputAdornment>
                                            gr
                                        </InputAdornment>} value={editRLSincome[1]} onChange={(event, val) => (setEditRLSincome(editRLSincome[0], val))}/>
                                    :
                                    revenueledgeritem.sincome[1]
                                    }
                                </TableCell>
                                <TableCell className="borderRight">
                                    {editIsShown === revenueledgeritem.id ?
                                    <NumberField startAdornment={ 
                                        <InputAdornment>
                                            zł
                                        </InputAdornment>} value={editRLPurchase[0]} onChange={(event, val) => (setEditRLPurchase(val, editRLPurchase[1]))}/>
                                    :
                                    revenueledgeritem.purchase[0]
                                    }
                                </TableCell>
                                <TableCell className="borderRight">
                                    {editIsShown === revenueledgeritem.id ?
                                    <NumberField startAdornment={ 
                                        <InputAdornment>
                                            gr
                                        </InputAdornment>} value={editRLPurchase[1]} onChange={(event, val) => (setEditRLPurchase(editRLPurchase[0], val))}/>
                                    :
                                    revenueledgeritem.purchase[1]
                                    }
                                </TableCell>
                                <TableCell className="borderRight">
                                    {editIsShown === revenueledgeritem.id ?
                                    <NumberField startAdornment={ 
                                        <InputAdornment>
                                            zł
                                        </InputAdornment>} value={editRLCosts[0]} onChange={(event, val) => (setEditRLCosts(val, editRLCosts[1]))}/>
                                    :
                                    revenueledgeritem.costs[0]
                                    }
                                </TableCell>
                                <TableCell className="borderRight">
                                    {editIsShown === revenueledgeritem.id ?
                                    <NumberField startAdornment={ 
                                        <InputAdornment>
                                            gr
                                        </InputAdornment>} value={editRLCosts[1]} onChange={(event, val) => (setEditRLCosts(editRLCosts[0], val))}/>
                                    :
                                    revenueledgeritem.costs[1]
                                    }
                                </TableCell>
                                <TableCell className="borderRight">
                                    {editIsShown === revenueledgeritem.id ?
                                    <NumberField startAdornment={ 
                                        <InputAdornment>
                                            zł
                                        </InputAdornment>} value={editRLWages[0]} onChange={(event, val) => (setEditRLWages(val, editRLWages[1]))}/>
                                    :
                                    revenueledgeritem.wages[0]
                                    }
                                </TableCell>
                                <TableCell className="borderRight">
                                    {editIsShown === revenueledgeritem.id ?
                                    <NumberField startAdornment={ 
                                        <InputAdornment>
                                            gr
                                        </InputAdornment>} value={editRLWages[1]} onChange={(event, val) => (setEditRLWages(editRLWages[0], val))}/>
                                    :
                                    revenueledgeritem.wages[1]
                                    }
                                </TableCell>
                                <TableCell className="borderRight">
                                    {editIsShown === revenueledgeritem.id ?
                                    <NumberField startAdornment={ 
                                        <InputAdornment>
                                            zł
                                        </InputAdornment>} value={editRLOcosts[0]} onChange={(event, val) => (setEditRLOcosts(val, editRLOcosts[1]))}/>
                                    :
                                    revenueledgeritem.ocosts[0]
                                    }
                                </TableCell>
                                <TableCell className="borderRight">
                                    {editIsShown === revenueledgeritem.id ?
                                    <NumberField startAdornment={ 
                                        <InputAdornment>
                                            gr
                                        </InputAdornment>} value={editRLOcosts[1]} onChange={(event, val) => (setEditRLOcosts(editRLOcosts[0], val))}/>
                                    :
                                    revenueledgeritem.ocosts[1]
                                    }
                                </TableCell>
                                <TableCell className="borderRight">
                                    {editIsShown === revenueledgeritem.id ?
                                    <NumberField startAdornment={ 
                                        <InputAdornment>
                                            zł
                                        </InputAdornment>} value={editRLScosts[0]} onChange={(event, val) => (setEditRLScosts([val, editRLScosts[1]]))}/>
                                    :
                                    revenueledgeritem.scosts[0]
                                    }
                                </TableCell>
                                <TableCell className="borderRight">
                                    {editIsShown === revenueledgeritem.id ?
                                    <NumberField startAdornment={ 
                                        <InputAdornment>
                                            gr
                                        </InputAdornment>} value={editRLScosts[1]} onChange={(event, val) => (setEditRLScosts(editRLScosts[0], val))}/>
                                    :
                                    revenueledgeritem.scosts[1]
                                    }
                                </TableCell>
                                <TableCell className="borderRight">
                                    {editIsShown === revenueledgeritem.id ?
                                    <NumberField startAdornment={ 
                                        <InputAdornment>
                                            zł
                                        </InputAdornment>} value={editRLEcosts[0]} onChange={(event, val) => (setEditRLEcosts([val, editRLEcosts[1]]))}/>
                                    :
                                    revenueledgeritem.ecosts[0]
                                    }
                                </TableCell>
                                <TableCell className="borderRight">
                                    {editIsShown === revenueledgeritem.id ?
                                    <NumberField startAdornment={ 
                                        <InputAdornment>
                                            gr
                                        </InputAdornment>} value={editRLEcosts[1]} onChange={(event, val) => (setEditRLEcosts([editRLEcosts[0], val]))}/>
                                    :
                                    revenueledgeritem.ecosts[1]
                                    }
                                </TableCell>
                                <TableCell className="borderRight">
                                    {editIsShown === revenueledgeritem.id ?
                                    <TextareaField aria-label="Description Cost" placeholder="Opisz koszt..." value={editRLCdesc} onChange={(event) => (setEditRLCdesc(event.target.value))}/>
                                    :
                                    revenueledgeritem.cdesc
                                    }
                                </TableCell>
                                <TableCell className="borderRight">
                                    {editIsShown === revenueledgeritem.id ?
                                    <NumberField startAdornment={ 
                                        <InputAdornment>
                                            zł
                                        </InputAdornment>} value={editRLCval[0]} onChange={(event, val) => (setEditRLCval([val, editRLCval[1]]))}/>
                                    :
                                    revenueledgeritem.cval[0]
                                    }
                                </TableCell>
                                <TableCell className="borderRight">
                                    {editIsShown === revenueledgeritem.id ?
                                    <NumberField startAdornment={ 
                                        <InputAdornment>
                                            gr
                                        </InputAdornment>} value={editRLCval[1]} onChange={(event, val) => (setEditRLCval([editRLCval[0], val]))}/>
                                    :
                                    revenueledgeritem.cval[1]
                                    }
                                </TableCell>
                                <TableCell className="borderRight">
                                    {editIsShown === revenueledgeritem.id ?
                                    <TextareaField aria-label="Notes" placeholder="Napisz uwagi..." value={editRLNotes} onChange={(event) => (setEditRLNotes(event.target.value))}/>
                                    :
                                    revenueledgeritem.notes
                                    }
                                </TableCell>
                                <TableCell align="right" style={editIsShown === revenueledgeritem.id ? {
                                        position: 'fixed',
                                        right: '98%',
                                        padding: '0',
                                        margin: '0',
                                        border: '0',
                                    } : {}}>
                                    {editIsShown === revenueledgeritem.id ?
                                    <Fragment>
                                        <IconButton onClick={() => {setEditIsShown(false);}}>
                                            <CloseIcon/>
                                        </IconButton>
                                        <IconButton onClick={() => {context.updateRevenueAndExpense({id: revenueledgeritem.id, revenueLedger: editRevenueLedger()}); setEditIsShown(false);}}>
                                            <DoneIcon/>
                                        </IconButton>
                                    </Fragment>
                                    :
                                    <Fragment>
                                        <IconButton onClick={() => {setEditIsShown(revenueledgeritem.id); setEditRevenueLedger(revenueledgeritem)}}>
                                            <EditIcon/>
                                        </IconButton>
                                        <IconButton onClick={() => {setDeleteConfirmationIsShown(true); setRevenueLedgerToBeDeleted(revenueledgeritem);}}>
                                            <DeleteIcon/>
                                        </IconButton>
                                    </Fragment>
                                    }
                                </TableCell>
                            </TableRow>
                        ))}
                        <TableRow>
                            <TableCell rowSpan={3} colSpan={5} style={{ borderBottom: '0' }}/>
                            <TableCell className="borderLeft">Suma strony</TableCell>
                            <TableCell className="borderLeft"></TableCell>
                            <TableCell className="borderLeft"></TableCell>
                            <TableCell className="borderLeft"></TableCell>
                            <TableCell className="borderLeft"></TableCell>
                            <TableCell className="borderLeft"></TableCell>
                            <TableCell className="borderLeft"></TableCell>
                            <TableCell className="borderLeft"></TableCell>
                            <TableCell className="borderLeft"></TableCell>
                            <TableCell className="borderLeft"></TableCell>
                            <TableCell className="borderLeft"></TableCell>
                            <TableCell className="borderLeft"></TableCell>
                            <TableCell className="borderLeft"></TableCell>
                            <TableCell className="borderLeft"></TableCell>
                            <TableCell className="borderLeft"></TableCell>
                            <TableCell className="borderLeft"></TableCell>
                            <TableCell className="borderLeft"></TableCell>
                            <TableCell className="borderLeft"></TableCell>
                            <TableCell className="borderLeft"></TableCell>
                            <TableCell className="borderLeft"></TableCell>
                            <TableCell className="borderLeft"></TableCell>
                            <TableCell className="borderLeft"></TableCell>
                            <TableCell className="borderLeft borderRight"></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="borderLeft">Przeniesienie z poprzedniej strony</TableCell>
                            <TableCell className="borderLeft"></TableCell>
                            <TableCell className="borderLeft"></TableCell>
                            <TableCell className="borderLeft"></TableCell>
                            <TableCell className="borderLeft"></TableCell>
                            <TableCell className="borderLeft"></TableCell>
                            <TableCell className="borderLeft"></TableCell>
                            <TableCell className="borderLeft"></TableCell>
                            <TableCell className="borderLeft"></TableCell>
                            <TableCell className="borderLeft"></TableCell>
                            <TableCell className="borderLeft"></TableCell>
                            <TableCell className="borderLeft"></TableCell>
                            <TableCell className="borderLeft"></TableCell>
                            <TableCell className="borderLeft"></TableCell>
                            <TableCell className="borderLeft"></TableCell>
                            <TableCell className="borderLeft"></TableCell>
                            <TableCell className="borderLeft"></TableCell>
                            <TableCell className="borderLeft"></TableCell>
                            <TableCell className="borderLeft"></TableCell>
                            <TableCell className="borderLeft"></TableCell>
                            <TableCell className="borderLeft"></TableCell>
                            <TableCell className="borderLeft"></TableCell>
                            <TableCell className="borderLeft borderRight"></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="borderLeft">Razem od początku roku</TableCell>
                            <TableCell className="borderLeft"></TableCell>
                            <TableCell className="borderLeft"></TableCell>
                            <TableCell className="borderLeft"></TableCell>
                            <TableCell className="borderLeft"></TableCell>
                            <TableCell className="borderLeft"></TableCell>
                            <TableCell className="borderLeft"></TableCell>
                            <TableCell className="borderLeft"></TableCell>
                            <TableCell className="borderLeft"></TableCell>
                            <TableCell className="borderLeft"></TableCell>
                            <TableCell className="borderLeft"></TableCell>
                            <TableCell className="borderLeft"></TableCell>
                            <TableCell className="borderLeft"></TableCell>
                            <TableCell className="borderLeft"></TableCell>
                            <TableCell className="borderLeft"></TableCell>
                            <TableCell className="borderLeft"></TableCell>
                            <TableCell className="borderLeft"></TableCell>
                            <TableCell className="borderLeft"></TableCell>
                            <TableCell className="borderLeft"></TableCell>
                            <TableCell className="borderLeft"></TableCell>
                            <TableCell className="borderLeft"></TableCell>
                            <TableCell className="borderLeft"></TableCell>
                            <TableCell className="borderLeft borderRight"></TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </form>
            <NestedList/>
            {deleteConfirmationIsShown && (
                <DeleteDialog revenueLedger={revenueLedgerToBeDeleted}
                              open={deleteConfirmationIsShown}
                              setDeleteConfirmationIsShown={setDeleteConfirmationIsShown}
                />
            )}
        </Fragment>
    );
}
export default RevenueAndExpenseTable;