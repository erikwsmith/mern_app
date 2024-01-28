import { useEffect, useState} from 'react'

const Home = () => {

    const [ message, setMessage ] = useState("");

    //fetching message from backend on mount
    useEffect( () => {
      //fetch('http://localhost:4000')
      fetch('https://erik-smith-capstone.onrender.com/')
        .then( (res) => res.json() )
        .then( (data) => setMessage(data.message) )
    }, [] );

    return (
        <h1>{message}</h1>
    )

};

export default Home;