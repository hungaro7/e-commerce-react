import {useForm} from "react-hook-form";

const Contacto = () => {

  const {register, handleSubmit} = useForm();
  
  const enviar = (data) =>{
    console.log(data);
  }

  return (

    <div className="container">
        <h1 className='main-title'>Contacto</h1>
        <form class="formulario" onSubmit={handleSubmit(enviar)}>
            
            <input type="text" placeholder="Ingresa tu nombre" {...register("nombre")}/>
            <input type="email" placeholder="Ingresa mail" {...register("email")}/>
            <input type="phone" placeholder="Ingresa telefono" {...register("telefono")}/>
              
              <button type="submit">Enviar</button>

        </form>
    </div>
  )
}
export default Contacto