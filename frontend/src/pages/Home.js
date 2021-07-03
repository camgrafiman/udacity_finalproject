import React, { useState, useEffect } from 'react'
import axios from 'axios'
const apiEndpoint = process.env.REACT_APP_BACKEND_API_URL; // http://localhost:5000/api

export default function Home({ isAuthenticated }) {
    const [homeData, setHomeData] = useState()
    
    // console.log(apiEndpoint)

    useEffect(() => {
        console.log("useEffect fired!")
        axios.get(`${apiEndpoint}`).then(res => {
            const data = res.data;
            setHomeData(data);
        })
        return () => {
            console.log("Home unmounted.")
        }
    }, [])

    console.log(isAuthenticated ? 'Yes, authenticated': 'not authenticated')
    return (
        <div className="home">
            <h6>Home</h6>
            <br />
            <pre>Info from the "/api" main endpoint </pre>
            <code>
                   { JSON.stringify(homeData, 2, null)}
            </code>
            
            <p>Welcome to my app. please<span className="sub">register</span> to access this information:</p>
            <ul>
                <li>Characters</li>
                <li>Shows</li>
                <li>Categories</li>
            </ul>
            
                
            
        </div>
    )
}