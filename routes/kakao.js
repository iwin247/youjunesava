module.exports = (router, Applys) =>{
  router.get('/', (req, res)=>{
   res.render('index');
  })


  .post('/', (req, res)=>{
    if(req.body.pass == "h0t$ix"){
      Applys.find({}, (err, applys)=>{
        if(err) res.status(500).send("DB ERR");
        if(applys) res.status(200).json(applys);
      });
    }  
  })
 
  return router;
}
