const username_log_in = document.querySelector('#username_log-in');
const password_log_in = document.querySelector('#password_log-in');
const btn__log_in = document.querySelector("#btn__log-in")

btn__log_in.addEventListener("click", () => {
    let user = {
        name: username_log_in.value,
        password: password_log_in.value,
    }
    console.log(user);

    if (user.name == "admin" && user.password === "123") {
        localStorage.setItem("admin", "true");
        alert("you have switched to administrator mode");
        location.reload()
    }
    else{
        localStorage.setItem("admin", "else");
    }
});