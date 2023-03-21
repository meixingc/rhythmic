import {useNavigate} from 'react-router-dom'
import SearchBar from './SearchBar'
import { Link } from 'react-router-dom'

export default function Nav() {
    let navigate = useNavigate()
    return (
        <div className="nav">
            <div className='nav-left'>
                <SearchBar />
            </div>
            <div className="nav-center">
                <img className="logo" src="/images/rhythmic.png" alt="" />
                <div className="center-bottom">
                    <button className="registerbtn" onClick={() => navigate('/register')}>What's Your Rhythm?</button>
                </div>
            </div>
            <div className='nav-right'>
                <Link className='nav-right-buttons' onClick={()=>navigate('/')}>Home</Link>
                <Link className='nav-right-buttons' onClick={()=>navigate('/profile')}>Profile</Link>
                <Link className='nav-right-buttons' onClick={()=>navigate('/signin')}>Sign in</Link>
            </div>
        </div>
    )
}
