import React from "react";
import { createRoot } from 'react-dom/client';
import RevenueAndExpenseContextProvider from "./contexts/revenueAndExpenseContext";
import RevenueAndExpenseTable from "./components/revenueAndExpenseTable";
import { CssBaseline } from "@material-ui/core";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// start the Stimulus application
// import './bootstrap.js';

class App extends React.Component {
    render() {
        return (
            <RevenueAndExpenseContextProvider>
                <CssBaseline>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <RevenueAndExpenseTable/>
                    </LocalizationProvider>
                </CssBaseline>
            </RevenueAndExpenseContextProvider>
        );
    }
}
const root = createRoot(document.getElementById('root'));
root.render(<App/>);