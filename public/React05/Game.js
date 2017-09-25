
const Stars = (props)=>{
    return (
        <div>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
        </div>
    )
}

const Button = (props)=>{
    return (
        <div>
            <button>=</button>
        </div>
    )
}

const Answer = (props)=>{
    return (
        <div>
            Answer
        </div>
    )
}

const Numbers = (props)=>{
    return(
        <div className=''>
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
            <span>6</span>
            <span>7</span>
            <span>8</span>
            <span>9</span>
            <span>10</span>
            
        </div>
    )

}

class Game extends React.Component{
    render(){
        return (
            <div>
                <h3>Play Nine</h3>
                <hr/>
                <div style={{display:'flex'}}>
                    <Stars/>
                    <Button/>
                    <Answer/>
                </div>
                <br/>
                <Numbers/>    
            </div>
        )
    }
}

class App extends React.Component{
    render(){
        return (
            <div>
                <Game/>
            </div>
        )
    }
}


ReactDOM.render(<App/>,document.getElementById("DOM"));