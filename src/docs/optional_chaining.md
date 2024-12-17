
# Optional Chaining (?.) en JavaScript

**Optional chaining** (`?.`) en JavaScript es una característica introducida en **ES2020** que permite **acceder a propiedades anidadas de un objeto o a métodos** sin que se produzca un error si una propiedad intermedia es `null` o `undefined`.

Es especialmente útil para trabajar con **datos opcionales** o estructuras complejas donde no puedes garantizar que todos los niveles existan.

---

## Cómo funciona el optional chaining (`?.`)

El operador `?.` verifica automáticamente si el valor de la izquierda es **`null`** o **`undefined`** antes de intentar acceder a una propiedad, método o índice.

### **Sintaxis básica**

```javascript
obj?.prop       // Accede a 'prop' si 'obj' no es null o undefined
obj?.[expr]     // Accede a una propiedad con clave dinámica si 'obj' existe
obj?.method()   // Llama a 'method' si 'obj' no es null o undefined
```

Si el valor es `null` o `undefined`, devuelve **`undefined`** sin lanzar un error.

---

## Ejemplos prácticos

### **1. Acceso a propiedades opcionales**

Supón que tienes un objeto `user` y quieres acceder a una propiedad anidada:

```javascript
const user = {
    name: "Pepe",
    address: {
        city: "Madrid",
    }
};

console.log(user.address?.city);      // "Madrid" (existe)
console.log(user.address?.street);    // undefined (no existe)
console.log(user.location?.country);  // undefined (location es undefined)
```

**Sin optional chaining**, intentar `user.location.country` habría generado un error:

```javascript
TypeError: Cannot read property 'country' of undefined
```

---

### **2. Llamada a métodos opcionales**

Puedes usar `?.` para llamar **métodos opcionales**. Si el método no existe, no se lanza un error.

```javascript
const obj = {
    sayHello: () => console.log("Hello!"),
};

obj.sayHello?.();   // "Hello!" (método existe)
obj.sayGoodbye?.(); // No hace nada (método no existe)
```

---

### **3. Acceso a propiedades con índice dinámico**

Puedes usar `?.` con corchetes `[]` para acceder a propiedades cuya clave es dinámica:

```javascript
const user = {
    name: "Ana",
};

const key = "age";

console.log(user?.[key]); // undefined (no existe la propiedad 'age')
```

---

### **4. Combinación con nullish coalescing (`??`)**

Puedes usar optional chaining junto con **nullish coalescing (`??`)** para proporcionar un valor por defecto si el resultado es `undefined` o `null`:

```javascript
const user = {
    name: "John",
};

console.log(user.address?.city ?? "Ciudad no disponible");
// "Ciudad no disponible" porque 'address' no existe
```

---

## Cómo funciona en tu caso

Si usas `?.` en la siguiente línea:

```javascript
document.querySelector('#cart-products > .cart-container')?.remove();
```

- `document.querySelector(...)` devuelve `null` si no encuentra el elemento.
- **`?.`** se encarga de verificar si el valor es `null` o `undefined`.
- Si no lo es, llama al método `.remove()`; de lo contrario, **no hace nada**.

### **Equivalente con `if`**

```javascript
const cartContainer = document.querySelector('#cart-products > .cart-container');
if (cartContainer) {
    cartContainer.remove();
}
```

---

## Ventajas del optional chaining

1. **Evita errores**: No lanza `TypeError` si una propiedad intermedia es `null` o `undefined`.
2. **Código más limpio**: No necesitas múltiples comprobaciones `if`.
3. **Combina bien con `??`** para valores por defecto.

---

## Limitaciones

- Solo funciona con `null` o `undefined`. Si la propiedad tiene un valor **falsy** como `0` o `""`, **no se detiene**.
- Es una característica **moderna** (ES2020), por lo que puede no estar disponible en navegadores muy antiguos.

---

## Resumen

- `?.` **detiene la ejecución** y devuelve `undefined` si la propiedad o el método es `null` o `undefined`.
- Es **útil** para trabajar con estructuras anidadas y datos opcionales.
- Evita errores y hace que el código sea más **limpio y seguro**.

¿Te ha quedado claro? Si quieres más ejemplos o necesitas ver otros usos prácticos, ¡dímelo! 😊🚀
