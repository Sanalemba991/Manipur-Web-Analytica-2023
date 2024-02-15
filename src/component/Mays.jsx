import { Link } from "react-router-dom";
import Footer from "./Footer";

import Navbar from "./Navbar";
function Mays(){



   
   
        const mays=[
            
    
        {
          id: 1,
          title: "Unsee Footage",
          description: "Unseen footage of Kuki Mob going on rampage and committing Heinous crimes against Meitei's and destroying it's houses on 3rd May, 2023. on This Day Most of them holding Sophosticate Weapon and Try to Genocide Meiteis from Manipur by Good We all Safe ",
          img: "https://swarajya.gumlet.io/swarajya/2024-01/7248b861-c2e9-441a-bac5-3b6eb2a79b83/Untitled_1.png?w=640&q=75&auto=format,compress&format=webp",
        },
        {
          id: 2,
          title: "Manipur May 4 sexual violence survivors recount horrific ordeal, including begging policemen for help, in their statements to the police",
          description: "On this Day A 21-year-old woman, who was among the two women stripped, paraded,  filmed by a mob in Manipur’s Thoubal on May 4, has said in a statement to the police that they had sought refuge in a police vehicle parked nearby, but the two policemen present initially refused to help, saying.Angry people of meiteis try to take Revenge on Kukis ladies but They Released safely.  Again lets Heard from people who burt his by Kuki ",
          img: "https://media.licdn.com/dms/image/D5612AQHOqpBFWgWioQ/article-cover_image-shrink_600_2000/0/1689869851964?e=2147483647&v=beta&t=hjW0j5CTBRAiFhrMa-yzyEkXppRoid6tcbAXl8xKx8A",
        },
        {
          id: 3,
          title: "Burned  House Near Churchandpur",
          description: "Churachandpur district, the epicentre of the violent conflict between Meiteis and the Kukis involving armed SoO (Suspension of Operation) groups, seems to remain cut off from the rest of Manipur since May 3.Atrticles for a man from Victim:-This is the first time I am using this name to identify myself. Kamala Leima is not my real name; it is a name I am using here only to identify myself to the world as a Meitei woman; only to tell my story.I am married in Waikhurok village in Torbung. Our district is Bisenpur (Bishnupur) that touches Churachandpur district. Torbung was the place where things began to go wrong after the Tribal Solidarity March held by All Tribal Students Union of Manipur (ATSUM) of May 3 ended.In my village, we have about 30 Meitei families. Though it is a Kuki-majority village but we never felt unsafe. We lived next to each other as good neighbours.However, on May 3, after the solidarity march was over, we began to hear about tribals attacking Meiteis in the district. Fear began to rule our minds. Will we be safe at night was a question we Meitei families had. My immediate neighbour, a Meitei family, decided to leave for Imphal. It aggravated my fear but I have three little children; my husband was still not back from the farm which was some distance away; I decided to stick to the house.Sometime later, my husband rang me up to say there was trouble brewing and he, therefore, would not be able to come at once but we should remain inside the house for safety and he would reach them somehow.After sundown, I locked up the main door of my two-room house and stayed hidden in the kitchen with my three little children. At around 8 pm, we heard a sharp knock on the door; my eldest kid ran to open it, hoping it was his father. No sooner did he open the door, a crowd of people rushed in; maybe about 30 of them. Some of them were women. I couldn’t identify anyone. It dawned on me that I was in the middle of trouble.ust at the door, there were some more people among whom were a few of my Kuki neighbours.I began to plead to those people who were already inside the house not to harm us. On hearing my pleading, a Kuki neighbour walked in. He told me that if I don’t leave the house at once, they could kill me and he would not be able to do anything to stop them. So I better leave the house with him. He was fairly new to our village; he stays just behind my house. I had no option but to listen to him.I wanted to pick up some things from the house but the mob didn’t allow it.As we were walking towards my Kuki neighbour’s house, my eldest kid, all of four and studying in nursery, suddenly began to cry; he just realised that he had left behind his schoolbag. Before I could react, he ran back to the house. I ran after him, dragging my two toddlers along. The mob by then was preparing to set my house on fire. The kid shouted at them, crying, “Give me my school bag; I have maths homework to finish or else my teacher will beat me up tomorrow.Except one, nobody understood the language he spoke – Manipuri – which seemed a bit odd to me. I have not come across any Kuki man who can’t understand Manipuri. It is a language often used by most people in the state to communicate. I now wonder where they were from.”If promises are kept by the state government and the MLA, we may get some money to rebuild our house, but our worry is bigger than getting just a roof over our head. It is the fear of living as a minority in the village. The mutual trust is gone. Though there is a paramilitary post nearby but that night, they didn’t come to protect us and my little children. Only the Kuki neighbour offered us shelter that night. Without proper security and a feeling of safety, it is no more my home.",
          img: "https://cdn.thewire.in/wp-content/uploads/2023/05/08103231/Screenshot-2023-05-08-at-10.31.48-AM-956x600.png",
        }, 
        {id: 4,
          title: "People's Liberation Army",
          description: "People's Liberation Army released a new motivational music video to boost the emotions of the struggle for freedom and show the brutality of Indian forces on the people of Manipur.",
          img: "https://c.ndtvimg.com/2023-06/7q2a0i9o_manipur-violence-ani_625x300_30_June_23.jpg",
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
    
    export default Mays;
    
        
        
    
    


