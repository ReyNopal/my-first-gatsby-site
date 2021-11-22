import { StrictMode } from "react";
//import ReactDOM from "react-dom";
import * as React from 'react'
import App from "../components/App";
import Layout from '../components/layout'


const chart = () => {

    return (
    <Layout pageTitle="Bar Chart using Rumble Charts">
    <p>Amount of Classes Taken Per Term</p>
    <p>Red = Spring, Blue = Summer, Green = Fall</p>
    <p>5 --- 2 --- 3-------------------------4 --- 2 --- 4-----------------4 --- 1 --- 5</p>
    <StrictMode>
        <App />
    </StrictMode>
    <p>------------2019-------------------------2020-------------------------2021-----------</p>
    
    </Layout>

    )

}

export default chart