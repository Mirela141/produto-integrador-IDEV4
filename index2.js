const prompt = require("prompt-sync")();
const fs = require('fs');
const path = require('path')

function loadDB() {
    try {
        const raw = fs.readFileSync("./db2.json", 'utf8');
        return JSON.parse(raw);
    } catch (err) {
        return {grupos:[]}
        };
}
let db = loadDB(); 
console.log(db)


function saveDB(db) {
    try {
        fs.writeFileSync("./db2.json", JSON.stringify(db, null, 4), 'utf8');
        return true;
    } catch (err) {
        console.error('Erro ao salvar db2.json:', err.message);
        return false;
    }
}
db["grupos"][0]["nome_integrantes"][2] = "Prof Karime";
saveDB(db)
console.log(db)