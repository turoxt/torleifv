const form = document.getElementById('form');
const email = document.getElementById('email');
const btn = document.getElementById('btn');

// Check if email is valid
function checkEmail(input) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value.trim())) {
      showSuccess(input);
    } else {
      showError(input);
    }
}

// Show error outline
function showError(input) {
  const formCtr = input;
  formCtr.className = 'form-control error';
}

// Show success outline
function showSuccess() {
  location.href = 'video.html';
}

// Event listeners
form.addEventListener('click', function(e) {
  e.preventDefault();

  checkEmail(email);
})

