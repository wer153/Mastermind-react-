import React, {useState} from "react"
import Button from '@material-ui/core/Button';
import ColoredButton from "./ColoredButton"
import colorList from "./ColorList.js"

function Setting(props){
    const [myColors, setMyColors] = useState([])
    const num_colors = props.numColors

    function handleMyColors(color){
        !myColors.includes(color) ? addColor(color) : deleteColor(color)
    }

    function addColor(color){
        setMyColors((prevItems)=> [...prevItems, color])
    }

    function deleteColor(target){
        setMyColors((prevItems)=> {
            return prevItems.filter((color) => color!==target)
        })
    }

    function generateRandomColors(){
        var newColors=[]
        var i = 0
        while (i<num_colors){
            var newColor = colorList[Math.floor(Math.random()*colorList.length)]
            if (!newColors.includes(newColor)){
                newColors.push(newColor)
                i++
            }
        }
        setMyColors(newColors)
        return myColors
    }
    return (
    <div>
        {/* show color list */}
        <div className="color-plate">
            <h3>Choose your {num_colors} colors!</h3>
            <div>
                {colorList.map((color,index)=> 
                    <ColoredButton 
                        key = {index} 
            // require update:key should be unique
                        color={color} 
                        onPicked={handleMyColors}
                        chosen={false}
                        myColors={myColors}
                />)}
            </div>
        </div>
        {/* show selected colors */}
        <div className="color-plate">
            <h3>My Colors</h3>
            <br/>
            <div>
                {myColors.length !== num_colors && "Select "+num_colors+" Colors!"}
            </div>
            <div>
                {myColors.map((color,index)=> 
                    <ColoredButton 
                        key = {color+index} 
            // require update:key should be unique
                        color={color} 
                        onPicked={handleMyColors}
                        chosen={true}
                        myColors={myColors}
                />)}
            </div>
        <br/>
        {/* generate random colors on click */}
        <Button 
            style={{
                margin:"5px 5px",
                background:"#ed6969"
                }}
            variant="contained" 
            color="primary"
            onClick={()=>generateRandomColors()}
        >Random</Button>
        {/* submit selectd colors */}
        <Button 
            style={{
                margin:"5px 5px",
                background:"#7b68ee"
                }}
            variant="contained" 
            color="primary"
            disabled={myColors.length !== num_colors &&true}
            onClick={()=>props.onSubmit(myColors)}
        >Done</Button>

        </div>
    </div>
    )
}

export default Setting