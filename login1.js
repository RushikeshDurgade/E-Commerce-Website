let form = document.querySelector("form");
let userName = document.querySelectorAll("input")[0];
let password = document.querySelectorAll("input")[1];
let erroruser = document.querySelectorAll("span")[0];
let errorpass = document.querySelectorAll("span")[1];
let errorsubmit = document.querySelectorAll("span")[2];

// console.log(form, userName, password);
// console.log(errorpass, erroruser, errorsubmit);

let localData = JSON.parse(localStorage.getItem("data"));

// form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     if (userName.value == "" && password.value == "") {
//         alert("user name required");
//         alert("passwoord is required");
//     }
//     else if (userName.value == "") {
//         alert("user name required");
//     }
//     else if (password.value == "") {
//         alert("password is required");
//     }
//     else if (userName.value == "Rushikesh" && password.value == "123456") {
//         alert("Boss Welcome to the page");
//     }
//     else {
//         alert("Bhaak Bhosdike")
//     }
// });

form.addEventListener("submit", (e) => {
    erroruser.innerHTML = "";
    errorpass.innerHTML = "";
    errorsubmit.innerHTML = "";

    let matching = localData.find((e) => {
        if (userName.value == e.email && password.value == e.pass) {
            return e;
        }
    })

    console.log(matching);
    // e.preventDefault();

    if (userName.value == "" && password.value == "") {
        erroruser.innerHTML = "Wrong username";
        errorpass.innerHTML = "Wrong password";
        e.preventDefault();
    }
    else if (userName.value == "") {
        erroruser.innerHTML = "Wrong username";
        e.preventDefault();
    }
    else if (password.value == "") {
        errorpass.innerHTML = "Wrong password";
        e.preventDefault();
    }
    else if (matching) {
        alert("Submitted");
        // ? it is used to get the login user named details
        localStorage.setItem("particularUser", JSON.stringify(matching))
    }
    else {
        errorsubmit.innerHTML = "password and username not matching";
        e.preventDefault();
    }
});