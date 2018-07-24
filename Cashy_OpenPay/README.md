# Node OpenPay ejemplo

Este ejemplo ilustra una conexión al API de OpenPay desde nodeJs usando Express framework MVC
Permite Crear Clientes Openpay y listarlos
## Usage

1. Clone the repo: `git clone git@github.com:scotch-io/node-token-authentication`
2. Install dependencies: `npm install`


Puede operarse vía API http://localhost:8080/api

  1. Autenticación 
    POST http://localhost:8080/api/auth
    BODY:
    {
      userName:"OtroUser",
      password: "xx223344"
	  }
    RESPONSE:{
      "success": true,
      "message": "Enjoy your token!",
      "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhZG1pbiI6IlJhZmEiLCJpYXQiOjE1MzIzNzE5NTMsImV4cCI6MTUzMjQ1ODM1M30.qf05Fo1FqijyQNbPT86-ZTYAdH-4XIrbqe2TuxndcMA"
    }

  2. LISTAR LOS CLIENTES CREADOS EN OPENPAY
    GET http://localhost:8080/api/openpayCustomers?token=<EL TOKEN RECIBIDO EN EL PASO 1>
    El token puede ser envuado tambien como header en la peticion 

  3. CREAR UN NUEVO CLIENTE EN OPENPAY
    POST http://localhost:8080/api/openpayCustomers?token
      BODY:{
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
      RESPONSE:{
        "id": "aym3qbog5ohodvkejznx",
        "name": "JULIAN RETANA FLORES",
        "last_name": "SADASD",
        "email": "solidvan22@gmail.com",
        "phone_number": "5548106077",
        "status": "active",
        "balance": 0,
        "address": {
            "line1": "Recreo 97",
            "line2": "",
            "line3": null,
            "state": "Distrito Federal",
            "city": "Mexico DF",
            "postal_code": "03100",
            "country_code": "MX"
        },
        "creation_date": "2018-07-23T21:10:47-05:00",
        "external_id": null,
        "clabe": null
        }

Vía aplicacion web desde http://localhost:8080
  Login: Consultar el archivo app/models/user.js