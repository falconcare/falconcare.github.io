function schedule(){
  console.log("hi");
  var firstnameraw = document.getElementById("firstname");
  var lastnameraw = document.getElementById("lastname");
  var emailraw = document.getElementById("email");
  var ageraw = document.getElementById("age");
  var genderraw = document.getElementById("gender");
  var callraw = document.getElementById("call");
  var dateraw = document.getElementById("date");
  var typeraw = document.getElementById("type");

  firstname = firstnameraw.value;
  lastname = lastnameraw.value;
  email = emailraw.value;
  age = ageraw.value;
  gender = genderraw.value;
  call = callraw.value;
  date = dateraw.value;
  type = typeraw.value;

  response = firstname + " " + lastname + "'s" + " appointment for " + date + " has been confirmed"
  doctor = "You will be on a " + call + " call with one of our " + type + " Medicine Doctors"
  email = "We will send an email to " + email + " within 48 hours to confirm your appointment"
  console.log(response, doctor, email);

  sessionStorage.setItem("response", response);
  sessionStorage.setItem("doctor", doctor);
  sessionStorage.setItem("email", email);
  window.location = "schedule.html";
}
 



  

  
  
