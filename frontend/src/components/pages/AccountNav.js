import {Link} from 'react-router-dom';
import { ShadowBox } from '../globalStyles';

function AccountNav(props) {
    return (
        <ShadowBox padding='2vmin'>
            <Link to={`/account-${props.name}`}>My Profile</Link> <br />
            <Link to={`/account-${props.name}`}>Events</Link> <br />
            <Link to={`/account-${props.name}`}>Notifications</Link> <br />
            <Link to={`/account-${props.name}`}>Favourites</Link> <br />
            <Link to={`/account-${props.name}`}>Settings</Link> <br />
            <Link to={`/account-${props.name}`}>Payment</Link> <br />
            <Link to={`/account-${props.name}`}>Help</Link> <br />
            <Link to={`/account-${props.name}`}>Logout</Link> <br />
        </ShadowBox>
    );
  }
  
  export default AccountNav;
  