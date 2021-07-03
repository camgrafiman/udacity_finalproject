import React, {useState, useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import {useForm} from 'react-hook-form'

const apiEndpoint = process.env.REACT_APP_BACKEND_API_URL;

export default function Shows () {
    const [data, setData] = useState("")
    const [postError, setPostError] = useState(false)
    const [updateError, setUpdateError] = useState(false)
    const [deleteError, setDeleteError] = useState(false)
    const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
    /* FORM POST / CREATE */
    const { register, errors, handleSubmit } = useForm({ mode: "onBlur" });
    /* FORM PATCH / UPDATE */
    const { register:register2, errors:errors2, handleSubmit:handleSubmit2 } = useForm({ mode: "onBlur" });
    /* FORM DELETE  */
    const { register:register3, errors:errors3, handleSubmit:handleSubmit3 } = useForm({mode: "onBlur"});


    /* TO GET ENDPOINTS WITH NO AUTH REQUIRED. */
    const getData = async () => {
        try {
            const response = await fetch(`${apiEndpoint}/shows`);
            const responseData = await response.json();
            setData(responseData)
        }
        catch (error) {
            setData(error.message)
        }
    }
    /* GET METHOD */
    const getSecuredData = async () => {
        try {
            const token = await getAccessTokenSilently();
            const response = await fetch(`${apiEndpoint}/shows`, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                }
            });
            const responseData = await response.json();
            setData(responseData)
            console.log(responseData)
        }
        catch (error) {
            setData(error.message)
        }
    }
    const getSecuredDataFull = async () => {
        try {
            const token = await getAccessTokenSilently();
            const response = await fetch(`${apiEndpoint}/shows`, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                }
            });
            const responseData = await response.json();
            setData(responseData)
            console.log(responseData)
        }
        catch (error) {
            setData(error.message)
        }
    }


    /* POST METHOD */
    const postSecuredData = async (data) => {
        let payload = {
            "title": data.title,
            "show_type": data.show_type,
            "show_description": data.show_description,
            "release_date": parseInt(data.release_date),
            "rating": parseFloat(data.rating)
        }
        
        try {
            const token = await getAccessTokenSilently();
            const response = await fetch(`${apiEndpoint}/shows`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify(payload)
            });
            const responseData = await response.json();
            
            if (responseData.error || responseData.success === false) {
                setPostError(true)
            }
            else {
                setData(responseData)
                console.log(responseData)
            }
        }
        catch (error) {
            console.log(error)
        }
    }

    const updateSecuredData = async (data) => {
        let item_to_update = data.item_to_update;
         let payload = {
            "title": data.title,
            "show_type": data.show_type,
            "show_description": data.show_description,
            "release_date": parseInt(data.release_date),
            "rating": parseFloat(data.rating)
        }
        
        try {
            const token = await getAccessTokenSilently();
            const response = await fetch(`${apiEndpoint}/shows/${item_to_update}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify(payload)
            });
            const responseData = await response.json();
            
            if (responseData.error || responseData.success === false) {
                setUpdateError(true)
            }
            else {
                alert("data changed sucesfully")
                // setData(responseData)
                console.log(responseData)
            }
        }
        catch (error) {
            console.log(error)
        }
    }

    const deleteSecuredData = async (data) => {

        try {
            const token = await getAccessTokenSilently();
            const response = await fetch(`${apiEndpoint}/shows/${data.item_id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify(data)
            });
            const responseData = await response.json();
            
            if (responseData.error || responseData.success === false|| responseData.status_code === 403) {
                setDeleteError(true)
            }
            else {
                alert("show data deleted " , data.item_id)
                // setData(responseData)
                console.log(responseData)
            }
        }
        catch (error) {
            console.log(error)
        }
    }

    

    console.log(isAuthenticated ? 'Yes, authenticated' : 'not authenticated')
    
    return (
        <div className="shows">
            <h3>Shows</h3>
            <div className="row">
                <div className="column" >
                    <h2>READ</h2>
                    <button className="button" onClick={() => getSecuredDataFull()}>Get shows Secured Data - Full info:</button>
                    <ul>
                        {data.shows ? data.shows.map((item, index) => (
                            
                            <li key={index}>  id: {item.id } | title: { item.title} | show type: {item.show_type} | description: {item.show_description} | release date: {item.release_date} | rating: {item.rating} </li>

                        )) : <li key={1}>Click up to retrieve information</li>}
                        
                    </ul>
                    
                    
                </div>
                <div className="column" >
                    <h2>CREATE</h2>
                    <form id="create" onSubmit={handleSubmit(postSecuredData)}>
                        <label htmlFor="title">Title:</label>
                        <input name="title" type="text" {...register("title")} required />
                        <label htmlFor="show_type">Show Type:</label>
                        <input name="show_type" type="text" {...register("show_type")} required />
                        <label htmlFor="description">Description:</label>
                        <input name="show_description" type="text" {...register("show_description")} required />
                        <label htmlFor="release_date">Release date (year):</label>
                        <input name="release_date" type="number" {...register("release_date")} required />
                        <label htmlFor="rating">Rating</label>
                        <input name="image" type="range" step="0.1" min="0.0" max="5.0" {...register("rating")} required />
                        
                        <input className="button" type="submit" value="Post show" />
                    </form>
                    {postError ? <>
                        <p className="error">Fetch Failed, You don't have permissions.</p>
                        
                    </> : null}
                </div>
                <div className="column" >
                    <h2>UPDATE</h2>
                    <form id="update" onSubmit={handleSubmit2(updateSecuredData)}>
                        <label htmlFor="item_to_update">Show ID to update:</label>
                        <input name="item_to_update" type="number" {...register2("item_to_update")} required />
                        <label htmlFor="title">Title:</label>
                        <input name="title" type="text" {...register2("title")} required />
                        <label htmlFor="show_type">Show Type:</label>
                        <input name="show_type" type="text" {...register2("show_type")} required />
                        <label htmlFor="description">Description:</label>
                        <input name="show_description" type="text" {...register2("show_description")} required />
                        <label htmlFor="release_date">Release date (year):</label>
                        <input name="release_date" type="number" {...register2("release_date")} required />
                        <label htmlFor="rating">Rating</label>
                        <input name="image" type="range" step="0.1" min="0.0" max="5.0" {...register2("rating")} required />
                        <input className="button" type="submit" value="Update show" />
                    </form>
                    {updateError ? <>
                        <p className="error">Fetch Failed, You don't have permissions.</p>
                        
                    </> : null}
                </div>
                <div className="column" >
                    <h2>DELETE</h2>
                    <form id="delete" onSubmit={handleSubmit3(deleteSecuredData)}>
                        <label htmlFor="number">Select id to delete</label>
                        <input type="number" {...register3("item_id")} required />
                        <input className="button buttonred" type="submit" value="Delete category" />
                    </form>
                    {deleteError ? <>
                        <p className="error">Fetch Failed, You don't have permissions.</p>
                        
                    </> : null}

                    
                </div>
            </div>

        </div>
    )
}