import { Link } from "react-router-dom";
import Navbar from "../src/component/Navbar";
import Footer from "./component/Footer";

function Relief(){
    const octs=[
        

    {
      id: 1,
      title: "Relief Camp ",
      description: "Around There are 315 Relief Camp in Manipur during Crisis.Imphal: For residents of the Lamboikhongnangkhong relief camp in Imphal West, life has come to a standstill since they were forced to flee their homes after ethnic violence erupted in Manipur on May 3, 2023.The Manipur Trade and Expo Centre has been serving as the Lamboikhongnangkhong camp since June last year for Meitei families who have been displaced from their homes for over eight months.When The Wire visited the relief camp on Sunday (January 14), residents said they were trying their best to make the most of what they have, but their most common demand remained that they would like to go back to their homes.At present, the camp houses 586 people, including 138 families, who live in small cubicles separated by wooden sheets across four different blocks inside the former trade and expo centreInside these small cubicles, which have not more than two small beds, whole families of as many as nine people live by spreading multiple bedsheets on the floor as temperatures plummet in the winter.The camp also includes small makeshift shops, where residents sell essentials such as vegetables, soaps, shampoos and ready-to-eat snacks like chips.",    
      img: "https://cdn.thewire.in/wp-content/uploads/2024/01/15194349/Sana.jpeg",
     
    },

]
  return (
    <div className='home'>
      <Navbar></Navbar>
      <div className='posts'>
        {octs && octs.map(oct=> (
          <>
          <div className='post'  key={oct.id}>
         <div className='img' >
         <Link to="/rom"><img src={oct.img}/></Link>
          <img src={oct.img2}></img>
         </div>
        
         <div className='content'>
          <Link  className=" link"to={`/oct/${oct.id}`}>
          <h1>{oct.title}</h1>   
          </Link>
          <p>{oct.description}</p>
          
         </div>
         </div>
         </>
        ))}
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Relief;

    
    

