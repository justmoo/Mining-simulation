// proof of work main concept 
const hash = require('hash.js'); 
let block = "mohammed aljasser"; 
let difficulty = 4; 
let nonce = 0; 
let numberOfGuesses = 0; 

for (let i = 0; i < 10_000_000; i++) {
    let magicHash = hash.sha256().update(block + nonce + Date.now()).digest('hex') 
    console.log(magicHash) 
    if (magicHash.substring(0, difficulty) == "".padStart(difficulty, "0")) { 
        console.log("magic hash : " + magicHash) 
        console.log(`we found the hash with ${numberOfGuesses} guesses`) 
        return
    }
    numberOfGuesses ++; 
    nonce ++;
}