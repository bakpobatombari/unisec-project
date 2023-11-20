function validate(){
  let username = document.getElementById("user");
  let password =document.getElementById("password");

  if(username.value === "" || password.value === ""){
    alert("Please Fill in the Fields");
  }
  else if(username.value === "Batombari Bakpo" && password.value ==="batombari@2012"){
    location.replace("./homepage.html");
    alert("Welcome " + username.value)
  }
  else if(username.value === "Student" && password.value === "headlines"){
    location.replace("./membership");
  }
  else{
    alert("Invalid Username or password")
  }
}