class Button extends React.Component{
    state = {
        count : 0
    }    
    click= ()=>{
        this.setState({
            state: this.state.count++
        })
    }

    render(){
        return (
            <button  onClick={this.click}>{this.state.count}</button>
        );
    }
}

ReactDOM.render(<Button/>,document.getElementById("DOM"));