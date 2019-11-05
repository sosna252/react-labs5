import React from 'react'

function ComponentOne(props) {
    let s;
    if(props.flag == true)
        s="Play";
    else
        s="The user is playing now";
    return (
        <div style={{ position:"relative", borderStyle: 'solid', borderWidth: 1, margin: 3 }} >
            <h2>Player Two</h2>
            <div>Name {props.name}</div>
            <div>Played number of times {props.playedtimes}</div>            
            <button style={{position:"absolute", right:"15px", bottom:"3px"}} onClick={(e) => props.SecondEventHandler(e)} disabled={!props.flag}>{s}</button>
        </div>
    );  
}
export default ComponentOne;