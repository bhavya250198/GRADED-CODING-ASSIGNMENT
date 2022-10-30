// array of objects
var arrayOfObjects = [
  {
    "username": "abc@xyz.com",
    "password": "abc@123",
  },
  {
    "username": "demo@xyz.com",
    "password": "demo@123",
  },
  {
    "username": "test@xyz.com",
    "password": "test@123",
  },
];
localStorage.setItem("credentials",JSON.stringify(arrayOfObjects))
var loginButton = document.getElementById("login-submit");
var loginForm = document.getElementById("login-form");
//   window.location = "./dashboard.html";
  var credentials = JSON.parse(localStorage.getItem('credentials'));

loginButton.addEventListener("click",(e)=>
{
    e.preventDefault();
    let username=loginForm.username.value;
    let password = loginForm.password.value;
    let index = credentials.findIndex(item=> item.username === username);
     if(index !== -1)
     {
        if(credentials[index].password === password)
        {
            console.log("success");
            window.location.href="dashboard.html"
        }
        else{
            console.log("wrong password")
        }
     }
     else{
        console.log("credentials does not exist")
     }
    
   
})
