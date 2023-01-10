
//validaiton of name 
 let nameT = function validateName() {
    let nameError = document.getElementById('name-error')
    let kname= document.getElementById('cname')
    let  someValue = kname.value
    if(someValue == ""){
        nameError.innerHTML = 'Enter something'
        return false
        
    } else if (someValue.length < 4) {

        nameError.innerHTML = "Enter atleast 4 characters"
        return false
        
    } 
    else {
        nameError.innerHTML = ''
        return true
        
    }
      
     
}

// validation of mail
let mailT = function validateEmail() {
    let emailWarning = document.getElementById("mail-error")
    let email = document.getElementById("cemail")
    let emailValue = email.value
    let check = /^([0-9A-Za-z\.\_]+)@([a-zA-Z]+).([a-zA-Z]+)$/
    if(emailValue==''){
        emailWarning.innerHTML='Enter your email'
        return false
        
    }
    if(!email.value.match(check)) {
      emailWarning.innerHTML = "Email is not in correct format!"
      return false
      
    } else {
      emailWarning.innerHTML = ""
      return true
      
    }   
  }
    
//validation of message
let messageT = function validateMessage(){
    let messageError = document.getElementById('message-error')
    let Fmessage = document.getElementById('cmessage')
    let messageValue= Fmessage.value
    if(messageValue ==''){
        messageError.innerHTML='Enter a message'
        return false
    }else if(messageValue.length < 10){
        messageError.innerHTML='Enter atleast 10 characters'
        return false
    }else{
        messageError.innerHTML=''
        return true
    }
}
// const scriptURL = 'https://script.google.com/macros/s/AKfycbwRIIo4erZhYqAxSZwVKnwxAfdnkMy2t2Ix_A9g8qS4tJRJ4E-DcJKCSiPDhuylPVcqbA/exec'
// const form = document.forms['submit-to-google-sheet']
// const msg =document.getElementById("submit-succes")
// form.addEventListener('submit', e => {
//   e.preventDefault()
//   fetch(scriptURL, { method: 'POST', body: new FormData(form)})
//     .then(response => {
//        msg.innerHTML="Message sent successfully"
//        setTimeout(function(){
//         msg.innerHTML=""
//        },5000)
//        form.reset()
//     })
//     .catch(error => console.error('Error!', error.message))
// })

// validation of form submition


let form = document.getElementById('Form')
 form.addEventListener("submit", function validateForm(event){
    event.preventDefault()
    let success=document.getElementById('success')
    if(messageT()==false|| nameT()==false|| mailT()==false){
        success.innerHTML='please fix the error'
        success.style.color = 'red'
    }
    else if(messageT()==true|| nameT()==true|| mailT()==true){
        success.innerHTML='Submit Success'
        success.style.color = "green" 
    }
 });