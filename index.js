// Code your solutions in this file


function writeCards(names, messages){
    let myArr = [];
    for (let i = 0; i < names.length; i++) {
    let greetings = (`Thank you, ${names[i]}, for the wonderful ${messages} gift!`);
     myArr.push(greetings);
    }
    return myArr;
    
}

function countDown(integer){
    while (integer >= 0) {
        console.log(integer--);
    }
}

