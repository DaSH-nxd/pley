export default function authHeader() {
    const user = JSON.parse(localStorage.getItem("user"));
    console.log('test');
    if (user && user.accessToken) {
        return {"x-auth-token": user.accessToken};
    } else {
        return {};
    }
}