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
const oldUserEle = document.querySelector(".old-user");
const newUserEle = document.querySelector(".new-user");





signupBtnEle.addEventListener("click", signupFn);
signinBtnEle.addEventListener("click", signin);

getUserData();

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
        signupPasswordEle.value = "";
    }
    
}

async function signin() {
    const username = signinUsernameEle.value;
    const password = signinPasswordEle.value;

    if (username.trim() == "" || password.trim() == ""){
        throw new Error("Please enter the username & password");
    }
    const data = await axios.post("http://localhost:3000/signin", {
        username,
        password
    });
    if (data.status == 200){
        alert("You are signed in");
    }
    localStorage.setItem("token", data.data.token);
    console.log(newUserEle);
    getUserData();
}


async function getUserData() {
    const token = localStorage.getItem("token") || "";
    if (token){
        newUserEle.style.display = "none";
        try{
            const data = await axios.get("http://localhost:3000/me", {
                headers : {
                    token
                }
            });
            usernameLogedInEle.textContent = data.data.name;
            passwordLogedInEle.textContent = data.data.pass;
        }
        catch(err){
            oldUserEle.style.display = "none";
            newUserEle.style.display = "flex";
            console.log(err);
        }
        
    }
    else{
        newUserEle.style.display = "flex";
        oldUserEle.style.display = "none";
        console.log("No token available");
    }
} 


logoutBtnEle.addEventListener("click", () => {
    localStorage.removeItem("token");
    getUserData();
})