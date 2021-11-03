const {hash} = window.location
const msg=atob(hash.replace('#',''))
if(msg){
    document.querySelector('#msg-form').classList.add('hide')
    document.querySelector('#msg-show').classList.remove('hide')
    document.querySelector('h1').innerHTML = msg

}


document.querySelector('form').addEventListener('submit',event=>{
    event.preventDefault()
    document.querySelector('#msg-form').classList.add('hide')
    document.querySelector('#link-form').classList.remove('hide')
    const msgInput = document.querySelector('#msg-input')
    const encrypted = btoa(msgInput.value)
    const linkInput=document.querySelector('#link-input')
    linkInput.value = `${window.location}#${encrypted}` 
    linkInput.select()
    
})