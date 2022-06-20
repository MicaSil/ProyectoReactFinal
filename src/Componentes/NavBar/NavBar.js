import CartWidget from '../CartWidget/Cart.widget'
import './NavBar.css'

import { Link } from 'react-router-dom'

const NavBar = () => {
    return ( 
        <div className="contenedor">
            <nav>
                <Link to="/" className="logo2"><h1 className="logo">REGALA<span>ME</span></h1></Link>               
                <ul>
                <Link to="/category/Damas"><li className="">CHICAS</li></Link>
                <Link to="/category/Hombres"><li className="">CHICOS</li></Link>
                <Link to="/category/Niños"><li className="">NIÑOS</li></Link>
                </ul>
                <CartWidget className="carrito"/>
            </nav>
        </div>
        
    )}

export default NavBar