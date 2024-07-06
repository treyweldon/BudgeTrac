import React, { useState, useEffect } from 'react';
import { getCurrentIncome } from '../../utilities/months-api';


export default function IncomeChart() {
    const [incomeData, setIncomeData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getCurrentIncome();
                setIncomeData(data);
            } catch (error) {
                console.error('Error fetching data:', error.message);
                setError('Failed to fetch data');
            }
        };

        fetchData();
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h2>Income Summary</h2>
            <table>
                <thead>
                    <tr>
                        <th>Category</th>
                        <th>Total Income</th>
                    </tr>
                </thead>
                <tbody>
                    {incomeData.map((item, index) => (
                        <tr key={index}>
                            <td>{item.category}</td>
                            <td>${item.amount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

// import React, { useState, useEffect } from 'react';

// export default function IncomeChart() {
//     const [incomeData, setIncomeData] = useState([]);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await fetch('/api/months/data'); 
//                 if (!response.ok) {
//                     throw new Error(`HTTP error! Status: ${response.status}`);
//                 }
//                 const data = await response.json();
//                 setIncomeData(data); 
//             } catch (error) {
//                 console.error('Error fetching data:', error.message);
//                 setError('Failed to fetch data');
//             }
//         };

//         fetchData();
//     }, []);

//     if (error) {
//         return <div>Error: {error}</div>;
//     }

//     return (
//         <div>
//             <h2>Income Summary</h2>
//             <table>
//                 <thead>
//                     <tr>
//                         <th>Category</th>
//                         <th>Total Income</th>
//                         {/* <th>Percentage of Income</th> */}
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {incomeData.map((item, index) => (
//                         <tr key={index}>
//                             <td>{item.category}</td>
//                             <td>${item.amount.toFixed(2)}</td>
//                             {/* <td>${item.percentageOfTotal.toFixed(2)}</td> */}
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// }



// export default function IncomeChart(){
// // const [monthData, setMonthData] = useState(null);

// // useEffect(() => {
//     //     const fetchMonthData = async () => {
//         //         try {
//             //             const response = await fetch('/api/months');
//             //             if (!response.ok) {
//                 //                 throw new Error('Failed to fetch data');
//                 //             }
//                 //             const data = await response.json();
//                 //             setMonthData(data);
//                 //         } catch (error) {
//                     //             console.error('Error fetching month data:', error);
//                     //         }
//                     //     };
                    
//                     //     fetchMonthData();
//                     // }, []);
                    
//                     // if (!monthData) {
//                         //     return <div>No Data Found</div>;
//                         // }
                        
//                         // const rows = Object.keys(monthData.categoryIncomeSum).map(category => {
//                             //     const total = monthData.categoryIncomeSum[category];
//                             //     const percentage = monthData.categoryIncomesPercentages[category];
                            
//                             //     return (
//                                 //         <tr key={category}>
//                                 //             <td>{category}</td>
//                                 //             <td>${total.toFixed(2)}</td>
//                                 //             <td>{percentage.toFixed(2)}%</td>
//                                 //         </tr>
//                                 //     );
//                                 // });
                                
//                                 return (
//                                     <div>
//             <h2>Income Summary</h2>
//             <table>
//                 <thead>
//                     <tr>
//                         <th>Category</th>
//                         <th>Total Income</th>
//                         <th>Percentage of Total</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {/* {rows} */}
//                 </tbody>
//             </table>
//         </div>
//     );
// };