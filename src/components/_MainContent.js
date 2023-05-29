import React, { useEffect, useState } from 'react';

//import api from '../api/schedule';
//import { ActivityIndicator, FlatList, Text, View } from 'react-native';

//import APIScheduleProjection from "./APIScheduleProjection";
//const baseURL = "https://www.okbet.com/api/front/match/odds/simple/list";

/* TESTING SERVER API NodeJS App */
// function App() {
//     const makeAPICall = async () => {
//         try {
//             const response = await fetch('http://localhost:8080', { mode: 'cors' });
//             const data = await response.json();
//             console.log({ data })
//         }
//         catch (e) {
//             console.log(e)
//         }
//     }
//     useEffect(() => {
//         makeAPICall();
//     }, [])
//     return (
//         <div className="App">
//             <h1>React Cors Guide</h1>
//         </div>
//     );
// }
// export default App;
/* END TESTING SERVER API NodeJS App */


export default function MainContent() {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const collectData = Array(data);

    useEffect(() => {
        fetch(`http://localhost:8080`)
            .then(response => response.json())
            .then((usefulData) => {
                console.log(usefulData.t.sport);
                setLoading(false);
                setData(usefulData.t.sport);
            })
            .catch((e) => {
                console.error(`An error occurred: ${e}`)
            });
    }, []);

    return (
        <>
            <div className="App">
                {loading && <p>Loading...</p>}
                {!loading && <p>Fetched data</p>}
                <p>{data.name}</p>
                <p>{data.code}</p>
            </div>
        </>
    )
}

// const MainContent = () => {
//     console.log(<api>);
//     // Create state variables

//     //const [responseT, setOfT] = useState([]);

//     //const objTData = JSON.parse(responseData.t);
//     // const employees = [
//     //     {id: 1, name: 'Alice', tasks: ['dev', 'test', 'ship'] },
//     //     {id: 2, name: 'Bobby Hadz', tasks: ['design', 'test'] },
//     //     {id: 3, name: 'Carl', tasks: ['test'] },
//     // ];

//     // fetches data
//     // api.getData()
//     //     .then((response) => {
//     //         setResponseData(response.data)
//     //         //setOfT(responseData.t)
//     //         console.log(response.data)
//     //     })
//     //     .catch((error) => {
//     //         console.log(error)
//     //     });

//     // return (
//     //     <>
//     //         <div>
//     //             {responseData.code}
//     //         </div>
//     //     </>
//     // )
//     return (
//         <>
//             <h1>Results</h1>
//             <div>Data: {api.msg}</div>
//             <div>
//                 {/* {employees.map((employee, index) => {
//                     return (
//                         <div key={index}>
//                             <h2>Name: {employee.name}</h2>

//                             {employee.tasks.map((task, index) => {
//                                 return (
//                                     <div key={index}>
//                                         <h2>Tasks: {task}</h2>
//                                     </div>
//                                 );
//                             })}

//                             <hr />
//                         </div>
//                     );
//                 })} */}
//             </div>
//         </>
//         )


//     // const [posts, setPosts] = useState([]);
//     // const requestOptions = {
//             //     method: 'POST',
//             //     headers: {
//             //         Accept: 'application/json',
//             //         'Content-Type': 'application/json',
//             //     },
//             //     body: JSON.stringify({ "endTime": "", "startTime": "", "leagueIdList": [], "matchIdList": [], "gameType": "BK", "matchType": "LGPC", "playCateMenuCode": "LGPC" })
//             // };
//             // useEffect(() => {
//             //     fetch('http://localhost:3000/response.json', requestOptions)
//             //         .then((res) => res.json())
//             //         .then((data) => {
//             //             //console.log(data);
//             //             setPosts(data);
//             //         })
//             //         .catch((err) => {
//             //             console.log(err.message);
//             //         });
//             // }, []);

//             // console.log({ posts });

//             // return (
//             //     <div>
//             //         <h1>Test</h1>
//             //         {Array.from(posts).map(element => {
//             //             return (
//             //                 <div key={element}>
//             //                     <h2>{element}</h2>
//             //                 </div>
//             //             );
//             //         })}
//             //     </div>
//             // );

//             // return (
//             //     <>
//             //         <div className="posts-container">
//             //             {posts.map((post, index) => {
//             //                 return (
//             //                     <div className="post-card" key={index}>
//             //                         <h2 className="post-title"></h2>
//             //                     </div>
//             //                 );
//             //             })}
//             //         </div>
//             //     </>
//             // );
//         };


//         export default MainContent;