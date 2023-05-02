Feature: Página de gestión de empleados en la web Orange HRM

    Feature empleados, donde se gestiona el alta, baja, modificación y listado de empleados.

    Background:
        Given un navegador web con un usuario logueado y ubicado en la pagina de listado de empleados

    Scenario: Busqueda exitosa de un empleado por su nombre
        When ingresa "enrique" en el campo Employee Name
        When hace click en el botón Search
        Then se muestra el empleado buscado

    Scenario Outline: Busqueda de empleados por su nombre
        When ingresa "<name>" en el campo Employee Name
        When hace click en el botón Search
        Then se muestra el empleado buscado
        Examples:
            | name    |
            | enrique |
