
const Stars = (props)=>{    
    let stars = [];
    for(let i = 0;i<props.NOS;i++)
        stars.push(<i className="fa fa-star"></i>);

    return (
        <div>
            {stars}
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
        <div className="NUMBERS">
        {
            props.selected.map((x) =>{
                return <span>{x}</span>
            })
        }
        </div>
    )
}

const Numbers = (props)=>{

    const CheckStatus=(x)=>{
        return props.selected.indexOf(x) >=0 ?'used':''
    }

    return(
        <div className='NUMBERS'>
            {
                Numbers.List.map(x=>{
                    return <span onClick={()=>props.selectevent(x)} data-status={CheckStatus(x)}>{x}</span>
                })
            }
        </div>
    )

}

Numbers.List = [];
for(let i = 1;i<10;i++){
    Numbers.List.push(i);
}

class Game extends React.Component{
    state={
        selectedNumbers: [2,3],
        NoOfStars:1+Math.floor(Math.random()*9)
    }        

    ClickedEvent=(event)=>{
       
    }

    SelectNumber=(n)=>{
        let X = this.state.selectedNumbers;
        if(X.indexOf(n)<0){
            X.push(n);
            this.setState({
                selectedNumbers: X
            })
        }
    }

    render(){
        return (
            <div>
                <h3>Play Nine</h3>
                <hr/>
                <div style={{display:'flex'}}>
                    <Stars NOS={this.state.NoOfStars}/>
                    <Button clickevent={this.ClickedEvent}/>
                    <Answer selected={this.state.selectedNumbers}/>
                </div>
                <br/>
                <Numbers selectevent={this.SelectNumber} selected={this.state.selectedNumbers}/>    
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