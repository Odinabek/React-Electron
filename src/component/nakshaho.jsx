import React from "react";
import './style/nakshaho.css';
import layer1 from "./img/layer-7.jpg"
import layer2 from "./img/layer-2.png"
import { useState } from "react";
import ModalOkno from "./modalokno";
import {useDispatch, useSelector } from "react-redux";
import JsUrok from "./contents/jsurok";



function Nakshaho() {
const [modalActive, setModalActive] = useState(false)
const [jscontent, setJsContent] = useState(false)
const [open, setOpen] = useState(false)

  document.addEventListener('mousemove', e => {
    Object.assign(document.documentElement, {
      style: `
      --move-x: ${(e.clientX - window.innerWidth / 2) * -.003}deg;
      --move-y: ${(e.clientY - window.innerHeight /12) * .005}deg;
      `
    })

  })

const dispatch = useDispatch()
const cash = useSelector(state => state.cash)
console.log(cash)

//   const addCash = (cach) => {
//  dispatch({type:"ADD_CASH", payload: 10})
 
//   }

//   const minusDispatch = () => {
//     dispatch({type:"GET_CASH", payload: 5})
   
//   }
  

    return(
      <div className="bodyHome">



     
<section className="layers">
  <div className="layers__container">
      <div className='layers__item layer-1'><img src={layer1} width={2500} ></img></div>   
    <div className='layers__item layer-2'><img src={layer2} ></img></div>
    <div className='layers__item layer-3'>
      <div className={jscontent?'hero-n':'hero-content' && modalActive?'hero-n':'hero-content' }>
        <h1>накшахо барои омузиш <span>дар оянда</span></h1> <br />
        <input className="cheked"  type="checkbox" /> <br />
        <input className="cheked"  type="checkbox" /> <br />
        <input className="cheked"  type="checkbox" /> <br />
        <input className="cheked"  type="checkbox" /> <br />
        <input className="cheked"  type="checkbox" /> <br />
        <input className="cheked"  type="checkbox" /> <br />
        <h1>({cash})</h1>
        {/* <button className="button-start" onClick={() => addCash()}>+</button>
        <button className="button-start" onClick={()=>minusDispatch()}>-</button> */}
        
       <button className="button-start" onClick={() => setModalActive(true)}>home</button> 
       <button className="button-start" onClick={() => setJsContent(true)}>дохил</button>
       <button className="button-start" onClick={() => open===false?setOpen(true):setOpen(false)}>вариант</button>
       <div className={open?"test-open":"test"}>
        <h1>
          gghfjgjh
          khjkh
          hfgh
          ghkjh
        </h1>
       </div>
       
      </div> 
      <JsUrok jscontents={jscontent} setJsContents={setJsContent}/>
      <ModalOkno active={modalActive} setActive={setModalActive} />
      
                  
    </div>
    
  </div>  
</section>
    
      </div>
    )
  }
  export{Nakshaho};