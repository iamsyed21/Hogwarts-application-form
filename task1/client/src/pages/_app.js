import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import '@/styles/globals.scss'
import '@/styles/toggleSwitch.scss'
import { ThemeProvider } from '@/context/theme/ThemeContext.jsx';
import { UserProvider } from '@/context/user/UserContext.jsx';
import { ToastContainer } from 'react-toastify';


export default function App({ Component, pageProps }) {
  return (
  <ThemeProvider><UserProvider><Component {...pageProps} /><ToastContainer /></UserProvider></ThemeProvider> 
  );
}
