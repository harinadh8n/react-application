import { Component } from "react";


class WelcomeWithProps extends Component{
    render(){
        const {name, profession} = this.props;
        return (
            <div>
                <h1>Hi, {name}</h1>
                <p>and working as a {profession}</p>
            </div>
        );
    };
}


export default WelcomeWithProps;