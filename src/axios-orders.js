import axios from "axios";

const instance = axios.create({
    baseURL: 'https://react-91e64-default-rtdb.firebaseio.com/'
})

export default instance;