import React from 'react'
import PlayerOne from './PlayerOne';
import PlayerTwo from './PlayerTwo';


class GM extends React.Component{
    constructor(props) {
        super(props);
        this.state = { firstname: "", firstplayedtimes: 0, secondname: "", secondplayedtimes: 0, flag: true};
        this.FirstEventHandler = this.FirstEventHandler.bind(this);
        this.SecondEventHandler = this.SecondEventHandler.bind(this);
    }
    
      ChangeFirstNameHandler = (event) => {    
        this.setState({firstname: event.target.value});       
    }
    ChangeSecondNameHandler = (event) => {    
        this.setState({secondname: event.target.value});       
    }


    FirstEventHandler(e) {
        this.setState(
            {firstplayedtimes: this.state.firstplayedtimes + 1,
            flag: !this.state.flag}
            )
    };

    SecondEventHandler(e) {
        this.setState(
            {secondplayedtimes: this.state.secondplayedtimes + 1,
            flag: !this.state.flag}
            )
    };
    

    render(){
        return(
        <div>
           <PlayerOne name={this.state.firstname} 
           playedtimes={this.state.firstplayedtimes}
           FirstEventHandler={this.FirstEventHandler}
           flag={this.state.flag}/>

           <PlayerTwo name={this.state.secondname} 
           playedtimes={this.state.secondplayedtimes} 
           SecondEventHandler={this.SecondEventHandler}
           flag={this.state.flag}/>

        <div>Set number of Player One <input onChange={this.ChangeFirstNameHandler}/></div>
        <div>Set number of Player Two <input onChange={this.ChangeSecondNameHandler}/></div>
        </div>
    );
}
}
export default GM