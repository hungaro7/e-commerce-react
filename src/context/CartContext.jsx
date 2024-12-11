import { createContext, useEffect } from "react";
import { useState } from "react";


export const CartContext = createContext();

// si no hay naca en el carrito lo inicializa vacio
const carritoInicial = JSON.parse(localStorage.getItem("carrito")) || [];


export const CartProvider = ( {children} ) => {


    const[carrito, setCarrito] = useState(carritoInicial);

    const agregarAlCarrito = (item, cantidad) => {
        const itemAgregado = {...item, cantidad };

        const nuevoCarrito = [...carrito];
        const estaEnElCarrito= nuevoCarrito.find((producto) => producto.id === itemAgregado.id );

        if(estaEnElCarrito) {
            estaEnElCarrito.cantidad += cantidad;
        } else {
            nuevoCarrito.push(itemAgregado);
        }
        setCarrito(nuevoCarrito);
    }

    // Funcion para el numero del carrito
    const cantidadEnCarrito = () => {
        return carrito.reduce((acc, prod) => acc + prod.cantidad, 0 );
    }

    // Funcion para sumar todos los productos el carrito
    const precioTotal = () => {
        return carrito.reduce((acc,prod) => acc + prod.precio * prod.cantidad, 0);
    }

    // Funcion para vaciar el carrito  
    const vaciarCarrito = () => {
        setCarrito([]);
    }

    useEffect(() => {
        localStorage.setItem("carrito", JSON.stringify(carrito))
    },[carrito])


    return (
        <CartContext.Provider value={{carrito, agregarAlCarrito, cantidadEnCarrito, precioTotal, vaciarCarrito}}>
            {children}
        </CartContext.Provider>
    )

}