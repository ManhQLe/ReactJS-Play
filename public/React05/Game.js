
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
    let button;
    switch(props.IsCorrect){
        case true:
        button = <button>
            <i className="fa fa-check"></i>
        </button>
        break;
        case false:
        button = <button>
        <i className="fa fa-times"></i>
        </button>
        break;
        default:
        button = <button onClick={props.CheckAnswer} disabled={props.selectednumbers.length ==0}>=</button>
        break;        

    }

    return (
        <div>
            {button}
        </div>
    )
}

const Answer = (props)=>{
    return (
        <div className="NUMBERS">
        {
            props.selected.map((x) =>{
                return <span onClick={()=>{props.selectevent(x,false)}}>{x}</span>
            })
        }
        </div>
    )
}

const Numbers = (props)=>{

    const CheckStatus=(x)=>{
        return props.selected.indexOf(x) >=0 ?'used':''
    }
    console.log("NumberRender")
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
        selectedNumbers: [],
        NoOfStars:1+Math.floor(Math.random()*9),
        IsAnwserCorect:null
    }        

    ClickedEvent=(event)=>{
       
    }
    checkAnswer =()=>{
        this.setState(curr =>(
            {IsAnwserCorect : curr.selectedNumbers.reduce((a,b)=>a+b,0) == curr.NoOfStars}
        ));
    }
    SelectNumber=(n,y)=>{
        y = y===undefined?true:false;
        let X = this.state.selectedNumbers;
        let idx = X.indexOf(n);
        if(y){
            if(idx<0)
                X.push(n);
        }
        else
            if(idx>=0)
            X.splice(X.indexOf(n),1);

        this.setState({
            selectedNumbers: X
        })
    }

    render(){
        let {selectedNumbers, NoOfStars,IsAnwserCorect } = this.state;

        return (
            <div>
                <h3>Play Nine</h3>
                <hr/>
                <div style={{display:'flex'}}>
                    <Stars NOS={NoOfStars}/>
                    <Button IsCorrect={IsAnwserCorect} CheckAnswer={this.checkAnswer} selectednumbers={selectedNumbers} clickevent={this.ClickedEvent}/>
                    <Answer  selectevent={this.SelectNumber}  selected={selectedNumbers}/>
                </div>
                <br/>
                <Numbers selectevent={this.SelectNumber} selected={selectedNumbers}/>    
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