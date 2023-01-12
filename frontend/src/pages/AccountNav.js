import {Link} from 'react-router-dom';
import { ShadowBox } from './globalStyles';

function AccountNav() {
    return (
        <ShadowBox padding='2vmin'>
            <Link to='/account'>My Profile</Link> <br />
            <Link to='/account'>Events</Link> <br />
            <Link to='/account'>Notifications</Link> <br />
            <Link to='/account'>Favourites</Link> <br />
            <Link to='/account'>Settings</Link> <br />
            <Link to='/account'>Payment</Link> <br />
            <Link to='/account'>Help</Link> <br />
            <Link to='/account'>Logout</Link> <br />
        </ShadowBox>
    );
  }
  
  export default AccountNav;
  