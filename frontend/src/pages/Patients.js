import { useEffect, useState} from 'react'

const Patients = () => {

    const [ patients, setPatients ] = useState("");

    //fetching patients from backend on mount
    useEffect( () => {
        const fetchPatients = async() =>{
            //const response = await fetch('http://localhost:4000/patients')
            const response = await fetch('https://erik-smith-capstone.onrender.com/patients')
            const json = await response.json();

            // check for database records and update the 'patients' state
            if(response.ok) {    
                setPatients(json);
            }
        }
        fetchPatients();
    }, [] );

    return (        
        <div className="table-container">
            <h1>Patient Records</h1>
            <table>
                <th>Name</th>
                <th>Category ID</th>                
                    {patients && patients.map((item)=>(
                        <tr key={item.rowguid}>
                            <td>{item.Name}</td>
                            <td>{item.ProductCategoryID}</td>
                        </tr>                   
                    ))}
            </table>
        </div>
    )
};

export default Patients;