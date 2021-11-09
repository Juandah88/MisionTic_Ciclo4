import React from 'react';
import Foter from './Footer';


const Nosotros = () => {
    return (
        <div >
            <section id="nosotros" class="margin-id">
                <div class="container-xxl border-radius-x green-bg my-4">

                    <h2 class="text-center title-index py-4 display-4">¿Quiénes sómos?</h2>
                    <p class="fs-4 p-4">
                        Somos una organizacion sin animo de lucro que busca ante todo contribuir al binestar de los animales, para esto
                        llevamos a cabo campañas de busqueda y rescate, busqueda de hogares y seguimiento para los animales una vez que
                        son adoptados. Nos financiamos del apoyo económico de las empresas publicas y privadas que conrtibuyen grandemente
                        a esta labor.
                    </p>

                    <div class="container">
                        <div class="row align-items-start">
                            <div class="col">
                                <h3 class="text-center">Misión</h3>
                                <p class="fs-6 p-3">
                                    Contribuir al bienestar de las mascotas, buscar un hogar digno a cada uno de los animales y ayudar al
                                    bienestar tanto de ellos como de las peronas que los llevan y adoptan en su hogar.

                                </p>
                            </div>
                            <div class="col">
                                <h3 class="text-center">Visión</h3>
                                <p class="fs-6 p-3">Para el año 2023 ser una organizacion lider en colombia, que sea reconocida por la buena
                                    gestion y seguir siendo a diario un punto de referencia de la comunidad</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <Foter />
        </div>
    );
}

export default Nosotros;