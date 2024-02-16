const terms = document.querySelector('.terms-and-conditions');
const button = document.querySelector('.accept');


function obCallback(payload) {
  if (payload[0].intersectionRatio === 1) {
    button.disabled = false;
    this.unobserve(terms.lastElementChild);
  }
}

const ob = new IntersectionObserver(obCallback, { root: terms, threshold: 1 });


ob.observe(terms.lastElementChild);

function fibo(value = 10) {
  let first = 0;
  let second = 1;
  let sum = 0;

  for (let i = 0; i <= value; i++) {

    if (i === 0) {
      console.log(sum);
    }
    else if (i === 1) {
      console.log(second);
    }
    else {
      sum = first + second;
      first = second;
      second = sum;
      console.log(sum);
    }

  }
}