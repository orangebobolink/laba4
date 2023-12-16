import MainStack from "./app/navigation/navigate"
import {DefaultTheme} from '@react-navigation/native';
import {ColorSchemeProvider} from './app/components/ColorSchemeContext';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(255, 45, 85)',
  },
};

export default function App() {
  return (
      <ColorSchemeProvider>
        <MainStack/>
      </ColorSchemeProvider>
  );
}