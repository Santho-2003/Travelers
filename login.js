const username=document.getElementById('name');
const password=document.getElementById('password');
const form=document.getElementById('form');
const err=document.getElementById('err');

form.addEventListener('submit',(e)=>{
    let messages=[]
    if(username.value!='avcce'){
     messages.push("Incorrect username")
    }
    if(password.value!='5454'){
     messages.push("password")
    }
    if(messages.length >0){
    e.preventDefault()
    err.innerText=messages.join(' or ')

    }
})