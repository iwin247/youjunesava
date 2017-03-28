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
 
 .post('/bukddak', (req,res)=>{
 	if(req.body.sex == "esex" || req.body.sex == "김주용병신"){
		res.send("http://pangbae.kr/김주용병신.html")
	}
	else{
	
		let rd = Math.floor(Math.random()*4);
		if(rd == 0){
			res.send("https://ilbe.com");
		}
		else if(rd == 1){
			res.send("http://cafe430.daum.net/_c21_/home?grpid=nqKg")
		}
		else if(rd == 2){
			res.send("http://avcast.org");
		}
		else if(rd == 3){
			res.send("https://www.facebook.com/profile.php?id=100009153885992");
		}
		
		else{
			res.send("http://megalian.com/");
		}
	}	
 })
 
  return router;
}
