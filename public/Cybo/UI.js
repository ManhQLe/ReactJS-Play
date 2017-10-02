class BoardUI extends React.Component{
    state = {
        selectedNumbers:[1,3]
    }

    selectNumber = (n)=>{
        if(this.state.selectedNumbers.indexOf(n)>=0)
        return;
        this.state.selectedNumbers.push(n);
        this.setState(c =>{
            selectedNumbers: c.selectedNumbers
        })
    }

    onSelectNumber = (e)=>{
        var x = e.target;
        var n = parseInt(x.innerText);
        if(isNaN(n))
            return;
        
        this.selectNumber(n);
    }

    render(){
        var {selectedNumbers} = this.state;

        return (
        <div className="BOARD" onClick={this.onSelectNumber}>
            <div className="ROW">
                <div data-selected={selectedNumbers.indexOf(1)>=0}>1</div>
                <div data-selected={selectedNumbers.indexOf(2)>=0}>2</div>
                <div data-selected={selectedNumbers.indexOf(3)>=0}>3</div>
            </div>
            <div className="ROW">
                <div data-selected={selectedNumbers.indexOf(4)>=0}>4</div>
                <div data-selected={selectedNumbers.indexOf(5)>=0}>5</div>
                <div data-selected={selectedNumbers.indexOf(6)>=0}>6</div>
            </div>
            <div className="ROW">
                <div data-selected={selectedNumbers.indexOf(7)>=0}>7</div>
                <div data-selected={selectedNumbers.indexOf(8)>=0}>8</div>
                <div data-selected={selectedNumbers.indexOf(9)>=0}>9</div>
            </div>
            <div className="ROW">
                <div data-selected={selectedNumbers.indexOf(10)>=0}>10</div>
                <div data-selected={selectedNumbers.indexOf(11)>=0}>11</div>
                <div data-selected={selectedNumbers.indexOf(12)>=0}>12</div>
            </div>            
        </div>)
    }
}

class CyboGameUI extends React.Component{
    render(){
        return <BoardUI/>
    }
}

ReactDOM.render(<CyboGameUI/>,document.getElementById("DOM"));