const signupUsernameEle = document.getElementById("signup-username");
const signupPasswordEle = document.getElementById("signup-password");
const signupBtnEle = document.getElementById("sign-up");
const signinUsernameEle = document.getElementById("signin-username");
const signinPasswordEle = document.getElementById("signin-password");
const signinBtnEle = document.getElementById("sign-in");
const logedInEle = document.querySelector(".logedIn");
const usernameLogedInEle = document.getElementById("username-logedIn");
const passwordLogedInEle = document.getElementById("password-logedIn");
const logoutBtnEle = document.getElementById("logout-btn");



signupBtnEle.addEventListener("click", signupFn)

async function signupFn (){
    const username = signupUsernameEle.value;
    const password = signupPasswordEle.value;
    if (username.trim() == "" || password.trim() == ""){
        throw new Error("Please enter the username & password");
    }
    const data = await axios.post("http://localhost:3000/signup", {
        username,
        password
    })

    if (data.status == 200){
        alert("You signed up")
        signupUsernameEle.value = "";
        signinPasswordEle.value = "";
    }
    
}