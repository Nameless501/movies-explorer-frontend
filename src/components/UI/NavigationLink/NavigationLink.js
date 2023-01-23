import { NavLink } from 'react-router-dom';
import './NavigationLink.css';

function NavigationLink({ to, text }) {
    return (
        <NavLink
            to={to}
            className='navigation-link'
            activeClassName="navigation-link_active"
        >
            {text}
        </NavLink>
    );
}

export default NavigationLink;