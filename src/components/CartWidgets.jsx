import React, { useContext } from 'react'
import {Link} from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const CartWidgets = () => {

    const {cantidadEnCarrito } = useContext(CartContext);

    return (
        <div>
            <Link className="menu-link" to="/carrito"> 
                Carrito 
                <span class="numerito" > {cantidadEnCarrito()} </span>
            </Link>
        </div>
    )
}

export default CartWidgets