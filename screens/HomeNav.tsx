import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomePage from './HomePage';
import User from './Usermanual';
import Loading1 from './Loading1';
import Start from './Start';
const Stack = createStackNavigator();

const HomeNavigation:React.FC=()=>{
    return(
        <NavigationContainer>
            <Stack.Navigator>
        <Stack.Screen name='Home' component={HomePage}/>
        <Stack.Screen name="User" component={User} />
        <Stack.Screen name="Loading1" component={Loading1} />
        <Stack.Screen name="Start" component={Start} />
    </Stack.Navigator>
    </NavigationContainer>
    
    )
}
export default HomeNavigation;