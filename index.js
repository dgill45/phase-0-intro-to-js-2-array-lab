// Write your solution here!
const cats = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendCat(){

    cats.push('Ralph');

}

function destructivelyPrependCat(){

    cats.unshift('Bob');

}

function destructivelyRemoveLastCat(){
    
    cats.pop();

}

function destructivelyRemoveFirstCat(){
    cats.shift();
}

const copyOfCats = [...cats,'Broom'];

function appendCat(){

    return copyOfCats;
}

const copyOfCats2 = ['Arnold', ...cats];

function prependCat(){
    return copyOfCats2;
}

const copyOfCats3 = cats.slice(0,2);

function removeLastCat(){
    console.log(copyOfCats3);
    console.log(cats);
    return copyOfCats3;
}

const copyOfCats4 = cats.slice(1);

function removeFirstCat(){
    console.log(copyOfCats4);
    console.log(cats);
    return copyOfCats4;
}