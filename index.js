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
          let notificationStyle= document.getElementsByClassName("notification")[0].style;
          notificationStyle.backgroundColor="red";
          notificationStyle.color="white";
          notificationStyle.width="200px";
          notificationStyle.position="absolute";
          notificationStyle.right="10px";
          notificationStyle.padding="15px";
          notificationStyle.display="block";
           document.getElementsByClassName("notification")[0].innerHTML="Wrong Passoword";
           setTimeout(function(){
            notificationStyle.display="none";
           },3000)

        }
     }
     else{
      let notificationStyle= document.getElementsByClassName("notification")[0].style;
      notificationStyle.backgroundColor="red";
      notificationStyle.color="white";
      notificationStyle.width="200px";
      notificationStyle.position="absolute";
      notificationStyle.right="10px";
      notificationStyle.padding="15px";
      notificationStyle.display="block";
       document.getElementsByClassName("notification")[0].innerHTML="Invalid Credentials";
       setTimeout(function(){
        notificationStyle.display="none";
       },3000)
     }
    
   
})
