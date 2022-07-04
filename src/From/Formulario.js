import {useForm} from 'react-hook-form'
import { Link } from 'react-router-dom';
import CartContext from '../Context/CartContext';
import './Formulario.css'


const Formulario = () => {

    const {register,formState: {errors}, handleSubmit} = useForm();


    
    return (
        <div className="formulario">
        <div className="formContainer">
            <h2 className="formTitle">FORMULAR<span>IO</span></h2>
            <form className="form" onSubmit={handleSubmit}>
                    <input className="formInput" placeholder="Nombre" type="text" {...register('nombre', {
                        required: true
                    })}/>
                    {errors.nombre?.type === 'required' && <p>El campo nombre es requerido</p>}
                    <input  className="formInput" placeholder="Apellido" type="text" {...register('apellido',{
                        required: true
                    })}/>
                    {errors.apellido?.type === 'required' && <p>El campo apellido es requerido</p>}
                    <input className="formInput" placeholder="Dirección" type="text" {...register('direccion',{
                        required: true
                    })}/>
                    {errors.direccion?.type === 'required' && <p>El campo dirección es requerido</p>}
                    <input className="formInput" placeholder="Email" type="text" {...register('email',{
                        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i
                    })} />
                    {errors.email?.type === 'pattern' && <p>El formato del email no es correcto</p>}
                    <input className="formInput" placeholder="Telefono" type="number" {...register('telefono',{
                        required: true,
                        maxLength: 8
                    })}/>
                    <button  type="submit" className="buttonCompra">Finalizar la compra</button>
            </form>
            
        </div>
    </div>
    
    )
}


export default Formulario;