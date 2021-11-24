import React from 'react'
import '../css/Inicio.css';
import contacto from "../media/contacto.mp4";
import cats from "../media/cats.mp4";
import perrosaltando from "../media/perrosaltando.mp4";
import candark from "../media/candark.mp4"

import { Link } from 'react-router-dom';
const Inicio = () => {
    return (
        <div  >
            <section>
                
                <div id="carouselExampleCaptions" className="carousel slide banner" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"
                            aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                            aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                            aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3"
                            aria-label="Slide 4"></button>
                    </div>
                    <div className="carousel-inner">
                    
                        <div className="carousel-item active">
                            <img src="assets/img/slider/mascotas0.jpg " className="d-block w-100 img" alt="..." />
                            <div className="carousel-caption d-none d-md-block  text-shadows">
                                <div className="titiloss">
                                <h2 className="text-shadow">Decide compartir tu vida con una mascota</h2>
                                <h3 className="text-shadow">No te sentirás solo jamás y nunca terminarás de sorprenderte!
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="assets/img/slider/viajar-mascota.jpg " className="d-block w-100 img" alt="..." />
                            <div className="carousel-caption d-none d-md-block text-shadows">
                                <div className="titiloss">
                                <h2 className="text-shadow">Van a donde tu vayas</h2>
                                <h3 className="text-shadow">Si estás listo para esta desición
                                </h3>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="assets/img/slider/mascotas2.jpg " className="d-block w-100 img" alt="..." />
                            <div className="carousel-caption d-none d-md-block  text-shadows">
                                <div className="titiloss">
                                <h2 className="text-shadow">Están a la espera de una familia</h2>
                                <h3 className="text-shadow">Tu casa podria ser su hogar
                                </h3>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item ">
                            <img src="assets/img/slider/conejo.jpg " className="d-block w-100 img" alt="..." />
                            <div className="carousel-caption d-none d-md-block ">
                                <div className="titiloss">
                                <h2 className="text-shadow">Pueden ser tiernos, divertidos y leales</h2>
                                <h3 className="text-shadow">Se acomodan facil a tu espacio disponible
                                </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button> */}
                </div>
          
                <Link className="link-index btn BotonColor botonincio " to="/Adoptar">¡Aqui esta tu proximo amigo!</Link>
                
            </section>
         
       

            <section className="inicio container-fluid ">
            
               
            
                    


            <div style={{ backgroundImage: `url(require("../media/perro.jpg"))` }}>
            </div>
        
            {/* <h1 className="titulo-principal container-xxl "><p className="tituloborder"> Adopta con responsabilidad</p>  </h1> */}

            
        
            
            {/* <div className="row">
                <div className="text  titulopeluno ">
                    <h2><strong className="listo">¿Estás list@?</strong></h2>
                    <h2><strong>Antes de aplicar</strong></h2>
                    <p className="fs-5 ">Si estas interesado en adoptar a alguno de nuestros peludos leer con detenimiento cada
                     una de las siguientes preguntas</p>
                <
                    /div> 
            </div> */}
            <div class="about-container">
                <div className="about-desc">
                    <div className="adoptarcan">

                        <h3 className="text-center my-auto titulopets tituloborder tes">
                        En Pets tenemos a muchos buscando un hogar ❤️</h3>
                        <br/>
                        <br/>
                        
                        <p className="titulosadoptar tes ">Nos alegra saber que estas pensando en adoptar, todos nuestros peludos están a la espera de una familia y son entregados en óptimas condiciones de salud y belleza a adoptantes responsables y amorosos. En esta página conocerás nuestro proceso de adopción y requisitos, pero lo primero es conocer al peludo que deseas adoptar, si ya tienes su nombre sigue leyendo nuestras condiciones, de lo contrario puedes conocer todos nuestro peluditos en los siguientes links.</p>
                    </div>
                </div>
               
                <div className="cover-conta">
                <video className="video" src={contacto} autoPlay loop muted/>
            </div>
               
            </div>
            <br/>
        
            <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="info-columna card">
                <div className="card  h-100  desva ">
                <figure>
                    {/* <img src="assets/img/slider/masco.jpg" class="img-fluid rounded-start desvanecer" alt="..."/> */}
                    <video className="videotargeta" src={cats} autoPlay loop muted/>
                   <div className="capa">
                    <h3 className="tituloborder ">Adoptame</h3>
                    <p className="tituloborder">Ayuda a un gato de la calle a tener un hogar y una familia</p>
                
                   </div>
                </figure>
               
                <div className="card-body bg-targeta ">
                <div className="accordion-item titulos-flecha">
                    <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <strong className="title ">¿Por qué adoptar y no comprar?</strong>
                    </button>
                    </h2>
                        <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body fodotitulos ">
                            <ul>
                                <li>El 40% de los perros en Bogotá, son callejeros. Pasan sus días a la intemperie, expuestos a todo
                                tipo de riesgos y maltrato humano. Solos y con hambre deambulan esperando que alguie   les recuerde
                                que tienen derecho a la vida digna.</li>
                                <br />
                                <li>Al comprar un perro o un gato en una tienda o criadero, no sabes el trato se lesdado. Muchas
                                hembras son puestas a reproducción toda su vida y desechadas cuando ya no pueden tener más crías.
                                Además muchos son cruzados con parientes generando desviaciones genéticas de la raza y problemas de
                                salud o comportamiento.</li>
                                <br />
                                <li>Es muy importante adoptar animales,estas salvando una vida, ya que la mayoría de ellos han sido
                                abandonados y tú le estas brindando una segunda oportunidad y no solo a la mascota que estas
                                adoptando si no a otra que esta esperando un espacio en el refugio de adopción.</li>
                            </ul>
                        </div>
                        </div>
                    </div>
                </div>
                    <div  className="card-footer ">
                        <Link  className="link-card-footer " to="/Adoptar">Aquí puedes ver las mascotas disponibles</Link>
                    </div>
            
            </div>
            </div>
            <div  className="col info-columna card">
                <div  className="card h-100  desva">
                    <figure>
                        <video className="videotargeta" src={candark} autoPlay loop muted/>
                        
                        <div className="capa">
                            <h3 className="tituloborder">Beneficios de adoptar un perro</h3>
                            <p  className="tituloborder"> son capaces de reconocer cuándo estás triste, angustiado o preocupado. En estas situaciones, el pequeño animal se acerca a ti y deja que lo acaricies</p>
                        
                        </div>
                    </figure>

            <div  className="card-body  bg-targeta">
                <h5  className="card-title"></h5>
                    <div className="accordion-item bg-dark">
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <strong className="title">¿Cuáles son los beneficios de adoptar?</strong>
                            </button>
                            </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                            data-bs-parent="#accordionExample">
                            <div className="accordion-body titulos-flecha">
                                <ul>
                                    <li>Enseña a niños valores como respeto a la vida, amistad y amor. Crea sentido de responsabilidad y
                                    promueve la comunicación entre padres e hijos</li>
                                    <br />
                                    <li>Disminuyen la soledad, la ansiedad, el estrés y subiendo el ánimo y la autoestima.</li>
                                    <br />
                                    <li>Estimulan el contacto social y nos ayudan a estar en forma.</li>
                                    <br />
                                    <li>Podrás escoger entre más de 130 perritos, él que concuerde con tu personalidad (ya seas
                                    hiperactivo, calmado o consentidor).</li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>
                <div  className="card-footer ">
                        <Link  className="link-card-footer " to="/Adoptar">Aquí puedes ver las mascotas disponibles</Link>
                    </div>
                </div>
            </div>
            <div  className="col info-columna card">
                <div  className="card h-100  desva">
                    <figure>
                        {/* <img src="assets/img/slider/family-dog.jpg" class="img-fluid rounded-start desvanecer" alt="..."/> */}
                        <video className="videotargeta" src={perrosaltando} autoPlay loop muted/>
                        <div className="capa">
                            <h3 className="tituloborder">Cuida a tu mascota</h3>
                            <p  className="tituloborder">Son los seres mas amables, sencillos, juguetones 
                            y amorosos del mundo ellos siempre estaran para ti</p>
                                
                        </div>
                    </figure>
                <div className="card-body  bg-targeta">
                    <h5  className="card-title"></h5>
                    <div className="accordion-item titulos-flecha">
                        <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button"data-bs-toggle="collapse"
                        data-bs-target="#collapseThree" aria-expanded="false"aria-controls="collapseThree">
                        <strong className="title">¿Cuáles son las responsabilidades de un adoptante</strong>
                        </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample">
                        <div className="accordion-body  fodotitulos">
                            <ul>
                                <li>No abandonar al animal adoptado por ninguna razón o motivo. Ni por problemas de comportamiento,
                                vejez o enfermedad.</li>
                                <br />
                                <li>Garantizarle alimento, agua, abrigo, y protección contra el clima.</li>
                                <br />
                                <li>Proporcionarle un trato humano y digno, lo cual significa no golpearlo, ni maltratarlo de ninguna
                                forma. Será educado con paciencia y amor.</li>
                                <br />
                             </ul>
                                Recuerda que una nueva mascota no es como un nuevo automóviteléfono. El perrito o gatito que adoptes
                                puede estar contigo durante 10 o incluso 15 años, por lo queuna decisión muy importante que cambiará
                                el resto de tu vida. Más importante que el color, la raza otamaño, una mascota debe coincidir con tu
                                estilo de vida.
                        </div>
                    </div>
                </div>
                            
               </div>
               <div className="card-footer ">
                        <Link  className="link-card-footer " to="/Adoptar">Aquí puedes ver las mascotas disponibles</Link>
                    </div>
                </div>
            </div>
            </div>
            </section>
            <br/>
            <br/>
            <br/>
        </div>

    );
}

export default Inicio;