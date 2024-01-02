let grabElement = (id) => document.getElementById(id);

let newsLetter = grabElement('newsletter'), successMsg = grabElement('success-msg'), newsLetterForm = grabElement('news-letter-form'), errorMsgElement = grabElement('error-msg'), dismissBtn = grabElement('dismiss-btn');


let errorMsg = "Valid email required";




newsLetterForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    
    let email = document.getElementById('email');
    let atpos = email.value.indexOf('@');
    let dotpos = email.value.lastIndexOf('.');
    
   if (email.value.trim() == " " || atpos < 1 || (dotpos - atpos < 2)){
    errorMsgElement.innerText = errorMsg;
    errorMsgElement.style.color = 'hsl(4, 100%, 67%)';
    email.style.border = '2px solid hsl(4, 100%, 67%)';
    email.style.color = 'hsl(4, 100%, 67%)';
    email.style.backgroundColor = 'hsl(4, 100%, 95%)';
    return false;
   } 

   newsLetter.style.display = 'none';
   successMsg.style.display = 'block';
   let displayEmail = document.getElementById('email-display');
   displayEmail.innerText = email.value;
   displayEmail.style.fontWeight = 'bold';
})

dismissBtn.addEventListener('click', ()=>{
    newsLetter.style.display = 'flex';
    successMsg.style.display = 'none';

})