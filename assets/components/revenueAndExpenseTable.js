import React, { useContext } from "react";
import { RevenueAndExpenseContext } from "../contexts/revenueAndExpenseContext";
import { Table, TableBody, TableCell, TableHead, TableRow } from "@material-ui/core";
import "../styles/app.css";

function RevenueAndExpenseTable() {
    const context = useContext(RevenueAndExpenseContext);

    return (
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
                {context.revenueledgeritems.map(revenueledgeritem => (
                    <TableRow key={revenueledgeritem.id} className="borderLeft borderRight">
                        <TableCell className="borderRight">{revenueledgeritem.id + 1}</TableCell>
                        <TableCell className="borderRight">{revenueledgeritem.date}</TableCell>
                        <TableCell className="borderRight">{revenueledgeritem.nrproof}</TableCell>
                        <TableCell className="borderRight">{revenueledgeritem.company}</TableCell>
                        <TableCell className="borderRight">{revenueledgeritem.addr}</TableCell>
                        <TableCell className="borderRight">{revenueledgeritem.eventdesc}</TableCell>
                        <TableCell className="borderRight">{revenueledgeritem.valsold[0]}</TableCell>
                        <TableCell className="borderRight">{revenueledgeritem.valsold[1]}</TableCell>
                        <TableCell className="borderRight">{revenueledgeritem.oincome[0]}</TableCell>
                        <TableCell className="borderRight">{revenueledgeritem.oincome[1]}</TableCell>
                        <TableCell className="borderRight">{revenueledgeritem.sincome[0]}</TableCell>
                        <TableCell className="borderRight">{revenueledgeritem.sincome[1]}</TableCell>
                        <TableCell className="borderRight">{revenueledgeritem.purchase[0]}</TableCell>
                        <TableCell className="borderRight">{revenueledgeritem.purchase[1]}</TableCell>
                        <TableCell className="borderRight">{revenueledgeritem.costs[0]}</TableCell>
                        <TableCell className="borderRight">{revenueledgeritem.costs[1]}</TableCell>
                        <TableCell className="borderRight">{revenueledgeritem.wages[0]}</TableCell>
                        <TableCell className="borderRight">{revenueledgeritem.wages[1]}</TableCell>
                        <TableCell className="borderRight">{revenueledgeritem.ocosts[0]}</TableCell>
                        <TableCell className="borderRight">{revenueledgeritem.ocosts[1]}</TableCell>
                        <TableCell className="borderRight">{revenueledgeritem.scosts[0]}</TableCell>
                        <TableCell className="borderRight">{revenueledgeritem.scosts[1]}</TableCell>
                        <TableCell className="borderRight">{revenueledgeritem.ecosts[0]}</TableCell>
                        <TableCell className="borderRight">{revenueledgeritem.ecosts[1]}</TableCell>
                        <TableCell className="borderRight">{revenueledgeritem.cdesc}</TableCell>
                        <TableCell className="borderRight">{revenueledgeritem.cval[0]}</TableCell>
                        <TableCell className="borderRight">{revenueledgeritem.cval[1]}</TableCell>
                        <TableCell>{revenueledgeritem.notes}</TableCell>
                    </TableRow>
                ))}
                <TableRow>
                    <TableCell rowSpan={3} colspan={5} style={{ borderBottom: '0' }}/>
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
                    <TableCell  className="borderLeft borderRight"></TableCell>
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
                    <TableCell  className="borderLeft borderRight"></TableCell>
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
                    <TableCell  className="borderLeft borderRight"></TableCell>
                </TableRow>
            </TableBody>
        </Table>
    );
}

export default RevenueAndExpenseTable;