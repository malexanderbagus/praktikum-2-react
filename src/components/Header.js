import { Close, MenuOutlined } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import React,{useState} from 'react'
import icon from './assets/icon2.png'
import './styles/Header.css'

const Header = () => {

    const [active,setActive] = useState(false)

    const showUl = () => {
        setActive(!active)
    }

    return (
        <div className='header'>
            
                <div className="header__logo">
                    <img src={icon} alt="" />
                </div>

                <div className="menu__icon">
                    <MenuOutlined className='menu' onClick={showUl}/>
                </div>


 

                <nav>

                    <ul className={active ? 'list__items active' : 'list__items'}>

                    <div className="close__icon">
                     <Close className='close' onClick={showUl}/>
                        </div>



                            <li><Link to='/'>Home</Link></li>

                            <li><Link to='/'>Designs</Link></li>

                            <li><Link to='/'>Works</Link></li>

                            <li><Link to='/'>About</Link></li>

                            <li><Link to='/'>Contact</Link></li>

                    </ul>


                </nav>


        </div>
    )
}

export default Header
