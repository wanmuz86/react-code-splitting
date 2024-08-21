
import React, { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ErrorBoundary from './ErrorBoundary';
import { Link } from 'react-router-dom';
// import ComponentA from './ComponentA';
// import ComponentB from './ComponentB';

// Normal loading
// import Home from './Home';
// import About from './About';

/// React Lazy load
const Home = React.lazy(() => import('./Home'))
const About = React.lazy(() => import('./About'))
const ComponentA = React.lazy(() => import('./ComponentA'))
const ComponentB = React.lazy(() => import('./ComponentB'))
// WHen you use lazy load, this needs to be inside <Suspense>


const Navigation = () => {
    return (
        <div>
            <h1>React-based Code Splitting on Route</h1>

            <Router>
                <ul>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/about'}>About</Link></li>
                    <li><Link to={'/component1'}>Component A</Link></li>
                    <li><Link to={'/component2'}>Component B</Link></li>
                </ul>
                <ErrorBoundary>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path='/about' element={<About />} />
                            <Route path='/component1' element={<ComponentA />} />
                            <Route path='/component2' element={<ComponentB />} />
                        </Routes>
                    </Suspense>
                </ErrorBoundary>
            </Router>
        </div>
    )
}

export default Navigation