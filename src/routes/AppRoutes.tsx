import { useRoutes} from 'react-router-dom';
import App from "../App";
import LoginForm from '../components/LoginForm';


export const AppRoutes = () => {
    const Routes = useRoutes([
        {path: '/',
             element: <App/>,
        },
        {path: '/Login',
             element: <LoginForm/>,
        },
    ]);
  return Routes;
};