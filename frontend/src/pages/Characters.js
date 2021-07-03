import React, {useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import {useForm} from 'react-hook-form'

const apiEndpoint = process.env.REACT_APP_BACKEND_API_URL;
export default function Character () {
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
            const response = await fetch(`${apiEndpoint}/characters`);
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
            const response = await fetch(`${apiEndpoint}/characters`, {
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
            const response = await fetch(`${apiEndpoint}/characters-full`, {
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
        console.log(data)
        
        try {
            const token = await getAccessTokenSilently();
            const response = await fetch(`${apiEndpoint}/characters`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify(data)
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
        // console.log(data)
        delete data['item_to_update'];
        // console.log(data)
        // console.log(item_to_update)
        try {
            const token = await getAccessTokenSilently();
            const response = await fetch(`${apiEndpoint}/characters/${item_to_update}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify(data)
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
            const response = await fetch(`${apiEndpoint}/characters/${data.item_id}`, {
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
        <div className="characters">
            <h3>Characters</h3>
            <div className="row">
                <div className="column" >
                    <h2>READ</h2>
                    <button className="button" onClick={() => getSecuredDataFull()}>Get characters Secured Data - Full info:</button>
                    <ul>
                        {data.characters ? data.characters.map((item, index) => (
                            
                            <li key={index}> <img src={item.image} alt={item.name} className="character_image" /> id: {item.id } | name: { item.name} | character name: {item.character_name} | age: {item.age} | gender: {item.gender} </li>

                        )) : <li key={1}>Loading...</li>}
                    </ul>
                    <button className="button" onClick={() => getSecuredData()}>Get characters Secured Data:</button>
                    <ul>
                        {data.characters ? data.characters.map((item, index) => (
                            
                            <li key={index}> id: {item.id } | character name: {item.character_name} | gender: {item.gender} </li>

                        )) : <li key={1}>Loading...</li>}
                    </ul>
                    
                </div>
                <div className="column" >
                    <h2>CREATE</h2>
                    <form id="create" onSubmit={handleSubmit(postSecuredData)}>
                        <label htmlFor="name">Name:</label>
                        <input name="name" type="text" {...register("name")} required />
                        <label htmlFor="character_name">Character Name:</label>
                        <input name="character_name" type="text" {...register("character_name")} required />
                        <label htmlFor="age">Age:</label>
                        <input name="age" type="number" {...register("age")} required />
                        <label htmlFor="gender">Gender:</label>
                        <input name="gender" type="text" {...register("gender")} required />
                        <label htmlFor="image">Image route:</label>
                        <input name="image" type="text" {...register("image")} required />
                        
                        <input className="button" type="submit" value="Post character" />
                    </form>
                    {postError ? <>
                        <p className="error">Fetch Failed, You don't have permissions.</p>
                        
                    </> : null}
                </div>
                <div className="column" >
                    <h2>UPDATE</h2>
                    <form id="update" onSubmit={handleSubmit2(updateSecuredData)}>
                        <label htmlFor="item_to_update">Choose Item ID to update:</label>
                        <input name="item_to_update" type="number" {...register2("item_to_update")} required />
                        <label htmlFor="name">Name:</label>
                        <input name="name" type="text" {...register2("name")} required />
                        <label htmlFor="character_name">Character Name:</label>
                        <input name="character_name" type="text" {...register2("character_name")} required />
                        <label htmlFor="age">Age:</label>
                        <input name="age" type="number" {...register2("age")} required />
                        <label htmlFor="gender">Gender:</label>
                        <input name="gender" type="text" {...register2("gender")} required />
                        <label htmlFor="image">Image route:</label>
                        <input name="image" type="text" {...register2("image")} required />
                        <input className="button" type="submit" value="Update character" />
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