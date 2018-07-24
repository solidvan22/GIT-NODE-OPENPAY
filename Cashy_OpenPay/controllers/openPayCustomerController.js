//no se utliza modelo para este controlador 
var Openpay = require('openpay');
var openpay = new Openpay('m9pbx72sa3nfjrhrfjnv', 'sk_9aeea80685494aa2ae2922f0b6c9f226');
exports.openPayCustomer_list=function(req,res){

    openpay.customers.list(function(error,list){
        console.log(list.length);
        res.send(list)
    })  
}
exports.openpayCustomer_create_post=function(req,res){
    var newCustomer = req.body

    openpay.customers.create(newCustomer, function(error, body) {
      //error;    // null if no error occurred (status code != 200||201||204)
      if(error){
            res.send(error);
      }else{
            res.send(body);
      }
    });
}

