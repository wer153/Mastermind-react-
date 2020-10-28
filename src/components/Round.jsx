import React, {useState} from "react";
import Colors from "./Colors";
import Button from '@material-ui/core/Button';

function Round(props) {
  const [round, setRound] = useState([])
  const num_code = props.numCode
  

  function addColor(color){
    setRound((prevItems)=> [...prevItems, color])
  }

  function deleteColor(_,target){
    setRound((prevItems)=> {
        return prevItems.filter((_,index) => index!==target)
    })
  }


  return (
    <div>
      {/* show user's code */}
      <div> 
        <br/>
        <Colors 
          result = {props.result}
          roundNumber = {props.roundNumber}
          colors={props.isNewRound ? round : props.colors} 
          isCode={false}
          isNewRound={props.isNewRound}
          gameOver={props.gameOver}
        // function deleteColor works only for new round 
          onPicked={deleteColor}
          />
      </div>
      {/* new round: user guess code */}
      { props.isNewRound && (
      <div>
        {/* show candidate colors */}
        <div className="color-plate"> 
          <Colors 
            colors={props.colors} 
            isCode={false}
            onPicked={addColor}  
            isNewRound={props.isNewRound}
            gameOver={props.gameOver}
            />
        </div>
        {/* submit user's code on click */}
        <Button 
            style={{
                margin:"5px 5px",
                background:"#7b68ee"
                }}
            disabled={num_code !== round.length}
            variant="contained" 
            color="primary"
            onClick={()=> {
              const new_round = round.slice()
              setRound([])
              return props.onSubmit(new_round)
              
            }}
        >Done</Button>
      </div>)}
    </div>)

}

export default Round;
