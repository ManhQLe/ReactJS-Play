const Card = (props)=>{
    return (
        <div  style={{margin:'1em',display:'flex'}}>
            <img width='75' height='75' src={props.avatar_url}/>
            <div style={{display:'inline-block',marginLeft:10}}>
                <div style={{fontSize:'1.25em',fontWeight:'bold'}}>{props.name}</div>
                <div>{props.company}</div>
            </div>
        </div>
    )
}

const CardList = (props)=>{    

    return (
        <div>
            {props.Data.map(card=> <Card {...card}/>)}
        </div>
    )    
}

class Form extends React.Component{
    submitHandler=(event)=>{
        event.preventDefault();
        var e = this.refs.MyInput;        
        var pro = axios.get(`https://api.github.com/users/${e.value}`);
        pro.then(resp=>{
            this.props.Submit(resp.data);
        })
    }

    render(){
        return (
            <form onSubmit={this.submitHandler}>
                <input ref='MyInput' type='text' placeholder="Github username"/>
                <button type='submit'>Add Card</button>
            </form>                
        );
    }
}

class App extends React.Component{
    state = {
        Cards:[]
    }

    addNewCard=(info)=>{
        this.setState({
            Cards:this.state.Cards.concat(info)
        })
    }

    render(){
        return (
            <div>
                <Form Submit={this.addNewCard}/>
                <CardList Data={this.state.Cards}/>
            </div>
        )
    }
}

ReactDOM.render(<App/>,document.getElementById("DOM"));