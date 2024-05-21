import mysql from "mysql2"

export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "7931",
    database: "greenfield"
})

db.connect((err) =>{
    if(err){
        console.log("deu ruim meu chapa: " + err);
    }else{
        console.log("tudo lindo com o DB!")
    }
})
