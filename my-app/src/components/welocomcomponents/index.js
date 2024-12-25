import { Component } from "react";


class Welocme extends Component{
    render(){
        const {name, greeting} = this.props;
        return (<h1>{greeting}, {name}</h1>);
    }
}

Welocme.defaultProps ={
    name : 'Hari',
    greeting : 'Hello'
}

export default Welocme
























































