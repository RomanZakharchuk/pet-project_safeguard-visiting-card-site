import { Outlet } from 'react-router-dom';

import { Header } from '../../components';


const Banner = () => {
    return (
        <div className='bg-yellow'>
            <Header />
            <Outlet />
        </div>
    )
}

export { Banner };