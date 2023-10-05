let inputLabels = Array.from(document.querySelectorAll(".inputLabel"));
let inputs = Array.from(document.querySelectorAll('.textInput'));

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


// Form Submitting 

function loginFormSubmit(e) {
    e.preventDefault();
    
    // Checking if all inputs are given properly. Just logging them.

    inputs.forEach((input) => {
        if (input.value) {
            console.log(`${input.name} : ${input.value}`);
        }
    })

    window.location.href = "/home.html";

    // Above is just a sample, just edit and do waht you like.
}