import React, {useState, useEffect} from "react";
import axios from "axios";
import {axiosWithAuth} from '../utilities/axiosWithAuth'

const Friends = ()=>{
    const [ friends, setFriends] = useState([]);

    useEffect(()=>{
        const token = localStorage.getItem('token')
        axios.get('http://localhost:9000/api/friends',{
            headers:{
                authorization: token
            }
        })
        .then(res => {
            console.log(res)
            setFriends(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    },[])

    // componentDidMount(){
    //     this.getData()
    // }

    // getData = () => {
    //     axiosWithAuth().get('http://localhost:9000/api/friends').then(res=> {
    //         this.setState({
    //             friends: res.data.name
    //         })
    //     }).catch((err) => console.log(err.error))
    // }
    
        
        return(
            <div>
                <h2>Friends List</h2>
                <ul>
                   {
                   friends.map(friend => {
                    return <li key={friend.id}>{friend.name} - {friend.age} - {friend.email}</li>
                   })}
                </ul>
            </div>
        )
    
}

export default Friends;