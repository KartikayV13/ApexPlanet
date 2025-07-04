const form = document.querySelector('.form');
const errormsg = document.querySelector('#error');


form.addEventListener('submit', function(e) {
   e.preventDefault(); //prevent default form submission
   const name = document.getElementById("name").value.trim();
   const email = document.getElementById("email").value.trim();
   const number = document.getElementById("number").value.trim();


   const phonePattern = /^[6-9]\d{9}$/;
   const emailPattern = /^[^]+@[^]+\.[a-z]{2,3}$/;

   if(!name || !number || !email){
    errormsg.textContent = "All field are required."
   } else if (!email.match(emailPattern)){
    errormsg.textContent = "Enter a valid mail address."
   } else if (!number.match(phonePattern)){
    errormsg.textContent = "Enter a valid 10-digit number."
   } else {
     errormsg.textContent = ""
     alert("Form submitted successfully")
     form.reset();
   }
})