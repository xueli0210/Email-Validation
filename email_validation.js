function check() {

  var email1 = document.getElementById("firstEmail");
  var email2 = document.getElementById("secondEmail");
  var email3 = document.getElementById("thirdEmail");
  
  var check1 = (email1.value==email2.value);
  var check2 = (email1.value==email3.value);
  
  if(!check1){
    alert("Emails 1 and 2 are not matching"); 
    return false}
  else
    if(!check2 && email3.value != ""){
      alert("Emails 1 and 3 are not matching");
      return false
    }
}
