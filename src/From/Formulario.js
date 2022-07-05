import './Formulario.css'
import {useForm}  from 'react-hook-form'
import { useState} from "react";
import {addDoc, collection} from 'firebase/firestore'
import {db} from '../Services/Firebase';
import Swal from 'sweetalert2'
import { useContext } from 'react';
import CartContext from '../Context/CartContext';




const Formulario = () => {
    const {register} = useForm();
    const {cart, precioTotal, borrarTodo} = useContext(CartContext)

    const [datos, setDatos] = useState({
        nombre:'',
        email: '',
        direccion: '' ,
        telefono: '',
    })
    const crearOrder = (e) => {
            e.preventDefault();
            const ObjOrden = {
                cliente: datos,
                items: cart,
                total: precioTotal()
            }
            const coleccion = collection(db, 'orders')
            addDoc(coleccion, ObjOrden).then (({ id })=> {
                Swal.fire({
                    title: `${datos.nombre} estamos preparando su pedido`,
                    text:`Detalle del pedido ${id}`,
                    icon:'success',
                })

        
        })
        
        borrarTodo()
    }
    const handleInputChange = (e) => {
        setDatos({...datos, [e.target.name]: e.target.value})
    }
    return(
        <div className="formulario">
            <form  className="form">
                <div>
                    <label className="formLabel">Nombre Completo</label>
                    <div className="formularioInput">
                        <input className="formInput" type="text" placeholder="Nombre Completo" {...register('nombre', {required:true})} onChange={handleInputChange} value={datos.nombre}/>
                        
                    </div>    
                    <p className="parrafo">Lorem Ipsum dolor sit amet.</p>
                </div>
                <div>
                    <label className="formLabel">Email</label>
                    <div className="formularioInput">
                        <input  className="formInput"  type="email" placeholder="Email" {...register('email', {required: true})} onChange={handleInputChange} value={datos.email}/>
                        
                    </div>
                    <p className="parrafo">Lorem Ipsum dolor sit amet.</p>
                </div>
                <div>
                    <label className="formLabel">Dirección</label>
                    <div className="formularioInput">
                        <input className="formInput"  type="text" placeholder="Dirección" {...register('direccion', {required: true})} onChange={handleInputChange} value={datos.direccion} />
                    </div>
                    <p className="parrafo">Lorem Ipsum dolor sit amet.</p>
                </div>
                <div>
                    <label className="formLabel">Teléfono</label>
                    <div className="formularioInput">
                        <input className="formInput"  type="number" placeholder="Teléfono" {...register('telefono',{required: true})} onChange={handleInputChange} value={datos.telefono}/>
                    </div>
                    <p className="parrafo">Lorem Ipsum dolor sit amet.</p>
                </div>
                <div className="terminosDiv">
                    <label>
                        <input type="checkbox" name="terminos" className="terminos" />   
                        Acepto los terminos y condiciones
                    </label>
                </div>
                <div className="botonEnviar">
                    <button  type="submit"  onClick={crearOrder} className="submit">Enviar</button>
                </div>
            </form>
        </div>

    )
    
}


export default Formulario;