import { useContext } from "react";
import CartContext from "../../Context/CartContext";
import './Cart.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";







const Cart = () => {

    const {cart, borrarTodo, precioTotal, totalCantidad} = useContext(CartContext) 

    
    const ordenCompras = () => {
        console.log('ordenCompras');
    }
    
    if(totalCantidad() === 0) {
        return (
            <div className="carritoVacio">
                <img src='../imagenes/carrito.svg' alt='' className="cartVacio" />
                <h2 className="textoVacio">¡TU CARRITO ESTÁ VACÍO!</h2>
                <p className="parrafoVacio">¿Aún no te has decidido?. Tenemos productos que te encantarán, revisa el menú de arriba o ve a la página de la tienda para comprobarlo.</p>
                <Link to='/'><button className="buttonVacio">VOLVER A LA TIENDA</button></Link>
            </div>
        )
    }


    return (     
        <div className="detalleCompra">
            <h1 className="carritoTitle">Carrito de compras</h1>
            { cart.map(p => <CartItem key={p.id} {...p}/>) }
            <h3 className="totalFinal">Total: ${precioTotal()}</h3>
            <button onClick={() => borrarTodo()} className="buttonLimpiar">Limpiar carrito</button>
            <Link to="/Formulario"><button className="buttonOrden" onClick={ordenCompras}>Generar orden</button></Link>
        </div>
    )
}

export default Cart