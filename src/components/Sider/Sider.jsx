import React from "react"
import { VscSymbolColor } from "react-icons/vsc";
import { GrLocationPin } from "react-icons/gr";
import { TiPin } from "react-icons/ti";
import { HiCursorClick } from "react-icons/hi";

function Sider(){
    return (
    <div>
        <div className="sider">
            <TiPin/>
            <hr/>
            <h3>color match</h3><VscSymbolColor/>
            <h3>position match</h3><GrLocationPin/>
        </div>
        <div className="sider">
            <TiPin/>
            <hr/>
            <h3>add/remove <br></br>color</h3><HiCursorClick/>
            
        </div>
        
    </div>
    )

}

export default Sider