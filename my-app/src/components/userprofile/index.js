import './index.css'

const UserProfile = (userDetails) =>{
    const {profileImage,name,age,profession} = userDetails;
    return (
        <li className="user-card-container">
            <img src={profileImage} className="avatar" alt='avatar'></img>
            <div>
                <h1 className='user-name'>{name}</h1>
                <p className='user-profession'>{profession}</p>
                <p className='user-age'>Age : {age}</p>
            </div>
        </li>
    );
}

export default UserProfile;