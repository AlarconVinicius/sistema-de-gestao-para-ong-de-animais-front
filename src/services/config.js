import axios from "axios";
import localStorageUtils from "../utils/LocalStorageUtils";

const baseURL = "https://localhost:7153/api/v1";
const fetchPublic = axios.create({
    baseURL: baseURL,
    headers: {
        "Content-Type": "application/json"
    }
});
const fetchAdmin = axios.create({
    baseURL: baseURL,
    headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${localStorageUtils.getUserToken()}`,
        'TenantId': localStorageUtils.getTenantId(),
    }
});

export { fetchPublic, fetchAdmin };