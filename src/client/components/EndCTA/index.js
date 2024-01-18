import React from "react";

import "./styles.css";

const EndCTAComponent = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div>
              <h3>Como Isso Funciona?</h3>
              <p className="text-secondary mb-4">
                Publicamos novas vagas todos os dias. Iremos rapidamente
                combiná-lo com as empresas certas.
              </p>
              <div id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <a
                  className="nav-link active step"
                  id="v-pills-home-tab"
                  data-bs-toggle="pill"
                  href="#v-pills-home"
                  role="tab"
                  aria-selected="true"
                >
                  <div className="circle">1</div>
                  <div className="ms-5">
                    <h5>Crie uma conta</h5>
                    <p className="mb-4 text-secondary">
                      Se registre na nossa plataforma para encontrar a vaga
                      perfeita.
                    </p>
                  </div>
                </a>
                <a
                  className="nav-link step"
                  id="v-pills-profile-tab"
                  data-bs-toggle="pill"
                  href="#v-pills-profile"
                  role="tab"
                  aria-selected="false"
                  tabIndex="-1"
                >
                  <div className="circle">2</div>
                  <div className="ms-5">
                    <h5>Encontre seu estágio</h5>
                    <p className="mb-4 text-secondary">
                      Todos os dias temos novas vagas publicadas, encontre o
                      estágio perfeito para você.
                    </p>
                  </div>
                </a>
                <a
                  className="nav-link step"
                  id="v-pills-messages-tab"
                  data-bs-toggle="pill"
                  href="#v-pills-messages"
                  role="tab"
                  aria-selected="false"
                  tabIndex="-1"
                >
                  <div className="circle">3</div>
                  <div className="ms-5">
                    <h5>Se candidate</h5>
                    <p>
                      Se aplique a uma vaga que iremos rapidamente enviar suas
                      informações para a empresa.
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="tab-content" id="v-pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="v-pills-home"
                role="tabpanel"
                aria-labelledby="v-pills-home-tab"
              >
                <img
                  src="https://themesdesign.in/jobcy/layout/assets/images/process-01.png"
                  alt=""
                  className="img-fluid"
                />
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-profile"
                role="tabpanel"
                aria-labelledby="v-pills-profile-tab"
              >
                <img
                  src="https://themesdesign.in/jobcy/layout/assets/images/process-02.png"
                  alt=""
                  className="img-fluid"
                />
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-messages"
                role="tabpanel"
                aria-labelledby="v-pills-messages-tab"
              >
                <img
                  src="https://themesdesign.in/jobcy/layout/assets/images/process-03.png"
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EndCTAComponent;
