import React from "react";
import Button from '@material-ui/core/Button'
import { VscSymbolColor, VscChromeClose } from "react-icons/vsc";
import { GrLocationPin } from "react-icons/gr";

function Colors(props) {
  return <div>
    {/* shows round number of both old and new rounds  */}
    {props.roundNumber
      &&
      <div>
        {props.isNewRound && props.gameOver? (
          <h3>GameOver</h3>)
        :
          
          <h3>round {props.roundNumber}</h3>
        }
        
        {/* show matched position */}
        { props.result &&
          [...Array(props.result[0])].map((n, index) => <GrLocationPin key={index}/>)
        }
        {/* show matched color */}
        { props.result &&
          [...Array(props.result[1])].map((n, index) => <VscSymbolColor key={index}/>)
        }
        {
          props.result && props.result[0]+props.result[1] == 0 
          ? <div>
              {/* <VscChromeClose style={{color:"#ed6969"}}/> */}
              <h5>No Match!</h5>
            </div> 
          : <div/>
        }
        

      </div>
    }
    {props.colors.map((color,index)=>{
      return (
        <Button
          className="colors"
          key={index}
          variant="outlined"
          disabled={!props.isNewRound || props.gameOver} 
          style=
          {{
            background: !props.isCode && color,
            borderRadius: "40%",
            fontSize: "15px",
            padding: "20px 0px",
            width: "5px",
            height: "20px",
            margin: "3px 3px",
          }}
          onClick={()=>props.onPicked(color,index)}
        >
        {props.isCode? "?" : ""} 
        </Button>)
    })}

  </div>
}

export default Colors;
