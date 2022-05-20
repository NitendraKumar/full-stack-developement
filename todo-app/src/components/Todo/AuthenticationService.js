class AuthenticationService{
    registerSuccessfulLogin(username, password){
        sessionStorage.setItem('username', username);
    }

    logout(){
        console.log("Logout called")
        sessionStorage.removeItem("username");
    }

    isUserLoggedIn(){
        console.log("Logged in user checked")
        let user = sessionStorage.getItem("username")
        if (user === null) return false;
        return true;
    }
}

export default new AuthenticationService()