import { useState } from 'react'

//Bring a Card.

function CardComponent (){
    const [card, setCard] = useState()
  
    function BringCard(){
      setCard(<>
        <div style={{
            backgroundColor: 'yellow', padding: 20, margin: 20, borderColor: 'black'
        }}>
            <h1>Hello HI there</h1>
            <h2>Ok</h2>
            <h3>Hmmmmm</h3>
        </div>
      </>)
    }  

    return(
      <>
        <button onClick={BringCard}>Import a Card</button>
        {card}
      </>
    )
    
  }

  export default CardComponent;