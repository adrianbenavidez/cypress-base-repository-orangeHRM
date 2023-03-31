Feature: Página de Login en la web Orange HRM

    Feature Login page acceso al sistema de acuerdo a las credenciales.

    Background:
        Given Un navegador web en la pagina de login de OrangeHRM
    Scenario: Login Exitoso
        When Un usuario ingresa el usuario y el password 
        When hace click en el boton Login
        Then accede a la pagina OrangeHRM como usuario autenticado