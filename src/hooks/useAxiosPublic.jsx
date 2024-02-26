import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://marble-store-app.onrender.com'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;
