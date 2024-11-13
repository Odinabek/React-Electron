import React from "react";
import { NavLink } from "react-router-dom";
import './style/home.css';
import layer1 from "./img/layer-7.jpg"
import layer2 from "./img/layer-2.png"
import logo from "./img/logos.png"
import { useState } from "react";
import ModalOkno from "./modalokno";



function Home() {
const [modalActive, setModalActive] = useState(false)

  document.addEventListener('mousemove', e => {
    Object.assign(document.documentElement, {
      style: `
      --move-x: ${(e.clientX - window.innerWidth / 2) * -.003}deg;
      --move-y: ${(e.clientY - window.innerHeight / 2) * .005}deg;
      `
    })

  })


    return(
      <div className="bodyHome">



     
<section className="layers">
  <div className="layers__container">
      <div className='layers__item layer-1'><img src={layer1} width={2500} ></img></div>
    <div className='layers__item layers-2'><img src={layer2} ></img></div>
    
    <div className='layers__item layer-3'>
    <div  className="logos"><img src={logo} width={400} ></img></div>
      <div className={modalActive?'hero-n':'hero-content'}>
        <div className="box-content">
           <h1>барномаи омузиши Забонҳои<span>барномасози</span></h1>
           <h1>
a program for learning programming languages</h1>
           <div className="hero-content__p">my telegram account is https://t.me/Djoodin</div>
           <div className="hero-content__p"></div>
           <button className="button-start" onClick={() => setModalActive(true)}>menu</button>
        </div>
       
        
      </div> 
      <ModalOkno active={modalActive} setActive={setModalActive} />
 
                  
    </div>
  
  </div>  
</section>
    
      </div>
      
    )

  }
  export{Home};