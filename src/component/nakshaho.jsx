import React from "react";
import "./style/nakshaho.css";
import layer1 from "./img/layer-7.jpg";
import layer2 from "./img/layer-2.png";
import { useState } from "react";
import ModalOkno from "./modalokno";

function Nakshaho() {
  const [modalActive, setModalActive] = useState(false);
  const [open, setOpen] = useState(false);

  document.addEventListener("mousemove", (e) => {
    Object.assign(document.documentElement, {
      style: `
      --move-x: ${(e.clientX - window.innerWidth / 2) * -0.003}deg;
      --move-y: ${(e.clientY - window.innerHeight / 12) * 0.005}deg;
      `,
    });
  });

  return (
    <div className="bodyHome">
      <section className="layers">
        <div className="layers__container">
          <div className="layers__item layer-1">
            <img src={layer1} width={2500}></img>
          </div>
          <div className="layers__item layer-2">
            <img src={layer2}></img>
          </div>
          <div className="layers__item layer-3">
            <div className={modalActive ? "hero-n" : "hero-content"}>
              <h1>"НОТАЁР" </h1>
              <h1>
                накшахо барои омузиш <span>дар оянда</span>
              </h1>{" "}
              <br />
              <input className="cheked" type="checkbox" /> <br />
              <input className="cheked" type="checkbox" /> <br />
              <input className="cheked" type="checkbox" /> <br />
              <input className="cheked" type="checkbox" /> <br />
              <input className="cheked" type="checkbox" /> <br />
              <input className="cheked" type="checkbox" /> <br />
              <button
                className="button-start"
                onClick={() => setModalActive(true)}
              >
                home
              </button>
              <button className="button-start">дохил</button>
              <button
                className="button-start"
                onClick={() =>
                  open === false ? setOpen(true) : setOpen(false)
                }
              >
                вариант
              </button>
            </div>

            <ModalOkno active={modalActive} setActive={setModalActive} />
          </div>
        </div>
      </section>
    </div>
  );
}
export { Nakshaho };
