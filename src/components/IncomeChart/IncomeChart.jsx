// import { useEffect, useState } from 'react';

export default function IncomeChart(){

    // const [monthData, setMonthData] = useState(null);

    // useEffect(() => {
    //     const fetchMonthData = async () => {
    //         try {
    //             const response = await fetch('/api/months');
    //             if (!response.ok) {
    //                 throw new Error('Failed to fetch data');
    //             }
    //             const data = await response.json();
    //             setMonthData(data);
    //         } catch (error) {
    //             console.error('Error fetching month data:', error);
    //         }
    //     };

    //     fetchMonthData();
    // }, []);

    // if (!monthData) {
    //     return <div>No Data Found</div>;
    // }

    // const rows = Object.keys(monthData.categoryIncomeSum).map(category => {
    //     const total = monthData.categoryIncomeSum[category];
    //     const percentage = monthData.categoryIncomesPercentages[category];

    //     return (
    //         <tr key={category}>
    //             <td>{category}</td>
    //             <td>${total.toFixed(2)}</td>
    //             <td>{percentage.toFixed(2)}%</td>
    //         </tr>
    //     );
    // });

    return (
        <div>
            <h2>Income Summary</h2>
            <table>
                <thead>
                    <tr>
                        <th>Category</th>
                        <th>Total Income</th>
                        <th>Percentage of Total</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {rows} */}
                </tbody>
            </table>
        </div>
    );
};