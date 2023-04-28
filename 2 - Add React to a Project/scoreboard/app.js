
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
    return (
        <div className="player">
            <span className="player-name">
                {props.name}
            </span>
            <Counter />
        </div>
    );
}


class Counter extends React.Component {
    state = {
        score: 0
    };


    incrementScore = () => {
        // console.log('hi from inside increment score');
        this.setState(prevState => ({
            score: prevState.score + 1

        }));
    };


    decrementScore = () => {
        // console.log('hi from inside decrement score');
        this.setState(prevState => ({

            score: prevState.score - 1


        }));
    };


    render() {
        return (
            <div className="counter">
                <button className="counter-action decrement" onClick={this.decrementScore} > - </button>
                <span className="counter-score">{this.state.score}</span>
                <button className="counter-action increment" onClick={this.incrementScore}> + </button>
            </div>
        );
    }
}

class App extends React.Component {

    state ={
        players:[
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
                        key={player.id.toString()}
                    />
                )}

            </div>
        )
    }
}


ReactDOM.render(
    <App  />,


    document.getElementById('root')
);
