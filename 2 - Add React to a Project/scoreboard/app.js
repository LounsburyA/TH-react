
const Header = () => {
    return(
<header>
<h1>Scoreboard</h1>
<span className ="stats">Players: 1</span>
</header>

    );
}
const Player = () => {
    return (
<div className= "player-name">
<span className="player-name">
Andrew
</span>

<div className="counter">

    </div>
</div>
    )
}

ReactDOM.render(
<Header />,
document.getElementById('root')
);
