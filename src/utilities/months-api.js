import sendRequest from "./send-request";

const BASE_URL = "/api/months";

export async function displayAll() {
    return sendRequest(`${BASE_URL}`)
}

export async function displayCurrent() {
    return sendRequest(`${BASE_URL}/current`)
}

export async function createMonth(month){
    return sendRequest(`${BASE_URL}/new`, "POST", month)
}

export async function currentMonthExpenses(month){
    return sendRequest(`${BASE_URL}/expenses`, "GET", month)
}

export async function createExpense(expense) {
    return sendRequest(`${BASE_URL}/createExpense`, "POST", expense);
  }

  export async function createIncome(income) {
    return sendRequest(`${BASE_URL}/createIncome`, "POST", income);
  }
    