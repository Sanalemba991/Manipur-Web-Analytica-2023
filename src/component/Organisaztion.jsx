import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
function Organization(){



   
   
        const mays=[
            
    
        {
          id: 1,
          title: "Arambai Tenggol",
          description:"Arambai Tenggol is a  group that emerged in the state of Manipur in northeastern India in the early 2020s.They are one of the  most respected and talented groupin manipur. they helped during today's crises most of them are meitei's ...There are more than 54 branch group and more than 54000.Because of  Arambai meitei people lives in manipur peacefully they exposed kuki's lies throughout the World ",
          img: "https://scontent.fshl2-1.fna.fbcdn.net/v/t39.30808-6/384573255_3567492050186817_6357640911999411832_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=IPSWV1pw2hgAX9Nd6Ht&_nc_ht=scontent.fshl2-1.fna&oh=00_AfDC7Tj4ZtxxiI5x7z6iLttX0XT8JjTSni2UGYG18QRAXQ&oe=65C95819",
        },
        {
          id: 2,
          title: "Youth of Manipur",
          description: "Its also People of Youth of Todays that are lived across the Manipur Most of them are meiteis... They struggle a lot of todays wars For revealling the Lies between the two communitites They even go to Delhi for meeting with Higher Authorities but they failed they worked hard..and support to Relief Camp Also.",
          img: "https://scontent.fshl2-1.fna.fbcdn.net/v/t39.30808-6/375032976_122104952204025361_463440794172174093_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=XIoc5SKWJwMAX8E5awD&_nc_ht=scontent.fshl2-1.fna&oh=00_AfAbviuyCByDI0jZ8rI3AJnB2819yWzVIlvGLYeNCYwM7w&oe=65CAC6AD",
        },
        {
          id: 3,
          title: "COCOMI-Coordinating Commitee of Manipur Integrity ",
          description: "it was Formed by the Peoples of Manipur Peoples. they Helped todays crisis.they took Lot of part in Expsoing lies of Kukis and giving goods to the Relief camp . they went to different places around Manipur And visited And talks to people about what they are went through and help them",
        img:"https://scontent.fshl2-1.fna.fbcdn.net/v/t39.30808-1/380530724_122100549230047741_8537550397101032457_n.jpg?stp=c0.0.320.320a_dst-jpg_p320x320&_nc_cat=100&ccb=1-7&_nc_sid=596444&_nc_ohc=sakEtrZXM4YAX8vpmKA&_nc_ht=scontent.fshl2-1.fna&oh=00_AfAzSJrAGTti4De25DCqj397PAL5vIiGH4cbFDBhxI8tDw&oe=65CA58CA",
        }, 
        {id: 4,
          title: "ITLF-ndeginous Tribal Leader Forums",
          description: "It was established o JUne 09,2022 at the KIC office in Torbung Bangla. Most of them are Kuki's.They helped themselve Among Kukis People .   ",
          img: "https://scontent.fshl2-1.fna.fbcdn.net/v/t39.30808-6/420129942_122132184680088622_878632657628011884_n.jpg?stp=dst-jpg_p720x720&_nc_cat=106&ccb=1-7&_nc_sid=783fdb&_nc_ohc=D5VroGryDFgAX8kpp7o&_nc_ht=scontent.fshl2-1.fna&oh=00_AfB2La0Qj_7sloF8M0fvw1sjrJVN-7UzzAbURjU5Zt8t6g&oe=65CADA1B",
    },  


    ]
      return (
        <div className='home'>
           <Navbar></Navbar>
          <div className='posts'>
            {mays && mays.map(may => (
              <>
              <div className='post'  key={may.id}>
             <div className='img' >
              <img src={may.img}/>
             </div>
             <div className='content'>
              <Link  className=" link"to={`/may/${may.id}`}>
              <h1>{may.title}</h1>   
              </Link>
              <p>{may.description}</p>
              
             </div>
             </div>
             </>
            ))}
          </div>
          <Footer></Footer>
        </div>
      )
    }
    
    export default Organization;
    
        
        
    
    


