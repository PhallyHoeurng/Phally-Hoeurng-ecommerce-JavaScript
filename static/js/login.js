function submitData() {
    let userName = document.querySelector("#username")
    let email = document.querySelector("#email")
  

    let getRadio = document.getElementsByName("genderSelect")
    let gender = "";

    for (item of getRadio){
      if (item.checked){
        console.log(item.checked)
        gender = item.value;
      }
    }

    let message = document.getElementById("sms");

    document.querySelector("#getUsername").textContent = userName.value;
    document.querySelector("#getEmail").textContent = email.value;
    document.querySelector("#getGender").textContent = gender;
    document.querySelector("#getMessage").textContent = message.value;
  }
 
  let applyButton = document.getElementById("applyButton");
  applyButton.addEventListener("click", submitData );
  window.alert(" Welcome ")