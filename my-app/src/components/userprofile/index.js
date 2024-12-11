import './index.css'

const UserProfile = ({ profileImage, name, age, profession }) => {
    return (
      <div className="user-card-container">
        <img src={profileImage} className="avatar" alt='avatar' />
        <div>
          <h1 className='user-name'>{name}</h1>
          <p className='user-profession'>{profession}</p>
          <p className='user-age'>{age}</p>
        </div>
      </div>
    );
  }
  

export default UserProfile;