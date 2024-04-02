
import { Outlet } from 'react-router-dom';
import Home from '../home/Home';
import Login from '../Login/Login';
import Header from '../Header/Header';
const Root = () => {
    return (
        <div>
            
            <Header></Header>
           <Outlet> </Outlet> 
           
        </div>
    );
};

export default Root;