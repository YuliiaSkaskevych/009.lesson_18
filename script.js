let num = +prompt('Enter your number:');
let degree = +prompt('Enter degree of your number:');
let pow = (num, degree) => {
    if (degree < 0) {
        return alert(`You can't enter ${degree}! Use only natural numbers`);
    }
    if (degree === 1) {
        return num;
    }
    if (degree === 0) {
        return 1;
    }
    return num * pow(num, degree - 1);

}
alert(pow(num, degree));