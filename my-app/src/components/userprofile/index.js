import './index.css'
//import '../../App.css'

const UserProfile = (props) => {
    const {userDetails, onDelete} = props;
    const {UNO, name, profession, age, profileImage} = userDetails;

    const onDeleteUser =() =>{
      onDelete(UNO);
    }
    return (
      <div className="user-card-container">
        <img src={profileImage} className="avatar" alt='avatar' />
        <div>
          <h1 className='user-name'>{name}</h1>
          <p className='user-profession'>{profession}</p>
          <p className='user-age'>{age}</p>
        </div>
        <button type='button' onClick={onDeleteUser} className="delete-button">
        <img
          src="https://assets.ccbp.in/frontend/react-js/cross-img.png"
          alt="cross"
          className="delete-img"
        />
        </button>
      </div>
    );
  }
  

export default UserProfile;