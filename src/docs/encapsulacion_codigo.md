
# Por qué se ejecutan otras funciones al importar un archivo en JavaScript

El motivo por el cual al **importar una sola función** se ejecutan otras partes del código en el mismo archivo es que, en JavaScript, **todo el código** que está en el archivo se **ejecuta automáticamente** cuando ese archivo es importado.

---

## Por qué sucede esto

Cuando importas un archivo en JavaScript, el intérprete ejecuta **todo el código global** que está fuera de las funciones o exportaciones, independientemente de qué función importes. Esto incluye:

- **Código global** que no está dentro de una función.
- **Funciones que se llaman automáticamente** (IIFE o llamadas directas).
- **Manipulación del DOM**, si existe.

---

## Ejemplo del problema

Supón que tienes un archivo `events.js` como este:

```javascript
// Código global
console.log("Cargando events.js...");

// Función exportada
export function funcionA() {
    console.log("Ejecutando funcionA");
}

// Código fuera de funciones
document.querySelector("#someElement").innerHTML = "Hola";
```

Y luego intentas importar solo `funcionA`:

```javascript
import { funcionA } from "./src/events.js";

funcionA();
```

**Resultado en la consola:**
```javascript
Cargando events.js...
TypeError: Cannot set properties of null (setting 'innerHTML')
```

Aunque solo importas `funcionA`, **todo el código** en `events.js` se ejecuta porque el archivo completo se carga al importarlo.

---

## Solución: Aislar el código que se ejecuta automáticamente

Para evitar este problema, debes **encapsular** el código global o dependiente del DOM dentro de funciones o bloques de control.

---

### Ejemplo 1: Encapsular DOM dependiente

```javascript
// Código global aislado
export function setupDOM() {
    const element = document.querySelector("#someElement");
    if (element) {
        element.innerHTML = "Hola";
    }
}

// Función exportada
export function funcionA() {
    console.log("Ejecutando funcionA");
}
```

Ahora, solo se ejecutará el código si llamas explícitamente a `setupDOM`.

---

### Ejemplo 2: Bloques de comprobación

Si tienes código que depende del entorno (como DOM), puedes usar un chequeo para evitar que se ejecute en entornos de pruebas:

```javascript
if (typeof window !== "undefined") {
    // Código que solo se ejecuta en el navegador
    const element = document.querySelector("#someElement");
    if (element) {
        element.innerHTML = "Hola";
    }
}
```

---

### Ejemplo 3: Exportar funciones puras

Si solo necesitas exportar funciones sin ningún código global, asegúrate de que **no haya nada fuera de funciones** en tu archivo.

```javascript
export function funcionA() {
    console.log("Ejecutando funcionA");
}

export function funcionB() {
    console.log("Ejecutando funcionB");
}
```

---

## Resumen de las soluciones

1. **Encapsula** todo el código fuera de funciones en funciones específicas.
2. Usa comprobaciones como `if (typeof window !== "undefined")` para evitar que el código DOM se ejecute en entornos de pruebas.
3. Asegúrate de que tu archivo solo contenga **funciones puras** si no necesita interactuar con el DOM.

Con estos ajustes, al importar una función específica, solo se ejecutará la función que realmente necesites. 🚀

---

## Código no encapsulado: Ejemplo

```javascript
import { products } from "../data/data.js";
import { eventbuttonsgive } from "../events.js";

const cartInicialClean = () => {
    document.querySelector('#cart-products > .cart-container').remove();
};
cartInicialClean();
```

---

## Explicación del problema

Cuando importas este archivo en cualquier otro módulo, suceden dos cosas:

1. La línea:
    ```javascript
    cartInicialClean();
    ```
    **ejecuta inmediatamente** la función `cartInicialClean`.

2. Si no existe el elemento `#cart-products > .cart-container` en el DOM, se produce un error como:
    ```javascript
    TypeError: Cannot read properties of null (reading 'remove')
    ```

Como todo esto ocurre en **tiempo de carga**, no importa que estés importando una sola función desde este archivo. El archivo completo se ejecuta, incluyendo la llamada directa a `cartInicialClean()`.

---

## Solución: Encapsular el código

### **1. Encapsular dentro de una función**

Modifica el archivo para que `cartInicialClean` no se ejecute automáticamente:

```javascript
import { products } from "../data/data.js";
import { eventbuttonsgive } from "../events.js";

const cartInicialClean = () => {
    const cartContainer = document.querySelector('#cart-products > .cart-container');
    if (cartContainer) {
        cartContainer.remove();
    }
};

// Exporta la función, pero no la llames directamente
export { cartInicialClean };
```

---

### **2. Llamar a la función donde realmente sea necesaria**

En el archivo donde necesites `cartInicialClean`, importa y llama explícitamente a la función:

```javascript
import { cartInicialClean } from "./path/to/cart-file.js";

cartInicialClean(); // Llamada explícita
```

---

### **3. Uso de comprobaciones condicionales**

Si necesitas que el código se ejecute automáticamente solo en un entorno específico, puedes agregar una comprobación que asegure que el DOM esté listo:

```javascript
import { products } from "../data/data.js";
import { eventbuttonsgive } from "../events.js";

const cartInicialClean = () => {
    const cartContainer = document.querySelector('#cart-products > .cart-container');
    if (cartContainer) {
        cartContainer.remove();
    }
};

if (typeof window !== "undefined" && document.readyState !== "loading") {
    cartInicialClean();
}
```

**Explicación**:
- `typeof window !== "undefined"`: Verifica que el entorno sea un navegador.
- `document.readyState !== "loading"`: Asegura que el DOM esté listo.

---

## Resumen

1. El código actual **no está encapsulado** porque ejecuta `cartInicialClean()` directamente.
2. **Encapsula** la función y exporta solo su definición.
3. **Llama a la función explícitamente** en los archivos donde sea necesaria.
4. Opcional: Usa comprobaciones como `typeof window` si necesitas control adicional.

Si aplicas estos cambios, el archivo será seguro para importar sin riesgo de ejecuciones automáticas o errores. 🚀
