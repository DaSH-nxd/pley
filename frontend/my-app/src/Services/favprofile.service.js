import axios from "axios";
import authHeader from "./auth-header";

//gets the user's favorites, while making sure they are authenticated
const getAllFavorites = () => {
    return axios.get("/favorites", { headers: authHeader() });
};

export default getAllFavorites;