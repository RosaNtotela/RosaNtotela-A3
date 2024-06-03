import mysql from "mysql"

const dados = mysql.createConnection({
    host : 'localhost',
    port: "3306",
    root :'root',
    password :'',
    database :'BD'
})
dados.connect(function(erro){
    if(erro) console.log(" Erro na BD")
    else
        console.log("Query Executada !")
});
export default dados;