




import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
const backendUrl = import.meta.env.VITE_BACKEND_URL;
// import ServiceCard  from "../association/servicesass";
import Servicesass  from "../association/servicesass";
import { Link } from "react-router-dom";


// import './Services.css';
// // import { servicesData } from './servicesData';

// // ServiceCard.jsx
const ServiceCard = ({ mainImage, title, description }) => {
  return (
    <div className="service-card-v2view">
      {/* <span className="card-icon">{mainImage}</span> */}
              <img className="img-assview" src={mainImage} alt="Main" />
      <h2 className="card-h2view">{title}</h2>
      <p className="card-pview">{description}</p>
    </div>
  );
};





const Servicesview = () => {
    const [servicesdata, setServicesdata] = useState([]);
  
  
    useEffect(() => {
      // Fetch data from your backend API
          axios.get(`${backendUrl}/services`)
                  // axios.get('http://localhost:3001/services')
  
        .then((res) => {
          console.log('see product :',res.data);  
          setServicesdata(res.data);
        })
        .catch((err) => {
          console.error("Error fetching data:", err);
        });
    }, []);

  return (
      // <div className="admin-page-wrapper">
    //         <div>

    // <div className="page-wrapperview">
    //   {/* Top Border Curve to close the first page */}
    //   {/* <div className="top-curve-divider"></div> */}

    //   <div className="page-header">
    //     <h2 className="main-blue-title">الخدمات المتقدمة</h2>
    //     <p className="main-black-desc">في جمعية معاً من أجل الخير ، نقدم مجموعة من الخدمات المتخصصة لتلبية احتياجاتك التكنولوجية</p>
    //   </div>

    //   <div className="flex-container">
    //     {servicesdata.map(item => (
    //       <ServiceCard 
    //         key={item.id}
    //         title={item.title}
    //         description={item.description}
    //         icon={item.icon}
    //         isGradient={item.grad}
    //       />
    //     ))}
    //   </div>
      
    // </div>

    //         <h2 className="main-blue-titlevv">الخدمات المتقدمة</h2>

    // </div>
    <>
   
      <div className="btn-services">
             <Link to="/services">
                <button className="btn-service">Add Service</button>
              </Link>
          </div>
      <section className="page-two-containerview">
      
      <div className="text-headerview">
        <h2 className="h1-blueview">الخدمات المتقدمة</h2>
        <p className="p-blackview">
          في جمعية معاً من أجل الخير ، نقدم مجموعة من الخدمات المتخصصة لتلبية احتياجاتك التكنولوجية
        </p>
      </div>

      <div className="cards-wrapperview">
        {servicesdata.map((item) => (
          <ServiceCard 
            key={item.id}
            mainImage={item.mainImage}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>

{/* <Section1 
      title="تمكين التحول الرقمي الخاص بك"
      description=".مرحباً بكم في جمعية معاً من أجل الخير حيث يلتقي الإبداع بالتميز. بصفتنا مزوداً رائداً لحلول البرمجيات المتطورة
.فإننا ملتزمون بتحويل أفكارك إلى حقيقة. نحن هنا لدعم رحلتك في كل خطوة على الطريق  انضم  إلينا في تشكيل مستقبل التكنولوجيا اليوم       "
      buttonText="دعونا نتواصل"
    /> */}
    </section>
    </>
  );
};

export default Servicesview;






// const Servicesview = () => {
  
//   return (
//     // <Servicesass/>
//       <div className="page-admins">
//             {/* <div> */}

      
  
//   <div className="admin-page-wrapper">
//       <div className="btn-services">
//               <Link to="/event">
//                 <button className="btn-service">Add Service</button>
//               </Link>
//             </div>
//       <Servicesass />
//     </div>
//     </div>
//   );
// };

// export default Servicesview;