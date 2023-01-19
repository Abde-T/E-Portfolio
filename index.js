
let contrastToggle = false;
function toggleContrast(){
    contrastToggle = !contrastToggle;
    if(contrastToggle){
        document.body.classList += " dark-theme";

    }
    else{
        document.body.classList.remove("dark-theme")
    }
}

function  contact(event){
    event.preventDefault();
    const success = document.querySelector('.modal__overlay--success');
    const loading = document.querySelector('.modal__overlay--loading');
    loading.classList += " modal__overlay--visible"
    
    emailjs
           .sendForm(
                'service_y0ht9qx',
                'template_s3chdi9',
                event.target,
                '3ThcibD0QCcn_eL_t'
           ).then(() => {
            loading.classList.remove("modal__overlay--visible");
            success.classList += " modal__overlay--visible";
        }).catch(() => {
            loading.classList.remove("modal__overlay--visible");
            alert( "The email service is temporarily unavalible. Please contact me diractly on email@gmail.com" 
            );
        })
}
let isModalOpen = false;
function toggleModal(){
    if(isModalOpen){
        isModalOpen = false;
        return document.body.classList.remove("modal--open")
    }
    isModalOpen = true;
    document.body.classList += " modal--open";
}



const scalFactor = 1/20;
function moveBackground(event){
    const shapes = document.querySelectorAll(".shape");
    const x = event.clientX * scalFactor;
    const y = event.clientY * scalFactor;

    for(let i = 0; i< shapes.length; ++i){
        const isOdd = i % 2 !==0;
        const boolInt = isOdd? -1:1;
        shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`
    }

}
