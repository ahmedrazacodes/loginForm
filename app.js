function submitbtn() {
    let data = JSON.parse(localStorage.getItem("get")) || []; 
    let getEmail = document.querySelector(".inputEmail").value; 
    let getPassword = document.querySelector(".password").value;

    let emailExists = data.some(user => user.email === getEmail);

    if (!emailExists) { 
        if (getEmail && getPassword) { 
           
            data.push({ email: getEmail, password: getPassword }); 
            localStorage.setItem("get", JSON.stringify(data));
    
            alert("Registered Successfully");
            window.location.href = "index.html"; 
        } else {
            alert("Input is empty");
        }
    } else{
        alert("E-MAIL address already  exists")
    }
}


function login() {
    let logdata = JSON.parse(localStorage.getItem("get")) || []; 
    let userEmail = document.querySelector(".userEmail").value; 
    let userPassword = document.querySelector(".userPassword").value;

    if (userEmail && userPassword) { 
        
        let found = logdata.some(user => user.email === userEmail && user.password === userPassword);

        if (found) {
            alert("Login Successfully");
            window.location.href = "index3.html"; 
            
        } else {
            alert("Login Failed");
        }
    } else {
        alert("Input field is empty");
    }
}