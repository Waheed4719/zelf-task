import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Registration from './pages/Registration'
import Layout from './components/Layout'


const routeItems = [
    {
        route: '/',
        component: Home
    },
    {
        route: '/registration',
        component: Registration
    }
]

const RouteComponent = () => {
    return (
        <Layout>
            <Routes>
                {routeItems.map((item, index) => {
                    return <Route key={index} path={item.route} element={<item.component />} />
                })}
            </Routes>
        </Layout>
    )
}

export default RouteComponent