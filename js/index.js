
addEventListener("DOMContentLoaded", () => {
    const btn_menu = document.querySelector(".btn_menu");

    if(btn_menu){
        btn_menu.addEventListener("click", () => {
            const menu_items = document.querySelector(".menu-items");
            menu_items.classList.toggle("show");
        });
    }
});


var counter = 1;

setInterval(function(){
    document.getElementById("radio" + counter).checked = true;
    counter++;
    if(counter > 4) {
        counter = 1;
    }
}, 5000);

//# Email Validation

const $form = document.querySelector('#form')
const $buttonMailto = document.querySelector('#trucazo')

$form.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
  event.preventDefault()
  const form = new FormData(this)
  $buttonMailto.setAttribute('href', `mailto:hola@mazabrand.com?subject=nombre ${form.get('name')}  correo ${form.get('email')}&body=${form.get('message')}`)
  $buttonMailto.click()
}


const $acordeon = document.querySelectorAll('.sub-titles');

for (let i = 0; i < $acordeon.length; i++) {
    $acordeon[i].addEventListener('click', function () {
        this.classList.toggle('active')
    })
}