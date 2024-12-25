import './App.css';
import { Component } from 'react';
//import Weloc0me from './components/welocomcomponents/index';
import UserProfile from './components/userprofile';
import TabItems from './components/extras';


const initialUserDetails = [
  {
    UNO : 1,
    name: 'Harinadh',
    age: 24,
    profession: 'SDE at Infosys',
    profileImage: 'https://randomuser.me/api/portraits/men/1.jpg'
  },
  {
    UNO : 2,
    name: 'Anjali',
    age: 28,
    profession: 'Product Manager at Google',
    profileImage: 'https://randomuser.me/api/portraits/women/1.jpg'
  },
  {
    UNO : 3,
    name: 'Rajesh',
    age: 30,
    profession: 'UX Designer at Adobe',
    profileImage: 'https://randomuser.me/api/portraits/men/2.jpg'
  },
  {
    UNO : 4,
    name: 'Sneha',
    age: 26,
    profession: 'Data Scientist at Amazon',
    profileImage: 'https://randomuser.me/api/portraits/women/2.jpg'
  },
  {
    UNO : 5,
    name: 'Vikram',
    age: 32,
    profession: 'DevOps Engineer at Microsoft',
    profileImage: 'https://randomuser.me/api/portraits/men/3.jpg'
  }
];

const tabsList =[
  {
    tabID : 1,
    name:'STATIC'
  },
  {
    tabID : 1,
    name:'PROPER'
  },
  {
    tabID : 1,
    name:'DYNAMIC'
  }
]

const projectsList = [
  {
    projID:1,
    category:'STATIC',
    name:'MyWeb'
  },
  {
    projID:1,
    category:'PROPER',
    name:'MyWeb'
  },
  {
    projID:1,
    category:'DYNAMIC',
    name:'MyWeb'
  }
]

class App extends Component{
  
  state ={
    searchInput : "",
    userList : initialUserDetails,
    activeTabID : tabsList[0].tabID
  }

  getFilteredProjects = () =>{
    const {activeTabID} = this.state;
    const filteredProjects = projectsList.filter(
      eachProject => eachProject.category === activeTabID
    )
    return filteredProjects;
  }

  onSearchInputChange =(event) =>{
    console.log(event.target.value);
    this.setState({
      searchInput : event.target.value.toLowerCase(),
    });
  }

  OnDeleteUser = UNO => {
    console.log(`on delete triggered for the ${UNO}`);
    const {userList} = this.state;
    const filterData = userList.filter(user => user.UNO !== UNO);
    this.setState({
      userList:filterData
    });
  }

  updateActiveTabID =(tabId) =>{
    const {activeTabID} = this.state;// no need to call it.
    this.setState({
      activeTabID:tabId
    });
  }

  render(){  
    const {searchInput ,userList} = this.state;
    const filteredProj = this.getFilteredProjects();
    var filteredUserList = [];
    if(searchInput === ""){
      filteredUserList = userList;
    }else{
      filteredUserList = userList.filter(user =>
        user.name.toLowerCase().includes(searchInput)
      );
    }
    return (
      <div className='list-container'>
        <h1 className='title'>Users List</h1>
        <input type='search' className='search-user' onChange={this.onSearchInputChange}/>
        <ul>
          {filteredUserList.map((user, index) => (
            <li key={index}>
              <UserProfile userDetails={user} key={user.UNO} onDelete={this.OnDeleteUser}/>
            </li>
          ))}
        </ul>
        <div>
          {
            tabsList.map(
              tabItems =>(
                <TabItems
                tablDetails ={tablDetails}
                updateActiveTab = {this.updateActiveTabID}
                />
              )
            )
          }
          <div className='tab-details'>
             {
              filteredProj.map(
                proj =>(
                  <TabDetails
                    details = {proj}
                  />
                )
              )
             }
          </div>
        </div>
      </div>
    );
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


