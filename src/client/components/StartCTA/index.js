import React from "react";

import "./styles.css";

const StartCTAComponent = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div className="text-center">
              <h2 className="mb-4">
                Navegue Por Nossas{" "}
                <span className="text-warning fw-bold">150+</span> Vagas
              </h2>
              <p className="text-muted">
                Todos os dias temos novas vagas publicadas, encontre o estágio
                perfeito para você. Iremos rapidamente combiná-lo com as
                empresas certas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartCTAComponent;
