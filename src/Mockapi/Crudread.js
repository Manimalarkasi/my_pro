// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import { Table } from 'semantic-ui-react'

// function Crudread() {
//     const API_URL='https://6593d64d1493b01160693df3.mockapi.io/employee';
//     const [setGetapi] = useState([]);
//     useEffect(async()=>{
//         await axios.get(API_URL)
//         .then((getdata)=>{
//             console.log(getdata);
//             console.log(getdata.data);
//             setGetapi(getdata.data)
//         })
//     })
//   return (
//     <div>
//      <h2> crud read operations</h2> 
//      <Table singleLine>
//         <Table.Header>
//             <Table.Row>
//                 <Table.HeaderCell>Name</Table.HeaderCell>
//                 <Table.HeaderCell>Employee ID</Table.HeaderCell>
//                 <Table.HeaderCell>Mail ID</Table.HeaderCell>
//                 <Table.HeaderCell>Password</Table.HeaderCell>
//                 <Table.HeaderCell>Update</Table.HeaderCell>
//                 <Table.HeaderCell>Delete</Table.HeaderCell>  
//             </Table.Row>
//         </Table.Header>
//         <Table.Body>
            
//             {/* <Table.Row>
//                 <Table.Cell>{data.name}</Table.Cell>
//                 <Table.Cell>{data.empid} </Table.Cell>
//                 <Table.Cell>{data.mail} </Table.Cell>
//                 <Table.Cell>{data.password} </Table.Cell>
//                 <Table.Cell><Button>Update</Button></Table.Cell>
//                 <Table.Cell><Button>Delete</Button></Table.Cell>
//             </Table.Row> */}
//             <Table.Row>
//                 <Table.Cell>malar</Table.Cell>
//                 <Table.Cell>8754</Table.Cell>
//                 <Table.Cell>malar@gmail.com</Table.Cell>
//                 <Table.Cell>mmmmm</Table.Cell>
//             </Table.Row>
//         </Table.Body>
//      </Table>
//     </div>
//   )
// }

// export default Crudread
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table } from 'semantic-ui-react';

function Crudread() {
    const API_URL = 'https://6593d64d1493b01160693df3.mockapi.io/employee';
    const [getApi, setGetApi] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(API_URL);
                console.log(response.data);
                setGetApi(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
                // Handle error as needed
            }
        };

        fetchData(); // Call the async function inside useEffect

    }, []); // Provide an empty dependency array to useEffect

    return (
        <div>
            <h2>crud read operations</h2>
            <Table singleLine>
                {/* ... (Table structure) ... */}
                <Table.Body>
                    {getApi.map((data) => (
                        <Table.Row key={data.id}>
                            <Table.Cell>{data.name}</Table.Cell>
                            <Table.Cell>{data.empid}</Table.Cell>
                            <Table.Cell>{data.mail}</Table.Cell>
                            <Table.Cell>{data.password}</Table.Cell>
                            <Table.Cell><Button>Update</Button></Table.Cell>
                            <Table.Cell><Button>Delete</Button></Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
        </div>
    );
}

export default Crudread;
