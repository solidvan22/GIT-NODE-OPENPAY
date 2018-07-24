# GIT-NODE-OPENPAY
# Node OpenPay ejemplo

Este ejemplo ilustra una conexión al API de OpenPay desde nodeJs usando Express framework MVC
Permite Crear Clientes Openpay y listarlos
## Usage
Instalación

  1. Instalar dependencias: `npm install`
  2. Iniciar el servidor: `node server.js`


Puede realizarse vía API http://localhost:8080/api
  1. Autenticación 
    POST http://localhost:8080/api/auth
    
    BODY:
    {
      userName:"OtroUser",
      password: "xx223344"
     }
    RESPONSE:
    
    {
    	"success": true,
      	"message": "Enjoy your token",
	"token"  :""
    }

  2. LISTAR LOS CLIENTES CREADOS EN OPENPAY
    GET http://localhost:8080/api/openpayCustomers?token=<EL TOKEN RECIBIDO EN EL PASO 1>
    El token puede ser envuado tambien como header en la peticion 

  3. CREAR UN NUEVO CLIENTE EN OPENPAY
  
    POST http://localhost:8080/api/openpayCustomers?token=<EL TOKEN RECIBIDO EN EL PASO 1>
      BODY:
      
       {
          "name":"JULIAN RETANA FLORES",
          "email":"solidvan22@gmail.com",
          "last_name":"SADASD",
            "address":{
              "city":"Mexico DF",
              "state":"Distrito Federal",
              "line1":"Recreo 97",
              "line2":"",
              "postal_code":"03100",
              "country_code":"MX"
            },
          "phone_number":"5548106077"
    	}
    

Vía aplicacion web desde http://localhost:8080
  Login: Consultar el archivo app/models/user.js
