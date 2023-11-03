/* eslint-disable prettier/prettier */
import React, {useState} from 'react'
import '../scss/AppHeader.scss'

const AppHeader = () =>{
    const pages=["Home","Plp","Pdp","My Account","wishlist","Cart","Checkout"];
    const [selectTab,setSelecttab]=useState(0);
    const [pageSelected,setPageSelected]=useState(0);
    const tabSelect=(index)=>{
        setSelecttab(index)
    }

    const pageSelect=(index)=>{
        setPageSelected(index)
    }
    return (<>
    <div className="sticky-Header">
        <div className="container-fluid-1">
            <div className="container-display"><div className={selectTab===0?"active-Tab":"Inactive-tab" }onClick = {()=>tabSelect(0)}>Desktop</div>
        <div className={selectTab===1?"active-Tab":"Inactive-tab" } onClick = {()=>tabSelect(1)}>Msite</div></div>
            
        </div>
        <div className="header-divider"/>
    <div className="container-fluid-2">
        {pages.map((page,id)=>{
            return (<div className={pageSelected===id?"selectedTab":"unselectedTab"} onClick={()=>pageSelect(id)} key={id}>{page}</div>)
        })}
    </div>
    </div>
    
    </>)   
}

// let mockData = {
//     "sucess": true,
//     "currentData": [
//         {
//             "msite": {
//                 "url": "www.tatacliq.com",
//                 "time": "19-10-2023 12:29AM",
//                 "webVitalData": {
//                     "Performance": 80,
//                     "Accessibility": 90
//                 }
//             },
//             "_id": "653038ac5dd757718b9c6c39",
//             "__v": 0
//         },
//         {
//             "msite": {
//                 "url": "www.tatacliq.com",
//                 "time": "19-10-2023 12:29AM",
//                 "webVitalData": {
//                     "Performance": 90,
//                     "Accessibility": 90
//                 }
//             },
//             "_id": "653038b75dd757718b9c6c3b",
//             "__v": 0
//         },
//         {
//             "msite": {
//                 "url": "www.tatacliq.com",
//                 "time": "19-10-2023 12:29AM",
//                 "webVitalData": {
//                     "Performance": 100,
//                     "Accessibility": 90
//                 }
//             },
//             "_id": "653039f5b9bffd996b78c302",
//             "__v": 0
//         },
//         {
//             "msite": {
//                 "url": "www.tatacliq.com",
//                 "time": "19-10-2023 12:29AM",
//                 "webVitalData": {
//                     "Performance": 100,
//                     "Accessibility": 90
//                 }
//             },
//             "_id": "653039fab9bffd996b78c304",
//             "__v": 0
//         },
//         {
//             "msite": {
//                 "url": "www.tatacliq.com",
//                 "time": "19-10-2023 12:29AM",
//                 "webVitalData": {
//                     "Performance": 100,
//                     "Accessibility": 190
//                 }
//             },
//             "_id": "65303b37b9bffd996b78c31b",
//             "__v": 0
//         },
//         {
//             "msite": {
//                 "url": "www.tatacliq.com",
//                 "time": "19-10-2023 12:29AM",
//                 "webVitalData": {
//                     "Performance": 100,
//                     "Accessibility": 190
//                 }
//             },
//             "_id": "6530c40fad5bec57a30b08b5",
//             "__v": 0
//         },
//         {
//             "msite": {
//                 "url": "www.tatacliq.com",
//                 "time": "19-10-2023 12:29AM",
//                 "webVitalData": {
//                     "Performance": 100,
//                     "Accessibility": 190
//                 }
//             },
//             "_id": "6530c412ad5bec57a30b08b7",
//             "__v": 0
//         },
//         {
//             "msite": {
//                 "url": "www.tatacliq.com",
//                 "time": "19-10-2023 12:29AM",
//                 "webVitalData": {
//                     "Performance": 100,
//                     "Accessibility": 190
//                 }
//             },
//             "_id": "6530c414ad5bec57a30b08b9",
//             "__v": 0
//         },
//         {
//             "msite": {
//                 "url": "www.tatacliq.com",
//                 "time": "19-10-2023 12:29AM",
//                 "webVitalData": {
//                     "Performance": 100,
//                     "Accessibility": 190
//                 }
//             },
//             "_id": "6530c415ad5bec57a30b08bb",
//             "__v": 0
//         },
//         {
//             "msite": {
//                 "url": "www.tatacliq.com",
//                 "time": "19-10-2023 12:29AM",
//                 "webVitalData": {
//                     "Performance": 100,
//                     "Accessibility": 190
//                 }
//             },
//             "_id": "6530c417ad5bec57a30b08bd",
//             "__v": 0
//         },
//         {
//             "msite": {
//                 "url": "www.tatacliq.com",
//                 "time": "19-10-2023 12:29AM",
//                 "webVitalData": {
//                     "Performance": 100,
//                     "Accessibility": 190
//                 }
//             },
//             "_id": "6530c418ad5bec57a30b08bf",
//             "__v": 0
//         },
//         {
//             "msite": {
//                 "url": "www.tatacliq.com",
//                 "time": "19-10-2023 12:29AM",
//                 "webVitalData": {
//                     "Performance": 100,
//                     "Accessibility": 190
//                 }
//             },
//             "_id": "6530c419ad5bec57a30b08c1",
//             "__v": 0
//         },
//         {
//             "msite": {
//                 "url": "www.tatacliq.com",
//                 "time": "19-10-2023 12:29AM",
//                 "webVitalData": {
//                     "Performance": 100,
//                     "Accessibility": 190
//                 }
//             },
//             "_id": "6530c41bad5bec57a30b08c3",
//             "__v": 0
//         },
//         {
//             "msite": {
//                 "url": "www.tatacliq.com",
//                 "time": "19-10-2023 12:29AM",
//                 "webVitalData": {
//                     "Performance": 100,
//                     "Accessibility": 190
//                 }
//             },
//             "_id": "6530c41bad5bec57a30b08c5",
//             "__v": 0
//         },
//         {
//             "msite": {
//                 "url": "www.tatacliq.com",
//                 "time": "19-10-2023 12:29AM",
//                 "webVitalData": {
//                     "Performance": 100,
//                     "Accessibility": 190
//                 }
//             },
//             "_id": "6530c41cad5bec57a30b08c7",
//             "__v": 0
//         },
//         {
//             "msite": {
//                 "url": "www.tatacliq.com",
//                 "time": "19-10-2023 12:29AM",
//                 "webVitalData": {
//                     "Performance": 100,
//                     "Accessibility": 190
//                 }
//             },
//             "_id": "6530c41dad5bec57a30b08c9",
//             "__v": 0
//         },
//         {
//             "msite": {
//                 "url": "www.tatacliq.com",
//                 "time": "19-10-2023 12:29AM",
//                 "webVitalData": {
//                     "Performance": 100,
//                     "Accessibility": 190
//                 }
//             },
//             "_id": "6530c41ead5bec57a30b08cb",
//             "__v": 0
//         },
//         {
//             "msite": {
//                 "url": "www.tatacliq.com",
//                 "time": "19-10-2023 12:29AM",
//                 "webVitalData": {
//                     "Performance": 100,
//                     "Accessibility": 190,
//                     "pagespeed": 90
//                 }
//             },
//             "_id": "65310b576be4505fa0f2c921",
//             "__v": 0
//         },
//         {
//             "msite": {
//                 "url": "www.tatacliq.com",
//                 "time": "19-10-2023 12:29AM",
//                 "webVitalData": {
//                     "Performance": 100,
//                     "Accessibility": 190,
//                     "pagespeed": 90
//                 }
//             },
//             "_id": "65310b8e6be4505fa0f2c923",
//             "__v": 0
//         },
//         {
//             "msite": {
//                 "url": "www.tatacliq.com",
//                 "time": "19-10-2023 12:29AM",
//                 "pageName": "Home page",
//                 "webVitalData": {
//                     "Performance": 100,
//                     "Accessibility": 190,
//                     "pagespeed": 90
//                 }
//             },
//             "_id": "65310bbf2bcbc9e0e87bd8df",
//             "__v": 0
//         }
//     ],
//     "totalPages": 2
// }