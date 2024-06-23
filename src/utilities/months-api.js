import sendRequest from "./send-request";

const BASE_URL = "/api/months";

export async function display() {
    return sendRequest(BASE_URL)
}

export async function createMonth(month){
    return sendRequest(`${BASE_URL}/new`, "POST", month)
}