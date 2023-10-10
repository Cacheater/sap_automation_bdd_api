Feature: Ejemplo Api
    Feature de ejemplo de casos de prueba para APIS

  
  @Declarativo
  Scenario: Login exitoso con gherkin Declarativo
  Given que se envia una request de login auth con usuario y contraseña correctas
  Then el codigo de respuesta es 200

  @Declarativo
  Scenario: Login incorrecto con gherkin Declarativo
  Given que se envia una request de login auth con usuario correcto y contraseña incorrecta
  Then el codigo de respuesta es 400

  @Imperativo
  Scenario: Login exitoso con gherkin Imperativo
  Given la url http://localhost:9000/api/v1/auth/login
  * header Content-Type = application/json
  * body =
    """
    {
      "username": "admin@gmail.com",
      "password": "Test.123"
    }
    """
  When envio peticion POST
  Then el codigo de respuesta es 200
  And la respuesta contiene las keys id|username

  @Imperativo
  Scenario: Login fallido con password incorrecta
  Given la url http://localhost:9000/api/v1/auth/login
  * header Content-Type = application/json
  * body =
    """
    {
      "username": "admin@gmail.com",
      "password": "Test.1"
    }
    """
  When envio peticion POST
  Then el codigo de respuesta es 400
  And la respuesta contiene las keys timestamp|status|error|message|path

  @Imperativo
  Scenario: Login fallido por username inexistente
  Given la url http://localhost:9000/api/v1/auth/login
  * header Content-Type = application/json
  * body =
    """
    {
      "username": "mirakel@gmail.com",
      "password": "Test.123"
    }
    """
  When envio peticion POST
  Then el codigo de respuesta es 404
  And la respuesta contiene las keys timestamp|status|error|message|path

@Imperativo
  Scenario: Actuator health
  Given la url http://localhost:9000/api/v1/actuator/health
  When envio peticion GET
  Then el codigo de respuesta es 200
  And la respuesta contiene las keys status
