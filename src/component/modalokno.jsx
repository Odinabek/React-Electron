import React from "react";
import './style/modalokno.css'
import { NavLink } from "react-router-dom";

function ModalOkno({active, setActive}) {
  document.addEventListener('mousemove', e => {
    Object.assign(document.documentElement, {
      style: `
      --move-x: ${(e.clientX - window.innerWidth / 2) * -.003}deg;
      --move-y: ${(e.clientY - window.innerHeight / 2) * .005}deg;
      `
    })

  })
  return(
    <div className={active?'modal':'modal-active'} onClick={()=>setActive(false)}>
  
        <div className={active?"modal-container":"modal-container-active"} onClick={e => e.stopPropagation()}>
          <h1 className="menuLogo"> </h1> <br />
 {/* <NavLink to='/nakshaho' onClick={()=>setActive(false)}><button className="buttonModal">накшахо</button> <br /> </NavLink> */}
 <NavLink to='/omuzishkho' onClick={()=>setActive(false)}><button className="buttonModal">омузишхо</button> <br /> </NavLink>
 <NavLink to='/razrab' onClick={()=>setActive(false)}><button className="buttonModal">Razrab</button> <br /> </NavLink>
 <button className="buttonModal">clic</button> <br />
 <button className="buttonModal">clic</button> <br />
 <NavLink to='/' onClick={()=>setActive(false)}><button className="buttonModal">Саифаи аввал</button> <br /> </NavLink>
        </div>
    </div>
  )  
}

export default ModalOkno;