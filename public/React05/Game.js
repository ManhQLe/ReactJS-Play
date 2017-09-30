
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
            <i className="fa fa-check" onClick={props.acceptevent}></i>
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
            <br/>
            <br/>
            <button onClick={props.redraw} disabled={props.redraws<=0}>
                <i className="fa fa-refresh"></i> {props.redraws}
            </button>
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
        if(props.usedNumbers.indexOf(x)>=0)
            return "selected"
        return props.selected.indexOf(x) >=0 ?'select':''
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
        selectedNumbers: [],
        NoOfStars:1+Math.floor(Math.random()*9),
        IsAnwserCorect:null,
        usedNumbers:[],
        redraws:5
    }        

    redraw=()=>{
        this.setState(curr=>({
            NoOfStars:1+Math.floor(Math.random()*9),
            IsAnwserCorect:null,
            selectedNumbers:[],
            redraws:curr.redraws-1
        }))
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
            IsAnwserCorect:null,
            selectedNumbers: X
        })
    }

    updateDone = ()=>{
        this.setState(cur =>({
            
        }));
    }

    acceptAnswer = ()=>{
        this.setState(curr=>({            
            usedNumbers:curr.usedNumbers.concat(curr.selectedNumbers),
            selectedNumbers:[],
            IsAnwserCorect:null,
            NoOfStars:1+Math.floor(Math.random()*9)
        }));
    }

    render(){
        let {selectedNumbers, NoOfStars,IsAnwserCorect,usedNumbers,redraws } = this.state;

        return (
            <div>
                <h3>Play Nine</h3>
                <hr/>
                <div style={{display:'flex'}}>
                    <Stars NOS={NoOfStars}/>
                    <Button redraws={redraws} redraw={this.redraw} IsCorrect={IsAnwserCorect} CheckAnswer={this.checkAnswer} selectednumbers={selectedNumbers} acceptevent={this.acceptAnswer} clickevent={this.ClickedEvent}/>
                    <Answer selectevent={this.SelectNumber}  selected={selectedNumbers}/>
                </div>
                <br/>
                <Numbers usedNumbers={usedNumbers} selectevent={this.SelectNumber} selected={selectedNumbers}/>    
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