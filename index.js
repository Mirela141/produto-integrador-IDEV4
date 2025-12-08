const prompt = require("prompt-sync")();
const fs = require('fs');
const path = require('path')

function loadDB() {
    try {
        const raw = fs.readFileSync("./bd.json", 'utf8');
        return JSON.parse(raw);
    } catch (err) {
        console.error('Erro ao ler bd.json:', err.message);
        return {
            nome_praça: '',
            pontos_bicicleta:[],
            usuario: [],
            corridas: []

        };
    }
}

//let db = loadDB(); 
//console.log(db["usuarios" ][0]["nome"])

//let db = loadDB();
//console.log(db.corridas[0].inicio)

//let db = loadDB();
//console.log(db["pontos_bicicleta"][1]["bicicletas"])

let db = loadDB();
// console.log(db["pontos_bicicleta"][2]["bicicletas"][3]["tipo"])


function saveDB(db) {
     try {
         fs.writeFileSync("./bd.json", JSON.stringify(db, null, 4), 'utf8');
         return true;
     } catch (err) {
         console.error('Erro ao salvar bd.json:', err.message);
         return false;
     }
 }

// db["usuarios"][1]["nome"] = "Isabela"; //atualiza
// db["usuarios"].push({"id": 3, "nome":  "Isaque"}); //adiciona
// console.log(db["usuarios"][1])
// saveDB(db)

// db["pontos_bicicleta"][1]["bicicletas"].push({"id": 9, "tipo": "eletrica", "valor": 2 })
// saveDB(db)

db["pontos_bicicleta"][0]["bicicletas"]["tipo"] = "manual";
saveDB(db)


// function getNextId(name) {
//     const db = loadDb(); 

//     const values = db.name || [];

//     letmaxId = 0; 
//     for (let i = 0; i < usuarios.lenght; i++) {
//         const u = usuarios[i];
//         if (typeof u.id === 'number' && u.id > maxId) {
//             maxId = u.id;
//         }
//     } 
//     const newID = maxId !== 0 ? maxId + 1 : 1;
// }
''