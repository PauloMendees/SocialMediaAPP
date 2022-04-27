/**
 * @format
 * @Override protected void onCreate(Bundle savedInstanceState) { super.onCreate(null); }
 */
 import {AppRegistry} from 'react-native';
 import App from './src/App';
 import {name as appName} from './app.json';
 
 AppRegistry.registerComponent(appName, () => App);
 