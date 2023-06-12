import { createDrawerNavigator } from '@react-navigation/drawer';
import Routes from '../Utility/Routes';
import NewsFeed from '../Screen/NewsFeed';
import Articale from '../Screen/Articale';
import MyTab from './MyTab';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator >
      <Drawer.Screen name={Routes.HOME_DRAWER} component={MyTab} />
      <Drawer.Screen name={Routes.ARTICLE} component={Articale} />
    </Drawer.Navigator>
  );
}

export default MyDrawer;