import React from 'react'
import '../css/Nosotros.css'
import { Link } from 'react-router-dom';
const Nosotros = () => {
    return (
      
        // <div className="nosot section ContainerMain">
        //      <br />
        //      <br />
        //     <section id="nosotros" className="margin-id ">
        //         <div className="container-xxl border-radius-x green-bg my">
        //         <br />
        //         <br />
        //         <h2 className="text-center tiyulo text-white  display-3 ">¿Quiénes sómos?</h2>
        //             <p className="fs-4 p-4 parrafo text-white">
        //                 Somos una organizacion sin animo de lucro que busca ante todo contribuir al binestar de los animales, para esto
        //                 llevamos a cabo campañas de busqueda y rescate, busqueda de hogares y seguimiento para los animales una vez que
        //                 son adoptados. Nos financiamos del apoyo económico de las empresas publicas y privadas que conrtibuyen grandemente
        //                 a esta labor.

                        
        //             </p>

        //         <div className="container">
        //             <div className="row align-items-start">
        //                 <div className="col">
        //                     <h3 className="text-center  tiyulo text-white">Misión</h3>
        //                     <p className="fs-7 p-3 parrafos  text-white">
        //                         Contribuir al bienestar de las mascotas, buscar un hogar digno a cada uno de los animales y ayudar al
        //                         bienestar tanto de ellos como de las peronas que los llevan y adoptan en su hogar.

        //                     </p>
        //                 </div>
        //                 <div className="col">
        //                     <h3 className="text-center  tiyulo  text-white">Visión</h3>
        //                     <p className="fs-7 p-3 parrafos  text-white">Para el año 2023 ser una organizacion lider en colombia, que sea reconocida por la buena
        //                     gestion y seguir siendo a diario un punto de referencia de la comunidad</p>
        //                 </div>
        //             </div>

        //         </div>
        //         </div>
        //     </section>
        //     <br />
        //     <br />
        //     <br />

        // </div>
        <div>
            <div className='fomdo-mascotas responsive img-fluid img-fluid. max-width: 100% height: auto;'>
            {/* <div className='sesgoarriba'>

            </div> */}
                <header >
              
                
                    <div className='textos'>
                        <h1 className='titulo'>¿Quiénes sómos?</h1>
                        <h3 className='subtitulosss'>huellitas sin hogar </h3>
{/* 
                        <Link  className="lin " to="/Adoptar">Aquí puedes ver las mascotas disponibles</Link>
 */}

                    </div>
                </header>
            </div>
                <main>
                    <section className='acerca-de'>
                        <div className='contenerdorr'>
                        <h2 className='sobre-nosotros'>Nuestra Mision </h2>
                
                        <p className='parrafoo'> Somos una organizacion sin animo de lucro que busca ante todo contribuir al binestar de los animales, para esto
                            llevamos a cabo campañas de busqueda y rescate, busqueda de hogares y seguimiento para los animales una vez que
                            son adoptados. Nos financiamos del apoyo económico de las empresas publicas y privadas que conrtibuyen grandemente
                            a esta labor.</p>
                          




                        </div>
                    <div className='sesgoabajo'>

                    </div>

                </section>
                <section className='galeria'>
                    <div className='sesgoarriba'></div>
                    <div className='imagenes none img-fluid cardw'>
                        <img src="assets/img/slider/masco.jpg" className="none d-block w-100 img-fluid cardw img" alt="..." />
                    </div>
                    <div className='imagenes img-fluid cardw'>
                        <img src="assets/img/slider/perro y gato.jpg " className="d-block w-100 img-fluid cardw img" alt="..." />
                    </div>
                    <div className='imagenes img-fluid cardw'>
                        <img src="assets/img/slider/oficina1.jpg " className="d-block w-100 img-fluid cardw img" alt="..." />
                        <div className='encima'>
                            <h2 className='encima2'>
                                Adopta un perrito de la calle
                            </h2>
                            <div>

                            </div>
                        </div>
                    </div>
                    <div className='imagenes none img-fluid cardw '>
                        <img src="assets/img/slider/viajar-mascota.jpg" className="none d-block w-100 img-fluid cardw img" alt="..." />
                        
                    </div>
                    <div className='imagenes'>
                        <img src="assets/img/slider/perro1.jpg " className="d-block w-100 cardw img" alt="..." />
                    
                    </div>
                    <div className='sesgoabajo'>

</div>
                    </section>
                    
                </main>
              

            
            
        </div>
    );
}

export default Nosotros;