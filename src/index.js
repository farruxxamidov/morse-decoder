const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    
    //split to words
    let numArr = expr.split('**********');

    //split to letters
    for (let i=0; i<numArr.length; i++) {
        numArr[i]=numArr[i].match(/.{1,10}/g);
    }

    const regex10 = /10/g;
    const regex11 = /11/g;
    const regex0 = /0/g;
    
    for (let i=0; i<numArr.length; i++) {
        for (j=0; j<numArr[i].length; j++) {
            numArr[i][j] = numArr[i][j].replace(regex10, '.');
            numArr[i][j] = numArr[i][j].replace(regex11, '-');
            numArr[i][j] = numArr[i][j].replace(regex0, '');
        }
    }

    for (let i=0; i<numArr.length; i++) {
        for (j=0; j<numArr[i].length; j++) {
            numArr[i][j] = MORSE_TABLE[numArr[i][j]];
        }
    }

    for (let i=0; i<numArr.length; i++) {
        numArr[i] = numArr[i].join('');
    }
    //console.log(numArr.join(' '));
    return numArr.join(' ');    
}

module.exports = {
    decode
}