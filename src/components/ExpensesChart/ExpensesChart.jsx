// import { useEffect, useState } from 'react';

export default function ExpensesChart({months}) {
 
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
                {/* <tbody>
                    {months.expenses.length > 0 ? (
                        <p>data</p>
                    ) : (
                        <tr>
                            <td colSpan="3">No expenses yet</td>
                        </tr>
                    )}
                </tbody> */}
            </table>
        </div>
    );
}