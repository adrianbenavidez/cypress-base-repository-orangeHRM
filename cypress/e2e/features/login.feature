Feature: Página de Login en la web Orange HRM

    Feature Login page acceso al sistema de acuerdo a las credenciales.

    Background:
        Given Un navegador web en la pagina de login de OrangeHRM
     Scenario: Login Exitoso
         When Un usuario ingresa el usuario y el password
         When hace click en el boton Login
         Then accede a la pagina OrangeHRM como usuario autenticado
    Scenario Outline: Login con error en la autenticación
        When Un usuario ingresa el "<username>" y el "<password>"
        When hace click en el boton Login
        Then se muestra un mensaje "Invalid credentials"
        Examples:
            | username       | password       |
            | incorrectUser1 | incorrectPass1 |
            | incorrectUser2 | incorrectPass2 |
            | incorrectUser3 | incorrectPass3 |