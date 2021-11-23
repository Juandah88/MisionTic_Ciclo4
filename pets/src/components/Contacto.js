import React from "react";
import '../css/Contacto.css';
const Contacto = () => {
  return (
    <div className="mainconteiner ContainerMain">
      <section>
        <div className="container-xxl border-radius-x green-bg ">
          <div className="row align-items-start ">
            <div className="col">
              <h3 className="text-center py-2">Contactate con nosotros</h3>
              <p className="fs-6 p-3">
                Es nuestra misión contribuir al bienestar de las mascotas,
                buscar un hogar digno a cada uno de los animales y ayudar al
                bienestar tanto de ellos, como de las personas que los llevan y
                adoptan en su hogar, garantizando el confort y la comodidad.{" "}
                <br />
                <br />
                Tu opinión es muy importante para nosotros, ya que nos ayuda a
                mejorar como organización, y por supuesto, podemos mejorar,
                cambiar e innovar pensando siempre en el bienestar de todos los
                perritos.
              </p>
              <img className="w-100" src="assets/img/porque-adoptar.jpg" alt="porque adoptar" />
            </div>
          </div>
          <form
            action="/add2"
            name="Formulario"
            method="post"
            onsubmit="return validar(event)"
          >
            <div id="ContactenosSectionForm" style={{ padding: "2em" }}>
              <div className="mb-3">
                <label for="FirstName">Nombres</label>
                <input
                  type="text"
                  className="form-control"
                  id="FirstName"
                  name="nombre"
                  required
                />
              </div>
              <div className="mb-3">
                <label for="LastName">Apellidos</label>
                <input
                  type="text"
                  className="form-control"
                  id="LastName"
                  name="apellido"
                  required
                />
              </div>
              <div className="mb-3">
                <label for="InputEmail" className="form-label">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="InputEmail"
                  name="email"
                  required
                />
              </div>
              <div className="mb-3">
                <label for="SelectAsunto" className="form-label">
                  Selecciona un asunto
                </label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  name="asunto"
                  required
                >
                  <option value="(PQR) - Peticiones, quejas y reclamos">
                    (PQR) - Peticiones, quejas y reclamos
                  </option>
                  <option value="Donaciones">Donaciones</option>
                  <option value="Recomendaciones">Recomendaciones</option>
                  <option value="Reporta un caso">Reporta un caso</option>
                  <option value="Otro">Otro</option>
                </select>
              </div>
              <div className="mb-3">
                <label for="Comentarios" className="form-label">
                  Comentarios
                </label>
                <textarea
                  className="form-control"
                  id="Comentarios"
                  rows="3"
                  name="comentarios"
                  required
                ></textarea>
              </div>
              <div className="d-grid gap-5">
                <button type="submit" className="btn btn-success">
                  Enviar
                </button>
                {/* <script>
                function validar(e) {
                  swal({
                    title: "Gracias por contactarnos",
                    text: "En máximo 3 días hábiles uno de nuestros asesores se contactará con usted.",
                    icon: "success",
                  }).then(function () {
                    document.Formulario.submit();
                  })
                  return false;
                }
              </script> */}
              </div>
            </div>
          </form>
        </div>
      </section>

    </div>
  );
};

export default Contacto;
