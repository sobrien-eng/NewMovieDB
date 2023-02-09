function authHeader(){
    const user = JSON.stringify(localStorage.getItem('user'));
    if (user && user.accessToken){
        return{'x-accessToken': user.accessToken};
    } else {
        return{};
    }
}

export default authHeader;