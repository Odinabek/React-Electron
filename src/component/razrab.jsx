import React from "react"; 
import '../component/style/razrab.css'
import layer1 from "./img/layer-7.jpg"
import layer2 from "./img/layer-2.png"

function Razrab(params) {
    document.addEventListener('mousemove', e => {
        Object.assign(document.documentElement, {
          style: `
          --move-x: ${(e.clientX - window.innerWidth / 2) * -.003}deg;
          --move-y: ${(e.clientY - window.innerHeight /12) * .005}deg;
          `
        })
    
      })

    return(

<div>

     

  
     
    
      <div className="scene">
			
            <div id="layer3" className="layer">
            <div className="layer__content">
					<h1>Odin proo<br/>style</h1>
                    
				</div>
            </div>
            <img className="layer" src={layer2} alt="" ></img>
            <div id="layer1" className="layer"></div>
		
		</div>

  
   

</div>
    )
}

export default Razrab;