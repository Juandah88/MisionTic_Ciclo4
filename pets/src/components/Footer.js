import React from 'react';

import '../css/footer.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';




const Foter = () => {
    return (
        <div className=" margen-footer container-fluid">
            <footer className="text-center text-lg-start bg-nav text-muted">
                {/*  Section: Social media */}
                <section>
                    <div className=" container d-flex justify-content-center p-4 border-bottom align-items-center">
                        <div className="me-5 d-none d-lg-block text-light">
                            <span className="fs-3 font">Síguenos y apoyanos en nuestras redes sociales</span>
                        </div>
                        
                        <div>
                            <a href="https://es-la.facebook.com/" target="blank" className="me-4 btn-facebook">
                                <img className="img_redes_size" src="assets/img/iconos/facebook.png" alt="instagram" />
                            </a>
                            {/*  Twitter */}
                            <a href="https://twitter.com/?lang=es" target="blank" className="me-4 btn-twitter">
                                <img className="img_redes_size" src="assets/img/iconos/twitter.png" alt="twitter" />
                            </a>
                            {/*  Instagram */}
                            <a href="https://www.instagram.com/" target="blank" className="me-4 btn-instagram">
                                <img className="img_redes_size" src="assets/img/iconos/instagram.png" alt="instagram" />
                            </a>
                        </div>
                        {/*  Right */}
                    </div>
                </section>
                {/*  Section: Social media */}

                {/*  Section: Links  */}
                <section className="margenariba">
                    <div className="container text-center text-md-start mt-">
                        {/*  Grid row */}
                        <div className="row mt-3">
                            {/*  Grid column */}
                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                                <h6 className="footer-title text-center font"><i className="bi bi-info-circle"></i> Adopta Un amigo </h6>
                                <p className="text-light font">
                                    Aquí encotraras muchos Animalitos que buscan
                                    un hogar, son alegres dinamicos animate te sacaran una sonrisa.
                                </p>
                            </div>
                            {/*  Grid column */}

                            {/*  Grid column */}
                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                {/*  Links */}
                                <h6 className="footer-title text-center">
                                    {/* Nuestras mascotas */}
                                </h6>
                                <ul className="">
                                    <li className="footer-li"><FontAwesomeIcon icon={faMapMarkerAlt}/><a href="#!" className="footer-a">Perros</a></li>
                                    <li className="footer-li"><a href="#!" className="footer-a">Gatos</a></li>
                                    <li className="footer-li font"><a href="#!" className="footer-a">Tienda para perros</a></li>
                                    <li className="footer-li font"><a href="#!" className="footer-a">Objetos para Gatos</a></li>
                                </ul>

                            </div>
                            {/*  Grid column */}

                            {/*  Grid column */}
                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                {/*  Links */}
                                <h6 className="footer-title text-center font">
                                    Contáctenos
                                </h6>
                                <ul className="py">
                                    <li className="footer-li">
                                        <p className="text-light"><i className="bi bi-house-door font"></i> Cra 1 # 2 -3, Bogotá
                                        </p>
                                    </li>
                                    <li className="footer-li">
                                        <p className="text-light">
                                            <i className="bi bi-envelope font"></i>
                                            mascotas@ejemplo.com
                                        </p>
                                    </li>
                                    <li className="footer-li">
                                        <p className="text-light">
                                            <i className="bi bi-telephone font"></i>
                                            + 57 315 333 3333</p></li>
                                    <li className="footer-li"><p className="text-light">
                                        <i className="bi bi-whatsapp"></i>
                                       
                                    </p></li>
                                </ul>
                            </div>
                            {/*  Grid column */}
                        </div>
                        {/*  Grid row */}
                    </div>
                </section>
                {/*  Section: Links  */}

                 {/* Copyright */}
                <div className="text-center p-4 text-light color_footer" >
                    &copy; 2021 Copyright: minTic UTP
                </div>
                {/*  Copyright */}
            </footer>



        </div>

    );
}

export default Foter;