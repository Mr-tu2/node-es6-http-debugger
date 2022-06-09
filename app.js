import { http } from "./http.js";

export const runApp = async () => {
    try {
        const res = await http.get("api/article_users?page=1");
        return res.data;
    } catch (error) {
        console.error(error);
    }
};
