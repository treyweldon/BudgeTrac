import sendRequest from "./send-request";

const BASE_URL = "/api/months";

export async function displayAll() {
    return sendRequest(`${BASE_URL}`)
}

// export async function monthsData() {
//     return sendRequest(`${BASE_URL}/data`)
// }

export async function displayCurrent() {
    return sendRequest(`${BASE_URL}/current`)
}

export async function createMonth(month){
    return sendRequest(`${BASE_URL}/new`, "POST", month)
}

// export async function currentMonthExpenses(month){
//     return sendRequest(`${BASE_URL}/expenses`, "GET", month)
// }

export async function createExpense(newExpense) {
    return sendRequest(`${BASE_URL}/createExpense`, "POST", newExpense);
}

export async function createIncome(newIncome) {
    return sendRequest(`${BASE_URL}/createIncome`, "POST", newIncome);
}
    
export async function getCurrentIncome(){
    return sendRequest(`${BASE_URL}`)
}
    
export async function getCurrentExpenses(){
    return sendRequest(`${BASE_URL}`)
}