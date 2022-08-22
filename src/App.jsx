import { Routes, Route } from 'react-router-dom';

import { Layout } from './components';
import { Home, AboutUs, WhatWeDo } from './pages';

const App = () => {

    return (
        <div>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route path={'/'} element={<Home />} />
                    <Route path={'/about-us'} element={<AboutUs />} />
                    <Route path={'/what-we-do'} element={<WhatWeDo />} />
                </Route>
            </Routes>
        </div>
    )
}

export { App };
