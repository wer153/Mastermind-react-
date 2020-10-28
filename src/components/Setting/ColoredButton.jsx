import React from "react"
import Button from '@material-ui/core/Button';


function ColoredButton(props){

    return (
        <Button 
            onClick={()=>props.onPicked(props.color)} 
            variant="contained"
            style= {{
                background:props.color,
                margin: "5px 5px",
                fontWeight: props.myColors.includes(props.color) ? 'bold' : 'normal'}}
        >
            { props.text ? props.text : props.color}
        </Button>)
}

export default ColoredButton