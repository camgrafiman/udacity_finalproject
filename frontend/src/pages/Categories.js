import React, {useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import {useForm} from 'react-hook-form'

const apiEndpoint = process.env.REACT_APP_BACKEND_API_URL;

export default function Categories() {
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
            const response = await fetch(`${apiEndpoint}/categories`);
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
            const response = await fetch(`${apiEndpoint}/categories`, {
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
            "cat_type": data.cat_type
        }
        console.log(payload)
        try {
            const token = await getAccessTokenSilently();
            const response = await fetch(`${apiEndpoint}/categories`, {
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
        console.log(data)
        let payload = {
            "cat_type": data.cat_type
        }
        try {
            const token = await getAccessTokenSilently();
            const response = await fetch(`${apiEndpoint}/categories/${data.item_id}`, {
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
                alert(responseData)
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
            const response = await fetch(`${apiEndpoint}/categories/${data.item_id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify(data)
            });
            const responseData = await response.json();
            
            if (responseData.error || responseData.success === false) {
                setDeleteError(true)
            }
            else {
                alert(responseData)
                // setData(responseData)
                console.log(responseData)
            }
        }
        catch (error) {
            console.log(error)
        }
    }

    
    


    console.log(isAuthenticated ? 'Yes, authenticated': 'not authenticated')
    return (
        <div className="categories">
            <h3>Categories</h3>
            <div className="row">
                <div className="column" >
                    <h2>READ</h2>
                    <button className="button" onClick={() => getSecuredData()}>Get Categories Secured Data</button>
                    <ul>
                        {data.categories ? data.categories.map((item, index) => (
                            
                            <li key={index}>id: {item.id } | { item.cat_type}</li>

                        )) : <li key={1}>Loading...</li>}
                    </ul>
                    
                </div>
                <div className="column" >
                    <h2>CREATE</h2>
                    <form id="create" onSubmit={handleSubmit(postSecuredData)}>
                        <label htmlFor="cat_type">Category type:</label>
                        <input name="cat_type" type="text" {...register("cat_type")} required />
                        
                        <input className="button" type="submit" value="Post category" />
                    </form>
                    {postError ? <>
                        <p className="error">Fetch Failed, You don't have permissions.</p>
                        
                    </> : null}
                </div>
                <div className="column" >
                    <h2>UPDATE</h2>
                    <form id="update" onSubmit={handleSubmit2(updateSecuredData)}>
                        <label htmlFor="number">Select id to update:</label>
                        <input type="number" {...register2("item_id")} required/>
                        <label htmlFor="cat_type">New name for Category type:</label>
                        <input type="text" {...register2("cat_type")} required />
                        <input className="button" type="submit" value="Update category" />
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