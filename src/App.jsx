



// incorporating   يتضمن    اينقاربرايتن

// website admin panels
import "./App.css";
import Navbar from "./Nav/Navb.jsx";
import "./Nav/Navb.css";
import AdminNavbar from "./adminnav/AdminNav.jsx";
// import "./AdminNavbar/AdminNav.css";

import LoginPage from "./LoginSchool/LoginPage.jsx";
import "./LoginSchool/LoginPage.css";

import ChangePasswordPage from "./LoginSchool/ChangePasswordPage.jsx";
import "./LoginSchool/ChangePasswordPage.css";
import RegisterPage from "./LoginSchool/RegisterPage.jsx";
import Home from "./association/home";
import "./association/home.css";

import {Event} from "./association/event";
import "./association/event.css";
import Eventmoreass from "./association/eventmore.jsx";
import "./association/eventmore.css";
import Servicesass from "./association/servicesass.jsx";
import "./association/servicesass.css";
import Contactass from "./association/contactass.jsx";
import "./association/contactass.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";


import 'bootstrap/dist/css/bootstrap.min.css'


import Events from './asscrudevent/Event.jsx'
import "./asscrudevent/Event.css";

import CreateEvent from './asscrudevent/CreateEvent.jsx'
import "./asscrudevent/CreateEvent.css";

import UpdateEvent from './asscrudevent/UpdateEvent.jsx'
import "./asscrudevent/UpdateEvent.css";

import Services from './asscrudservices/Service.jsx'
import "./asscrudservices/Service.css";
import CreateServices from './asscrudservices/CreateService.jsx'
import "./asscrudservices/CreateService.css";

import UpdateServices from './asscrudservices/UpdateService.jsx'
import "./asscrudservices/UpdateService.css";

import Contactview from "./adminass/contactview.jsx";
import "./adminass/contactview.css";
import Eventview from "./adminass/Eventview.jsx";
import   "./adminass/eventview.css";
import Servicesview from "./adminass/Serviceview.jsx";
import   "./adminass/serviceview.css";

export default function App() {
   return (

    <div>

      <BrowserRouter>
        <div className="homeaboutmoto-menu-homesch">
        </div>
{/* <h1>vfbfrhtrg</h1> */}
        <Navbar/>

        <Routes>
          <Route element={<Navbar/>}>

          <Route path="/login" element={<LoginPage />} />
          <Route path="/change-password" element={<ChangePasswordPage />} />
          <Route path="/register" element={<RegisterPage />} />

  
 <Route path="/" element={<Home/>} />
      
          
          {/* <Route path="/eventass" element={<Event />} />
          <Route path="/eventmoreass" element={<Eventmoreass />} /> */}
          {/* <Route path="/contactass" element={<Contactass />} /> */}
          </Route>
          <Route path="/servicesass" element={<Servicesass />} />

//true
 {/* <Route element={<AdminLayout />}> */}
  <Route element={<AdminNavbar />}>

   
          {/* <Route path="/eventview" element={<Eventview/>} />
          <Route path="/servicesview" element={<Servicesview />}/> 

                     <Route path="/contactview" element={<Contactview />} /> */}
          {/* <Route path='/event' element={<Events />} />
          <Route path='/update/:id' element={<UpdateEvent />} /> */}
          <Route path='/createServices' element={<CreateServices />} />
                    <Route path='/create' element={<CreateEvent />} />

{/* 
          <Route path='/services' element={<Services />} />
          <Route path='/updateservices/:id' element={<UpdateServices />} /> */}
  </Route>

        </Routes>

      </BrowserRouter>
    
    </div>

  );
}





















// https://talabatk-ebbb5.web.app/






// https://react.dev/learn/updating-arrays-in-state#challenges
// https://react.dev/learn/choosing-the-state-structure#challenges
// https://react.dev/learn/sharing-state-between-components#challenges
// https://react.dev/learn/updating-arrays-in-state#


// State as a Snapshot

// //  import   "./Adding Interactivity/SaS/app.css";
// // import Counter from "./Adding Interactivity/SaS/app.js";

// // import Gallery from "./Adding Interactivity/SCM/Appchallaeng.js";
// import   "./Adding Interactivity/SCM/Talabatak.css";
// import Talab from "./Adding Interactivity/SCM/Talabatak.js";

//  export default function App() { 

//   return (

// //   // <Gallery/> 
// //   // <Form/>
// // <Counter/> 
//   <Talab/>
// );
// }
