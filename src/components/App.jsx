import React, {useState} from "react";
import Colors from "./Colors";
import Setting from "./Setting/Setting";
import Header from "./Header/Header"
import Footer from "./Footer/Footer"
import Sider from "./Sider/Sider"
import Round from "./Round"

function App() {
  const [colors, setColors] = useState([])
  const [code, setCode] = useState([4])
  const [rounds, setRounds] = useState([])
  const [results, setResults] = useState([])
  const [gameOver, setGameOver] = useState(false)
  const numCode = 4
  const numColors = 8

  function handleSetting(colors){
    setColors(colors)
    setCode((prevValue) => {
      var newCode = []
      for(var i=0; i<prevValue; i++){
        newCode.push(colors[Math.floor(Math.random()*colors.length)])
      }
      return newCode
    })
  }

  function finishRound(round){
    
    var positionMatch = 0
    var matchingColors = code.filter((nth,index) =>
    {
      nth===round[index] && positionMatch++
      return round.includes(nth)
    })
    var colorMatch = [...new Set(matchingColors)].length
    const result = [positionMatch,colorMatch]
    

    setRounds((prevRounds) => [...prevRounds, round])
    setResults((prevResults) => [...prevResults, result])
    
    if (JSON.stringify(round)===JSON.stringify(code)) setGameOver(true)
  }

  return (
    <div>
      <Header/>
      {!colors.length 
      ?
      <Setting onSubmit={handleSetting} numColors={numColors}/> 
      :
      <div>
        {/* show generated code (color not visible)*/}
        <div className="color-plate"> 
          <Colors colors={code} isCode={true}/>
        </div>
        {/* show user's answer and result for each round */}
        <div className="color-plate"> 
          {rounds.map((round,index)=> {
            return <Round 
              key={index}
              colors={round}
              result={results[index]}
              isNewRound={false}
              roundNumber={index+1}
              code = {code}
              gameOver = {gameOver}
              />
            })}
          {/* interface for user's new round */}
          <Round 
            colors={colors} 
            numCode={numCode}
            onSubmit={finishRound}
            isNewRound={true}
            roundNumber={rounds.length+1+" (now)"}
            gameOver={gameOver}
          />
        </div>
        
      </div>

      }
      
      <Sider/>
      <Footer/>
    </div>
  );
}

export default App;
