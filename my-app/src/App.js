import './App.css';
import { Component } from 'react';
import Welocme from './components/welocomcomponents/index'

class App extends Component{
  state = {isLogged : true};

  render(){
    const {isLogged} = this.state;
    let authButton = isLogged?(<button type='button'>Logout</button>):(<button type='button'>LogIn</button>)
    return (
      <div>
        <Welocme greeting="Hi"/>
        {authButton}
      </div>
    )
  }
}

export default App;

/*
________________________________
Components and Props(Properties)
--------------------------------
import UserProfile from './components/userprofile';

const userDetails = [
    {
      name: 'Harinadh',
      age: 24,
      profession: 'SDE at Infosys',
      profileImage: 'https://randomuser.me/api/portraits/men/1.jpg'
    },
    {
      name: 'Anjali',
      age: 28,
      profession: 'Product Manager at Google',
      profileImage: 'https://randomuser.me/api/portraits/women/1.jpg'
    },
    {
      name: 'Rajesh',
      age: 30,
      profession: 'UX Designer at Adobe',
      profileImage: 'https://randomuser.me/api/portraits/men/2.jpg'
    },
    {
      name: 'Sneha',
      age: 26,
      profession: 'Data Scientist at Amazon',
      profileImage: 'https://randomuser.me/api/portraits/women/2.jpg'
    },
    {
      name: 'Vikram',
      age: 32,
      profession: 'DevOps Engineer at Microsoft',
      profileImage: 'https://randomuser.me/api/portraits/men/3.jpg'
    }
  ];

  return (
    <div className='list-container'>
      <h1 className='title'>Users List</h1>
      <ul>
        {userDetails.map((user, index) => (
          <li key={index}>
            <UserProfile {...user} />
          </li>
        ))}
      </ul>
    </div>
  );
*/

/*
________________________________
Class level components and props
--------------------------------
import Welcome from './components/classcomponents/practicecomponents/index';
import WelcomeWithProps from './components/classcomponents/practicecomponents/indexwithprops';

 return (
    <dive>
      <Welcome/>
      <WelcomeWithProps name="hari" profession="SDE"/>
    </dive>
  );



------------------------
COunter App
__________________________
import Counter from './components/classcomponents/countercomponent'


 return(
    <Counter/>
  );

______________________________
Conditional and default props
------------------------------------
STEP 1: usinf functional if eles

  state = {isLogged : false};

  ButtonSelect = () => {
    const {isLogged} = this.state;
    if(isLogged){
      return (<button type='button'>Logout</button>)
    }
    return (<button type='button'>LogIn</button>)
  }
  render(){
    return (
      <div>
        <Welocme greeting="Hi"/>
        {this.ButtonSelect()}
      </div>
    )
  }
_____________________________________________________
STEP 2: Using conditional operator

class App extends Component{
  state = {isLogged : true};

  render(){
    const {isLogged} = this.state;
    return (
      <div>
        <Welocme greeting="Hi"/>
        {isLogged?(<button type='button'>Logout</button>):(<button type='button'>LogIn</button>)}
      </div>
    )
  }

}
________________________________________________
STEP 3: Variable usage

class App extends Component{
  state = {isLogged : true};

  render(){
    const {isLogged} = this.state;
    let authButton = isLogged?(<button type='button'>Logout</button>):(<button type='button'>LogIn</button>)
    return (
      <div>
        <Welocme greeting="Hi"/>
        {authButton}
      </div>
    )
  }
}


  */


