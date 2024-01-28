import { useEffect, useState} from 'react'

const Records = () => {

    const [ records, setRecords ] = useState("");

    //fetching records from backend on mount
    useEffect( () => {
        const fetchRecords = async() =>{
            //const response = await fetch('http://localhost:4000/records')
            const response = await fetch('https://erik-smith-capstone.onrender.com/records')
            const json = await response.json();

            // check for database records and update the 'records' state
            if(response.ok) {    
                setRecords(json);
            }
        }
        fetchRecords();
    }, [] );

    return (        
        <div className="table-container">
            <h1>Planets in our Solar System</h1>
            <table>
                <th>Name</th>
                <th>Order From Sun</th>
                <th>Rings</th>
                    {records && records.map((item)=>(
                        <tr key={item._id}>
                            <td>{item.name}</td>
                            <td>{item.orderFromSun}</td>
                            <td>{item.hasRings? "true":"false"}</td>
                        </tr>                   
                    ))}
            </table>
        </div>
    )

};

export default Records;