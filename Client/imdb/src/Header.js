import './Header.css';
import humburger from './Images/Hamburger_icon.svg.png'
import imdbLogo from './Images/IMDB_logo.png';


export default function Header() {
    return(

        <ul class='nav-container nav-ul'>
            <li className='imdb'>
                <img className='imdb-logo' src={imdbLogo}/>
            </li>
            <li className='humburger'>
                <div>
                    <img className='humburger-logo' src={humburger}/>
                    
                </div>
                
            </li>
            <li className='search'>
                <div className='search-area'>

                </div>
            </li>
        </ul>

        

    )
}