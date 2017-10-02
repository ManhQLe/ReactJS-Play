function Dice12() {}

Dice12.prototype.Roll = function () {
    return 1 + Math.random() * 12;
}


function Player(level) {
    this.Level = level;
    this.Turns = level < 1 ? 4 : 3;
    this.DrawCard = new DrawCard()
}



function DrawCard() {
    this.Draws = [];
}

DrawCard.prototype.AddDraws = function (d) {
    this.Draws.push(d);
}

function ScoreEngine() {

}

ScoreEngine.prototype.Score = function (player) {

}

