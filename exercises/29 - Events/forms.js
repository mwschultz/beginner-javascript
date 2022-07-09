const myL = document.querySelector('.wes');

myL.addEventListener('click', (e) => {
  e.preventDefault();
  const shouldChange = confirm(
    'This page might be malicious. Do you want to continue?'
  );
  if (shouldChange) {
    window.location = e.currentTarget.href;
  } else {
    console.log(e);
  }
});

const sForm = document.querySelector('[name="signup"]');

sForm.addEventListener('submit', function(e){
    const name =e.currentTarget.name.value; 
    if(name.includes('chad')) {
        alert('Sorry, bro!');
        e.preventDefault();
    }
});

function logEvent(event) {
    console.log(event.type);
    console.log(event.currentTarget.value);
}
sForm.name.addEventListener('keyup', logEvent );
sForm.name.addEventListener('keydown', logEvent );
sForm.name.addEventListener('focus', logEvent );
sForm.name.addEventListener('blur', logEvent );
