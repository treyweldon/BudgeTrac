import sendRequest from "./send-request";

const BASE_URL = "/api/months";

export async function displayAll() {
    return sendRequest(`${BASE_URL}/index`)
}

export async function createMonth(month){
    return sendRequest(`${BASE_URL}/new`, "POST", month)
}

// export async function currentMonthExpenses(month){
//     return sendRequest(`${BASE_URL}/expenses`, "GET", month)
// }