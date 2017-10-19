import { StackNavigator } from 'react-navigation'
import LaunchScreen from '../Containers/LaunchScreen'
import { TabNavigator } from "react-navigation"
import styles from './Styles/NavigationStyles'
import Tab1Screen from '../Containers/Tab1Screen'
// import TAB2 from '../Containers/TAB2'
// import TAB3 from '../Containers/TAB3'


const MainTabs = TabNavigator({
  Tab1Scree1n: { screen: Tab1Screen,
    navigationOptions: {
      title: '111',
    },},
  Tab1Screen2: { screen: Tab1Screen },
})
// Manifest of possible screens
const PrimaryNav = StackNavigator({
  LaunchScreen: { screen: LaunchScreen },
  Te: { screen: Tab1Screen },
  MainTabs: { screen: MainTabs }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'LaunchScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
