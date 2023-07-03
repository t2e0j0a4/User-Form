let inputLabels = Array.from(document.querySelectorAll(".inputLabel"));
let inputs = Array.from(document.querySelectorAll('.textInput'));
let togglePassword = document.querySelector('.togglePassword');
let togglePasswordIcon = document.querySelector('.togglePassword ion-icon');

// On Page Load Focuses on 1st Input Element

window.addEventListener('load', function() {
    inputs[0].focus();
})

// Login for Label Animation for Inputs

inputs.forEach((input) => {

    input.addEventListener('focus', function() {
        inputLabels.forEach((label) => {
            if (this.dataset.token === label.dataset.token) {
                label.classList.add('active');
            }
        });
    });

    input.addEventListener("blur", function () {
        inputLabels.forEach((label) => {
            if (this.dataset.token === label.dataset.token) {
                if (!this.value) {
                    label.classList.remove("active");
                }
            }
        });
    });

})

// Toggling Show/Hide Password.

togglePassword.addEventListener('click', function() {

    let token = this.dataset.token;
    
    if (togglePasswordIcon.name === 'eye-outline') {
        togglePasswordIcon.name = 'eye-off-outline'
        inputs.forEach((input) => {
            if (input.dataset.token === token) {
                input.type = 'text';
            }
        })
    }
    else {
        togglePasswordIcon.name = 'eye-outline';
        inputs.forEach((input) => {
            if (input.dataset.token === token) {
                input.type = 'password';
            }
        })
    }

})

// Form Submitting 

function loginFormSubmit(e) {
    e.preventDefault();
    
    // Checking if all inputs are given properly. Just logging them.

    inputs.forEach((input) => {
        if (input.value) {
            console.log(`${input.name} : ${input.value}`);
        }
    })

    // Above is just a sample, just edit and do waht you like.
}