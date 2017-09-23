class Button extends React.Component{
    
    handleClick=()=>{
        this.props.onClickMe(this.props.inc);
    }

    render(){
        return (
            <button onClick={this.handleClick}>+{this.props.inc}</button>
        );
    }
}

const Result = (props) => {
    return (
        <div>{props.counter}</div>
    );
}

class App extends React.Component{
    state = {
        count : 0
    }    

    incCounter = (x)=>{
        this.setState({
            count: this.state.count+x            
        })
    }

    render(){
        return (
            <div>
                <Button inc={1} onClickMe={this.incCounter}/>
                <Button inc={2} onClickMe={this.incCounter}/>
                <Button inc={3} onClickMe={this.incCounter}/>
                <Result counter={this.state.count}/>
            </div>
        )
    }
}

ReactDOM.render(<App/>,document.getElementById("DOM"));