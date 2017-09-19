class HelloWorld extends React.Component{
    render(){
        return(            
            <h1>Hello World {this.props.Name}</h1>
        );
    }
}

ReactDOM.render(<HelloWorld Name="Manh Le"/>,document.getElementById("DOM"));