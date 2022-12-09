//Toggle password
const passwordInput = document.querySelector("#id_password")
const eye = document.querySelector("#eye")
eye.addEventListener('click', function (e) {
    // Toggle the type attribute
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password'
    passwordInput.setAttribute('type', type)
    // Toggle the eye slash icon
    this.classList.toggle('fa-eye-slash')
});

//Canvas Initialization
const world = new World({
    element: document.querySelector(".character-container")
})
world.c.imageSmoothingEnabled = false;
world.LoginInit()

//Animation State
function triggerAnimation(){
    world.isEmailed = true
}