import mysql from "mysql"

const dados = mysql.createConnection({
    host : 'localhost',
    port: "3306",
    user :'root',
    password :'',
    database :'tabelas'
})
dados.connect(function(erro){
    if(erro) console.log(erro)
    else
        console.log(" query executada")
});
export default dados;

    



