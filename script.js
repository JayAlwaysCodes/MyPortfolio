document.getElementsById('contactForm').style.display = ""
Econtact.addEventListener('click', ()=> {
    const form = document.getElementById('contactform');

    if (form.style.display==='none'){
        //this shows the form
        form.style.display = 'block';
    }else{
        //this hides the form
        form.style.display = 'none'
    }
})

