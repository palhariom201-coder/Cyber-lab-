function handleLogin(e) {
    e.preventDefault();
    console.log("Login form submitted");
}

const googleLogin = () => {
    console.log("Google login clicked");
    window.location.href = "/";
}