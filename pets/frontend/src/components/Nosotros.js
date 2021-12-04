import React from 'react';

import '../css/Nosotros.css'

const Nosotros = () => {
    return (
      
        <div className="nosot section ">
             <br />
             <br />
            <section id="nosotros" className="margin-id ">
                <div className="container-xxl border-radius-x green-bg my">
                <br />
                <br />
                <h2 className="text-center tiyulo text-white  display-3 ">¿Quiénes sómos?</h2>
                    <p className="fs-4 p-4 parrafo text-white">
                        Somos una organizacion sin animo de lucro que busca ante todo contribuir al binestar de los animales, para esto
                        llevamos a cabo campañas de busqueda y rescate, busqueda de hogares y seguimiento para los animales una vez que
                        son adoptados. Nos financiamos del apoyo económico de las empresas publicas y privadas que conrtibuyen grandemente
                        a esta labor.

                        
                    </p>

                <div className="container">
                    <div className="row align-items-start">
                        <div className="col">
                            <h3 className="text-center  tiyulo text-white">Misión</h3>
                            <p className="fs-7 p-3 parrafos  text-white">
                                Contribuir al bienestar de las mascotas, buscar un hogar digno a cada uno de los animales y ayudar al
                                bienestar tanto de ellos como de las peronas que los llevan y adoptan en su hogar.

                            </p>
                        </div>
                        <div className="col">
                            <h3 className="text-center  tiyulo  text-white">Visión</h3>
                            <p className="fs-7 p-3 parrafos  text-white">Para el año 2023 ser una organizacion lider en colombia, que sea reconocida por la buena
                            gestion y seguir siendo a diario un punto de referencia de la comunidad</p>
                        </div>
                    </div>

                </div>
                </div>
            </section>
            <br />
            <br />
            <br />

        </div>
    );
}

export default Nosotros;