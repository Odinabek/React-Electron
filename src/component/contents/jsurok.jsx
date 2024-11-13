import React from "react";
import "../style/jsurok.css"

function JsUrok({jscontents, setJsContents}) {
console.log(jscontents)
    return(
        <div>
                    <div className={jscontents?"contentjs":"contentjs-active"} onClick={()=>setJsContents(false)} >
   <h1>
    fhfhfghfgjgghj 
    ghffghfhfg
    hfghfh
    <br />
    gdgdghfgh
    dghffg
    <br />
    fgfgghfghfhf
    fhfhfghfgjgghj 
    ghffghfhfg
    hfghfh
    <br />
    gdgdghfgh
    dghffg
    <br />
    fgfgghfghfhf
    fhfhfghfgjgghj 
    ghffghfhfg
    hfghfh
    <br />
    gdgdghfgh
    dghffg
    <br />
    fgfgghfghfhf
    fhfhfghfgjgghj 
    ghffghfhfg
    hfghfh
    <br />
    gdgdghfgh
    dghffg
    <br />
    fgfgghfghfhf
   </h1>
        </div>
        </div>

    )
    
}
export default JsUrok;