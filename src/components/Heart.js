import HeartLogo from '../assets/heart.svg';
import '../App.css';

const Heart = (props) => {
    return (
        <div className='heart'>
          <img className='heart-image' src={HeartLogo} alt='heart'/>
          <p className='heart-message'>{props.msg}</p>
        </div>
    );
};

export default Heart;