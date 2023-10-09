const palindrome = (string) => {
    if(typeof string =='undefined') return

    return string
        .split('')
        .reverse()
        .join('')
}

const average = array => {
    let sum = 0;
    //añade esta linea
    if (array.length === 0) return 0;
    array.forEach(num => { sum += num});
    return sum / array.length;
}

module.exports = {
    palindrome,average
}