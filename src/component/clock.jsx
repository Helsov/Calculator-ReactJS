import React,{Component} from 'react';

class Clock extends Component {
    constructor(props){
        super();
        this.state = {
            currentTime: ''
        }
        this.clockLauncher();
    }

    clockLauncher(){
        setInterval(()=>{
           this.setState({
                currentTime: (new Date()).toLocaleString()
           })
        },1000)
    }

    render(){
        return (
            <div>
                <h1>{this.state.currentTime}</h1>
            </div>
        )
    }
}

export default Clock;