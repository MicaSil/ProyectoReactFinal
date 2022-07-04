import React from 'react'
import '../Footer/Footer.css'
import { Link } from 'react-router-dom'
import { FaWhatsappSquare } from 'react-icons/fa';
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';


const Footer = () => {
    return(
            <footer className="footer">
                <div className="caja1">
                    <div className="box">
                        <figure>
                            <Link to="/" className="log"><h2>REGALA<span>ME</span></h2></Link>
                        </figure>
                    </div>
                    <div className="box">
                        <h3>SOBRE <span>NOSOTROS</span></h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <div className="red-social">
                        <h3>SIGUE<span>NOS</span></h3>
                        <div className="box">
                            <ul>
                                <Link to="/" className="icons"><li><FaFacebook/></li></Link>
                                <Link to="/" className="icons"><li><FaInstagramSquare/></li></Link>
                                <Link to="/" className="icons"><li><FaWhatsappSquare/></li></Link>
                                <Link to="/" className="icons"><li><FaGithub/></li></Link>
                            </ul>
                        
                        </div>
                    </div>
                </div>
                <div className="caja2">
                    <small>&copy; 2022 - Todos los derechos reservados</small>
                </div>
            </footer>          
    )
}

export default Footer