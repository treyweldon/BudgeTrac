import { useEffect, useState } from 'react';
import axios from 'axios';

export default function ExpensesChart() {
    const [month, setMonth] = useState(null);

    useEffect(() => {
        const fetchMonth = async () => {
            try {
                const response = await axios.get('/api/months');
                setMonth(response.data);
            } catch (error) {
                console.error('Error fetching month data:', error);
            }
        };

        fetchMonth();
    }, []);

    if (!month) {
        return <div>No Data Found</div>;
    }

    const rows = Object.keys(month.categoryExpenseSum).map(category => {
        const total = month.categoryExpenseSum[category];
        const percentage = month.categoryExpensesPercentages[category];

        return (
            <tr key={category}>
                <td>{category}</td>
                <td>${total.toFixed(2)}</td>
                <td>{percentage.toFixed(2)}%</td>
            </tr>
        );
    });

    return (
        <div>
            <h2>Expense Summary</h2>
            <table>
                <thead>
                    <tr>
                        <th>Category</th>
                        <th>Total Expense</th>
                        <th>Percentage of Total</th>
                    </tr>
                </thead>
                <tbody>
                    {month.expenses.length > 0 ? (
                        rows
                    ) : (
                        <tr>
                            <td colSpan="3">No expenses yet</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}