import Signin from '../screen/auth/signin';
import Signup from '../screen/auth/signup';
import Splash from '../screen/auth/splash';
import Chats from '../screen/chats';
import Groups from '../screen/groups';
import Home from '../screen/home';
import Followers from '../screen/home/followers';
import Follows from '../screen/home/follows';
import ProfileDetail from '../screen/home/profileDetail';
import Searchs from '../screen/search';
import TabNav from './tab-nav';

const tabNav = [
  {
    name: 'Home',
    path: Home,
  },
  {
    name: 'Searchs',
    path: Searchs,
  },
  {
    name: 'Groups',
    path: Groups,
  },
  {
    name: 'Chats',
    path: Chats,
  },
];
const stackNav = [
  {
    name: 'Splash',
    path: Splash,
  },
  {
    name: 'Signin',
    path: Signin,
  },
  {
    name: 'Signup',
    path: Signup,
  },
  {
    name: 'TabNav',
    path: TabNav,
  },
  {
    name: 'Follows',
    path: Follows,
  },
  {
    name: 'Followers',
    path: Followers,
  },
  {
    name: 'ProfileDetail',
    path: ProfileDetail,
  },
];
export {tabNav, stackNav};
