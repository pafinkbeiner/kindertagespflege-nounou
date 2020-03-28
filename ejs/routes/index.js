var express = require('express');
var fs = require('fs');
var router = express.Router();

router.get('/tagesablauf', function(req, res, next) {
  res.render('tagesablauf',
  { 
      title: 'Kindertagespflege Nounou',
      description: 'Kindertagespflege Freudenstadt' 
  })
});

router.get('/bastelnundmalen', function(req, res, next) {
  res.render('bastelnundmalen',
  { 
      title: 'Kindertagespflege Nounou',
      description: 'Kindertagespflege Freudenstadt' 
  })
});

router.get('/eingewoehungsphase', function(req, res, next) {
  res.render('eingewoehungsphase',
  { 
      title: 'Kindertagespflege Nounou',
      description: 'Kindertagespflege Freudenstadt' 
  })
});

router.get('/konzeption', function(req, res, next) {
  res.render('konzeption',
  { 
      title: 'Kindertagespflege Nounou',
      description: 'Kindertagespflege Freudenstadt' 
  })
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', 
  { 
    title: 'Kindertagespflege Nounou',
    description: 'Kindertagespflege Freudenstadt' 
  });
});



router.get('/impressum', function(req, res, next) {
  res.render('impressum', 
  { 
    text: 'Eva Finkbeiner \n<br>'+

    'Alfredstraße 67\n<br>'+
    '72250 Freudenstadt\n<br>'+
    
    'Telefon: 123/123456\n<br>'+
    'Fax: 123/123457\n<br>'+
    
    'E-Mail: info@kindertagespflege-nounou.de\n<br>'+
    
    'Umsatzsteuer-Identifikationsnummer gem. § 27a UStG: DE 123456789\n<br>'+
    
    'Inhaltlich Verantwortlicher gem. § 55 II RStV: Paul Finkbeiner Co-Founder PM Software Factory',
    title: 'Kindertagespflege Nounou',
    description: 'Kindertagespflege Freudenstadt' 
  });
});

router.post('/contact', (req, res) => {

  const { name, email, message } = req.body;

  fs.appendFile('./logs/log.txt', 'Name: '+name+', Email: '+email+', Nachricht: '+message+'\n', function (err) {
    if (err) {
      console.log("-------------------------------------------");
      console.log("Saving incoming message failed"+err);
      console.log("-------------------------------------------");

      res.redirect('/');
    } else {
      console.log("-------------------------------------------");
      console.log("Saving incomming message successfull");
      console.log("-------------------------------------------");

      res.redirect('/');
    }
  })
});


module.exports = router;
