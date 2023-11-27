import { Table, TableBody, TableCell, TableContainer, TableRow, Paper, Checkbox, FormControlLabel } from '@mui/material';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import {useState} from "react";
import { Line } from 'react-chartjs-2';



ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

type PriceHistoryProps = {
    monthlyPriceChanges: { month: string, price: number }[];
};

const PriceHistoryTable: React.FC<PriceHistoryProps> = ({ monthlyPriceChanges }) => {
    const [showTable, setShowTable] = useState(false);

    const months = monthlyPriceChanges.map(entry => entry.month);
    const prices = monthlyPriceChanges.map(entry => entry.price);

    // Data for the line chart
    const data = {
        labels: months,
        datasets: [
            {
                label: 'Price',
                data: prices,
                fill: false,
                backgroundColor: 'rgb(75, 192, 192)',
                borderColor: 'rgba(75, 192, 192, 0.2)',
            },
        ],
    };

    return (
        <>
            <Line data={data} />
            <FormControlLabel
                control={<Checkbox checked={showTable} onChange={(e) => setShowTable(e.target.checked)} />}
                label="Show Price Table"
            />

            {showTable && (
                <TableContainer component={Paper} sx={{ marginTop: 2, marginBottom: 2, maxWidth: 600, margin: 'auto' }}>
                    <Table aria-label="monthly price changes">
                        <TableBody>
                            <TableRow>
                                <TableCell component="th" scope="row">Month</TableCell>
                                {months.map((month, index) => (
                                    <TableCell key={index}>{month}</TableCell>
                                ))}
                            </TableRow>

                            <TableRow>
                                <TableCell component="th" scope="row">Price $</TableCell>
                                {prices.map((price, index) => (
                                    <TableCell key={index}>{price.toFixed(2)}</TableCell>
                                ))}
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            )}
        </>
    );
};

export default PriceHistoryTable;
