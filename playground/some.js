const str = 'Rabble';
const chars = str.split('');

let re = '';
for (let i = chars.length - 1; i >= 0; i -= 1) {
    re = re.concat(chars[i]);
}
console.log(re);
console.log('Rabble');

const age = 100;