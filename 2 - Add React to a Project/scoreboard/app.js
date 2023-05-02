
const Header = (props) => {
    console.log(props);

    return (
        <header>
            <h1>{props.title}</h1>
            <span className="stats">Players: {props.totalPlayers}</span>
        </header>
    );
}

const Player = (props) => {
    console.log(props.removePlayer);

    return (
        <div className="player">
            <span className="player-name">
                <button className="remove-player" onClick={() => props.removePlayer(props.id)}>✖</button>
                {props.name}
            </span>
            <Counter />
        </div>
    );
}


const Counter = () => {
    // new way with hooks
    const [score, setScore] = React.useState(0);
//old way
    // state = {
    //     score: 0
//};


const incrementScore = () => {
    setScore(prevScore => prevScore + 1)
    // console.log('hi from inside increment score');
    // this.setState(prevState => ({
    //     score: prevState.score + 1
    // }));
};


const decrementScore = () => {
    setScore(prevScore => prevScore - 1)
    // console.log('hi from inside decrement score');
    // this.setState(prevState => ({
    //     score: prevState.score - 1
};




    return (
        <div className="counter">
            <button className="counter-action decrement" onClick={() => decrementScore()} > - </button>
            <span className="counter-score">{score}</span>
            <button className="counter-action increment" onClick={() => incrementScore()}> + </button>
        </div>
    );

    };

class App extends React.Component {

    state = {
        players: [
            {
                name: "Andrew",
                id: 1
            },
            {
                name: "Treasure",
                id: 2
            },
            {
                name: "Ashley",
                id: 3
            },
            {
                name: "James",
                id: 4
            }
        ]
    }
    handleRemovePlayer = (id) => {
        this.setState(prevState => {
            return {
                players: prevState.players.filter(p => p.id !== id)
            }

        })
    }

    render() {
        return (
            <div className="scoreboard">
                <Header title="scoreboard"
                    totalPlayers={this.state.players.length}
                />


                {/*Players list */}
                {this.state.players.map(player =>
                    <Player
                        name={player.name}
                        id={player.id}
                        key={player.id.toString()}
                        removePlayer={this.handleRemovePlayer}
                    />
                )}

            </div>
        )
    }
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// ReactDOM.render(
//     <App  />,
//     document.getElementById('root')
// );
