import React from "react";
import './style/omuzishkho.css';
import layer1 from "./img/layer-7.jpg"
import layer2 from "./img/layer-2.png"
import { useState } from "react";
import ModalOkno from "./modalokno";
import Content from "./content";
import Html from "./contents/html";
import Css from "./contents/css";
import Js from "./contents/js";



function Omuzishkho() {
  document.addEventListener('mousemove', e => {
    Object.assign(document.documentElement, {
      style: `
      --move-x: ${(e.clientX - window.innerWidth / 2) * -.003}deg;
      --move-y: ${(e.clientY - window.innerHeight /12) * .005}deg;
      `
    })

  })
  


  const myArry  = [<Html/> , <Css/>, <Js/>]
  const Name = ['Html', 'Css','Js']
  
  const [open, setOpen] = useState(false)
  const [modalActive, setModalActive] = useState(false)
  let content = ''
  const [clcState, setClcState ] = useState('')

for (let i = 0; i < myArry.length; i++) {
  if (clcState == Name[i]) {
     content = myArry[i]
     
  }
  
  
}
  

 






    return(
      <div className="bodyHome">



     
<section className="layers">
  <div className="layers__container">
      <div className='layers__item layer-1'><img src={layer1} width={2500}></img></div>   
    <div className='layers__item layers-2'><img src={layer2} ></img></div>
    <div className='layers__item layer-3'>
    <div className={modalActive?'hero-n':'hero-content'}>
      <div className={open?"box-btn":"box-btn-true"}>
          <button className="button-categories" onClick={() =>  setOpen(true) || setClcState('Html')}>HTML</button> <br /> 
          <button className="button-categories" onClick={() =>  setOpen(true) || setClcState('Css')}>Css</button> <br />
          <button className="button-categories" onClick={() =>  setOpen(true) || setClcState('Js')}>JS</button> <br />
          <button className="button-categories">React</button> <br />
          <button className="button-categories">React Native</button> <br />
          <button className="button-categories">Electron js</button><br />
          <button className="button-categories">node js</button> <br />
          <button className="button-categories">sql</button><br />
          <button className="button-categories">psql</button> <br />
          <button className="button-categories" onClick={() => setModalActive(true) || setOpen(false)}>Меню</button> <br />
      </div>
   
   
       </div>
       
         <div className={open?"content-open":"content-n"}>
          <button className="button-esc" onClick={() => setOpen(false)}>x</button> <br />
          <div className="text-content">
          <Content content={content}/>
          </div>
           
          </div>
          
          
          
        
      
      <ModalOkno active={modalActive} setActive={setModalActive} />            
    </div>
    
  </div>  
</section>
    
      </div>
    )
  }
  export{Omuzishkho};