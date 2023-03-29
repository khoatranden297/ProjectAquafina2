import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomePage from './HomePage';
import User from './Usermanual';
import Loading1 from './Loading1';
import Loading from './Loading';
import Start from './Start';
import Scan from './Scan';
import Thankyou  from './Thankyou';
const Stack = createStackNavigator();

const HomeNavigation:React.FC=()=>{
    return(
        <NavigationContainer>
            <Stack.Navigator>
           
        <Stack.Screen name='Home' component={HomePage}/>
        <Stack.Screen name="User" component={User} />
        <Stack.Screen name="Loading1" component={Loading1} />
        <Stack.Screen name="Loading" component={Loading} />
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="Scan" component={Scan} />
        <Stack.Screen name="Thankyou" component={Thankyou} />
    </Stack.Navigator>
    </NavigationContainer>
    
    )
}
export default HomeNavigation;