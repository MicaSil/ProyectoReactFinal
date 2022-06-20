import { useContext } from 'react'
import { Link } from 'react-router-dom'
import CartContext from '../../Context/CartContext'

const CartWidget = () => {

    const {totalCantidad} = useContext(CartContext)

    const cantidad = totalCantidad()
    return (
        <Link to="/cart">
        <button className="button">
            <img src='../imagenes/carrito.svg' alt='cart-widget'/> 
            {cantidad}
        </button>
        </Link>
    )
}

export default CartWidget