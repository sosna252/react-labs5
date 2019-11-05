import React from 'react'

function ComponentOne(props) {
    let s;
    if(props.flag == true)
        s="The user is playing now";
    else
        s="Play";
    return (
        <div style={{ position:"relative", borderStyle: 'solid', borderWidth: 1, margin: 3 }} >
            <h2>Player One</h2>
            <div>Name {props.name}</div>
            <div>Played number of times {props.playedtimes}</div>
            <button style={{position:"absolute", right:"15px", bottom:"3px"}} onClick={(e) => props.FirstEventHandler(e)} disabled={props.flag}>{s}</button>
        </div>
    );
}
export default ComponentOne;