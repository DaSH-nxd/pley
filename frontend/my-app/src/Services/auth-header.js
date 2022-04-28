export default function authHeader() {
    const user = JSON.parse(localStorage.getItem("user"));
    console.log('test');
    if (user && user.token) {
        return {"token": user.token};
    } else {
        return {};
    }
}