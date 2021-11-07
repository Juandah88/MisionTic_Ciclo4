import React from 'react';
const Foter = () => {
    return (
        // <footer className="bg-primmary">
        // <h4>Todolos derechos reservados &copy;</h4>
        // </footer>

        <div>

            <footer class="text-center text-lg-start bg-nav text-muted">
                {/*  Section: Social media */}
                <section>
                    <div class=" container d-flex justify-content-center p-4 border-bottom align-items-center">


                        <div class="me-5 d-none d-lg-block text-light">
                            <span class="fs-3">Síguenos y apoyanos en nuestras redes sociales</span>
                        </div>



                        <div>
                            <a href="https://es-la.facebook.com/" target="blank" class="me-4 btn-facebook">
                            <img class="img_redes_size" src="assets/img/iconos/facebook.png" alt="instagram"/>
                            </a>
                            {/*  Twitter */}
                            <a href="https://twitter.com/?lang=es" target="blank" class="me-4 btn-twitter">
                              <img class="img_redes_size" src="assets/img/iconos/twitter.png" alt="twitter"/>
                            </a>
                            {/*  Instagram */}
                            <a href="https://www.instagram.com/" target="blank" class="me-4 btn-instagram">
                                <img class="img_redes_size" src="assets/img/iconos/instagram.png" alt="instagram" />
                            </a>
                        </div>
                        {/*  Right */}
                    </div>
                </section>
                {/*  Section: Social media */}

                {/*  Section: Links  */}
                <section class="">
                    <div class="container text-center text-md-start mt-5">
                        {/*  Grid row */}
                        <div class="row mt-3">
                            {/*  Grid column */}
                            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                                <h6 class="footer-title text-center"><i class="bi bi-info-circle"></i> Adopta Un amigo </h6>
                                <p class="text-light py-3">
                                    Aquí encotraras muchos Animalitos que buscan
                                    un hogar, son alegres dinamicos animate te sacaran una sonrisa.
                                </p>
                            </div>
                            {/*  Grid column */}

                            {/*  Grid column */}
                            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                {/*  Links */}
                                <h6 class="footer-title text-center">
                                    {/* Nuestras mascotas */}
                                </h6>
                                <ul class="py-3">
                                    <li class="footer-li"><a href="#!" class="footer-a">Perros</a></li>
                                    <li class="footer-li"><a href="#!" class="footer-a">Gatos</a></li>
                                    <li class="footer-li"><a href="#!" class="footer-a">Tienda para perros</a></li>
                                    <li class="footer-li"><a href="#!" class="footer-a">Objetos para Gatos</a></li>
                                </ul>

                            </div>
                            {/*  Grid column */}

                            {/*  Grid column */}
                            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                {/*  Links */}
                                <h6 class="footer-title text-center">
                                    Contáctenos
                                </h6>
                                <ul class="py-3">
                                    <li class="footer-li">
                                        <p class="text-light"><i class="bi bi-house-door"></i> Cra 1 # 2 -3, Bogotá
                                        </p>
                                    </li>
                                    <li class="footer-li">
                                        <p class="text-light">
                                            <i class="bi bi-envelope"></i>
                                            mascotas@ejemplo.com
                                        </p>
                                    </li>
                                    <li class="footer-li">
                                        <p class="text-light">
                                            <i class="bi bi-telephone"></i>
                                            + 57 315 333 3333</p></li>
                                    <li class="footer-li"><p class="text-light">
                                        <i class="bi bi-whatsapp"></i>
                                        <a href="https://wa.me/5713201234567?text=Me%20interesa%20el%20auto%20que%20estás%20vendiendo" class="footer-a">320 123 45 67</a>
                                    </p></li>
                                </ul>
                            </div>
                            {/*  Grid column */}
                        </div>
                        {/*  Grid row */}
                    </div>
                </section>
                {/*  Section: Links  */}

                {/*  Copyright */}
                <div className="text-center p-4 text-light color_footer" >
                    &copy; 2021 Copyright: minTic UTP
                </div>
                {/*  Copyright */}
            </footer>



        </div>

    );
}

export default Foter;