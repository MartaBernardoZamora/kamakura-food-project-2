feature: Imprimir platos

    Escenario: Platos impresos correctamente

        Given: Platos en menú
        When: El usuario accede a la página
        Then: Los platos aparecen en pantalla

feature: Imprimir botones de filtros

    Escenario: Filtros añadidos correctamente

        Given: Tipos de plato
        When: El usuario accede a la página
        Then: Los botones aparecen en pantalla

feature: Agregar funcionalidad a los filtros

    Escenario: Funcionalidad añadida correctamente

        Given: Categoria existentes
        When: El usuario hace click en los botones de filtros
        Then: Los platos se actualizan correctamente en pantalla
        And: Se muestran en pantalla los platos correspondientes


feature: Botón carrito desplegable

    Escenario: Funcionalidad añadida correctamente

        Given: Icono del carrito
        When: El usuario hace click en el icono
        Then: El menú de productos seleccionados se despliega
        And: Se muestran pantalla los elementos del carrito

feature: Añadir platos al carrito

    Escenario: Los platos se añaden correctamente

        Given: El plato elegido
        When: El usuario hace click en el botón Añadir
        Then: El plato se añade al carrito
        And: El plato se visualiza correctamente

    Escenario 2: El plato ya está incluido en el carrito 

        Given: El plato elegido
        When: El usuario vuelve a seleccionar el mismo productos
        Then: El plato no se añade al carrito
        And: Lanza mensaje de aviso

feature: Eliminar platos del carrito

    Escenario: El plato se elimina correctamente

        Given: Producto en el carrito
        When: El usuario presiona la "x" o la cantidad del producto llega a 0
        Then: El producto se elimina del carrito
        And: Lanzamos un mensaje de aviso

feature: Cambiar unidades de un plato en el carrito

    Escenario: Las cantidades se actualizan correctamente

        Given: Producto en el carrito
        When: El usuario hace click en los botones de + y -
        Then: La cantidad del producto se modifica acordemente



