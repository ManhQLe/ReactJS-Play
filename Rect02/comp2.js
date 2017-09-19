class Button extends React.Component{
    count = 0;
    click(){
        this.count++;
    }

    render(){
        return (
            <button  onClick={this.click}>{this.count}</button>
        );
    }
}