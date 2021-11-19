import React from 'react'
import '../css/Inicio.css'
import { Link } from 'react-router-dom';
const Inicio = () => {
    return (
        <div className="ContainerMain">
            <section>
                <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
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
                            <img src="assets/img/slider/mascotas0.jpg" className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h2 className="text-shadow">Decide compartir tu vida con una mascota</h2>
                                <h3 className="text-shadow">No te sentirás solo jamás y nunca terminarás de sorprenderte!
                                    <Link className="link-index btn BotonColor" to="/Adoptar">¡Te están esperando!</Link></h3>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="assets/img/slider/mascotas1.jpg" className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h2 className="text-shadow">Van a donde tu vayas</h2>
                                <h3 className="text-shadow">Si estás listo para esta desición
                                    <Link className="link-index btn BotonColor my-2" to="/Adoptar">¡Aqui esta tu proximo amigo!</Link></h3>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="assets/img/slider/mascotas2.jpg" className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h2 className="text-shadow">Están a la espera de una familia</h2>
                                <h3 className="text-shadow">Tu casa podria ser su hogar

                                    <Link className="link-index btn BotonColor" to="/Adoptar">¡Saludalos aquí!</Link>
                                </h3>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="assets/img/slider/mascotas3.jpg" className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h2 className="text-shadow">Pueden ser tiernos, divertidos y leales</h2>
                                <h3 className="text-shadow">Se acomodan facil a tu espacio disponible
                                    <Link className="link-index btn BotonColor" to="/Adoptar">¡Conócelos!</Link></h3>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

            </section>

            <section id="adoptar" className="margin-id">
                <div className="container-xxl my-4">
                    <div className="row" id="tabla">
                        <div className="text col-xl-6">
                            <h2><strong className="listo">¿Estás list@?</strong></h2>
                            <h2><strong>Antes de aplicar</strong></h2>
                            <p className="fs-5 ">Si estas interesado en adoptar a alguno de nuestros peluditos, debes leer con detenimiento cada
                                una de las siguientes preguntas</p>
                        </div>
                        <div className="preguntas col-xs-6">
                            <div className="accordion" id="accordionExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                                            aria-expanded="true" aria-controls="collapseOne">
                                            <strong className="title">¿Por qué adoptar y no comprar?</strong>
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <ul>
                                                <li>El 40% de los perros en Bogotá, son callejeros. Pasan sus días a la intemperie, expuestos a todo
                                                    tipo de riesgos y maltrato humano. Solos y con hambre deambulan esperando que alguien les recuerde
                                                    que tienen derecho a la vida digna.</li>
                                                <br />
                                                <li>Al comprar un perro o un gato en una tienda o criadero, no sabes el trato se les ha dado. Muchas
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
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            <strong className="title">¿Cuáles son los beneficios de adoptar?</strong>
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
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
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            <strong className="title">¿Cuáles son las responsabilidades de un adoptante?</strong>
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
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
                                            Recuerda que una nueva mascota no es como un nuevo automóvil o teléfono. El perrito o gatito que adoptes
                                            puede estar contigo durante 10 o incluso 15 años, por lo que es una decisión muy importante que cambiará
                                            el resto de tu vida. Más importante que el color, la raza o el tamaño, una mascota debe coincidir con tu
                                            estilo de vida.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="clearfix"></div>
                        <div className="container-xxl border-radius-x green-bg my-4">

                            <p className="text-center fs-3 p-4 listo">
                                <strong>¿Estás listo?</strong>
                                <Link className="link-index btn BotonColor" to="/Adoptar">Aquí puedes ver las mascotas disponibles</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            
        </div>
    );
}

export default Inicio;