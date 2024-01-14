console.log('It works');

const wes = document.querySelector('.wes');

wes.addEventListener('click', (event) => {

  const shouldChangePage = confirm('This page may be malicious. Do you wish to proceed?');

  if (!shouldChangePage) {
    event.preventDefault();
  }

})

const signUpForm = document.querySelector('[name="signup"]');

signUpForm.addEventListener('submit', (event) => {

  // console.log(event.currentTarget.name.value);
  // console.log(event.currentTarget.email.value);
  // console.log(event.currentTarget.agree.checked);

  const name = event.currentTarget.name.value;

  if (name.toLowerCase().includes('chad')) {
    alert('Sorry, bro');
    event.preventDefault();
  }

});

console.log(signUpForm.name);

function logEvent(event) {
  console.log(event.type);
  console.log(event.currentTarget.value);
}

signUpForm.name.addEventListener('keyup', logEvent);

signUpForm.name.addEventListener('keydown', logEvent);
signUpForm.name.addEventListener('focus', logEvent);
signUpForm.name.addEventListener('blur', logEvent);