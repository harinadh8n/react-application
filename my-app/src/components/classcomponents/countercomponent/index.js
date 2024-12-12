import { Component } from "react";
import './index.css'


class Counter extends Component {
    state = { counter: 0 };

    onIncrement = () => {
        this.setState(prevState => {
            console.log(`Previous number is ${prevState.counter} before increasing`);
            return { counter: prevState.counter + 1 };
        });
    }

    onDecrement = () => {
        this.setState(prevState => {
            console.log(`Previous number is ${prevState.counter} before decreasing`);
            return { counter: prevState.counter - 1 };
        });
    }

    render() {
        const { counter } = this.state;
        return (
            <div className="counter-container">
                <h1>Counter App</h1>
                <p className="counter-display">{counter}</p>
                <div>
                    <button className="counter-button" onClick={this.onIncrement}>Increase</button>
                    <button className="counter-button" onClick={this.onDecrement}>Decrease</button>
                </div>
            </div>
        );
    }
}

export default Counter;