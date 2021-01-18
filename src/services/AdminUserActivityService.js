import axios from "axios";
import "js-file-download";

const USER_ACTIVITY_API_BASE_URL =
    "http://localhost:8081/springfox/api/userActivity";

class AdminUserActivityService {
    getUserActivity() {
        return axios.get(USER_ACTIVITY_API_BASE_URL + "/");
    }

    createUserActivity(user) {
        return axios.post(USER_ACTIVITY_API_BASE_URL + "/", user);
    }

    getUserActivityById(userId) {
        return axios.get(USER_ACTIVITY_API_BASE_URL + "/" + userId);
    }

    updateUserActivity(user) {
        return axios.put(USER_ACTIVITY_API_BASE_URL + "/updateStatus/", user);
    }

    deleteUserActivity(userId) {
        return axios.delete(USER_ACTIVITY_API_BASE_URL + "/" + userId);
    }

    downloadCertificate(userId) {
        axios({
            url: "http://localhost/downloadFile",
            method: "GET",
            responseType: "blob", // Important
        }).then((response) => {
            FileDownload(response.data, "report.csv");
        });
    }
}

//exporting EmployeeService object
export default new AdminUserActivityService();
