function validate(){
  let username = document.getElementById("user").value;
  let password =document.getElementById("password").value;

  if(username === "" || password === ""){
    alert("Please Fill in the Fields");
  }
  else if(username === "Batombari Bakpo" && password ==="batombari2012"){
    location.replace("./homepage.html");
    alert("Welcome " + username.value)
  }
  else if(username === "Student" && password === "headlines"){
    location.replace("./homepage.html");
  }
  else{
    alert("Invalid Username or password")
  }
}