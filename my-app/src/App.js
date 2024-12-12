import './App.css';
import Counter from './components/classcomponents/countercomponent'


function App(){
  return(
    <Counter/>
  );
};

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
*/