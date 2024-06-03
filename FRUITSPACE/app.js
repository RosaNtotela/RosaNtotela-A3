
import express from "express"
import bodyParser from "body-parser"
import dados from "./Base.js"
const app = express ()


app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res)=>{
   res.render("../views/index1")
});
app.get('/cadastro', (req, res)=>{
   res.render("cadastro")
});
app.post("/cadastrar",function(req,res){

   const nome = req.body.nome
   const email = req.body.email
   const senha = req.body.senha
   const sql = `insert into usuarios (nome,email ,senha) values('${nome}','${email}','${senha}')`
   dados.query(sql ,function (erro ,resultado){
      if(erro)
      console.log(erro)
   })
   res.render('index1')
})
 app.get('/deletarcadastro', (req, res)=>{
   res.render("deletarcadastro")
});
app.post("/deletarcadastro",function(req,res){
   const id = req.body.id
   const sql = `delete from usuarios where id='${id}'`
   dados.query(sql ,function (erro ,resultado){
      if(erro)
      console.log(erro)
         res.send("usuarios deletado com sucesso")
   res.render('index1');
   })
})
app.get('/atualizarcadastro', (req, res) => {
   res.render('atualizarcadastro')
 })
 app.post('/atualizarcadastro', (req, res) => {
   const email = req.body.email;
   const senha = req.body.senha;
   const nome = req.body.nome;
   const sql = `atualizarcadastro set email='${email}', password='${senha}`;
   dados.query(sql, (err, result) => {
     if (err) console.log(err);
     else {
       console.log(" sucesso na atualizaçao");
       res.render('index1');
     }
   });
 });
app.get('/logar', (req, res) => {
   res.render('logar')
 });
 app.post('/logar', (req, res) => {
   const nome = req.body.nome;
   const email = req.body.email
   const senha = req.body.senha;
   let sql = `select * from usuarios where nome ='${nome}', email ='${senha}' and senha='${senha}'`;
   dados.query(sql, (err, result) => {
    if (result.length > 0) {
      id = result[0].id;
      console.log("Usuario logado com sucesso")
      res.render('index1',{usuarios:result});
    } else {
      console.log("Não exite esse usuario porfavor se cadastre");
      res.render('cadastro');
    }
  });
  });

  app.get('/perfil', (req, res)=>{
   res.render("perfil")
});
app.post('/cadastrarperfil', (req, res) => {
   const alcunha = req.body.alcunha;
   const frutafavorita = req.body.frutafavorita;
   const sql = `insert into perfil(alcunha,frutafavorita) values ('${alcunha}','${frutafavorita}')`;
   dados.query(sql, (err, result) => {
     if (err) console.log(err);
     else {
       console.log(" cadastrado com sucesso");
       res.render('index1');
     }
   });
 });
 app.get('/actualizarcadastro',(req,res)=>{
   res.render('atualizarcadastro')
 })
 app.post('/actualizarcadastro', (req, res) => {
   const alcunha = req.body.alcunha;
   const frutafavorita = req.body.frutafavorita;
   const sql = `insert into perfil(alcunha,frutafavorita) values ('${alcunha}','${frutafavorita}')`;
   dados.query(sql, (err, result) => {
     if (err) console.log(err);
     else {
       console.log(" cadastrado com sucesso");
       res.render('index1');
     }
   });
 });

app.get('/atualizarperfil', (req, res) => {
   res.render('atualizarperfil')
 })
 app.post('/atualizarperfil', (req, res) => {
   const alcunha = req.body.alcunha;
   const frutafavorita = req.body.frutafavorita;
   const sql = `update perfil set alcunha ='${alcunha}', frutafavorita ='${frutafavorita}'`;
   dados.query(sql, (err, result) => {
     if (err) console.log(err);
     else {
       console.log(" perfil atualizado com sucesso");
     }
   });
     res.render('index1')
 });
 app.get('/deletarperfil', (req, res)=>{
   res.render("deletarperfil")
});
app.post("/deletarperfil",function(req,res){
   const alcunha = req.body.alcunha;
   const frutafavorita = req.body.frutafavorita;
   const sql = `delete from perfil where alcunha='${alcunha}' and frutafavorita='${frutafavorita}'`;
   dados.query(sql ,function (erro ,result){
      if(erro)
      console.log(erro)
   })
   res.render('index1');
})

 app.get('/curiosidades', (req, res)=>{
    res.render("curiosidades")
 });
 app.get('/vitaminas', (req, res)=>{
    res.render("vitaminas")
 });
 app.get('/alunos',(req,res)=>{
   res.render("alunos")
 });


app.listen (3001 , () =>{
   console.log('servidor rodando na  port 3001')
})
