import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
function ReliefCamp(){



   
   
        const mays=[
            
    
        {
          id: 1,
          title: "Lamshang Relief Camp",
          description:"Thousands of Manipur residents were displaced due to the ongoing ethnic violence in the state and they took shelter in relief camps set up in different places across the state and neighbouring states. A relief camp at Lamsang in Imphal West district is exclusively set up for children who are displaced and away from their parents who are guarding their villages.",
          img: "https://media.assettype.com/outlookindia/import/uploadimage/library/16_9/16_9_5/IMAGE_1690264518.webp?w=1080&auto=format%2Ccompress&fit=max",
        },
        {
          id: 2,
          title: "Sugnu Relief Camp",
          description: "People around the places Sugnu gave Goods and things to the people whowas staying in Relief camps.He has been working tirelessly at the Sugnu relief camp, helping the flood victims by providing essential support.Despite facing numerous challenges, Nganba continues to serve the inmates with utmost dedication.His efforts are truly commendable and deserve recognition.We extend our heartfelt gratitude to Nganba and his team for their selfless service.",
          img: "https://scontent.fshl2-1.fna.fbcdn.net/v/t39.30808-6/399911323_721179073362451_2770630770456570417_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=SADxPKhVUcMAX8U_P0r&_nc_ht=scontent.fshl2-1.fna&oh=00_AfCFsPoCEX21rDZ3AtnmKkBkpIuixylESeHgNCPCtclv9Q&oe=65F0F902",
        },
        {
          id: 3,
          title: "Akampat Relief Camp ",
          description: "Staff of NIELIT Imphal contributed and presented Relief Materials at Ideal Girls' College, Akampat, Imphal East, Relief Camp on 10th June, 2023.",
        img:"https://scontent.fshl2-1.fna.fbcdn.net/v/t39.30808-6/353657222_573656574957418_4548414209540179678_n.jpg?stp=dst-jpg_p843x403&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=9IFMNPdszbgAX8Mj3za&_nc_ht=scontent.fshl2-1.fna&oh=00_AfDHPX-BoiLedTGkoZSlDVRlhjjwGFzz1aVRWwOmxxRvqQ&oe=65F0E3AE",
        }, 
        {id: 4,
          title: "Yairipok Relief Camp",
          description: "Its a relief camp that are located in Yairipok Yambem.Most of the people are from Keithelmanbi Moirangpurel and Others places... Again Team Mitsna and AMMU visit at Yairipok Yambem Camp. Relief materials were provided, and a medical camp was held. they covers around 270 people, including 37 kids aged 0-4 and 50 kids aged 5-15. ",
          img: "https://mitsna.org/wp-content/uploads/2023/06/photo_2023-06-17_18-33-01-2-1024x576.jpg",
    },  {
        id: 5  ,
        title: " Yaiskul A.C Wangkhei High School Relief Camp",
        description: "At the relief camp of Wangkhei High School, organized by Yaiskul AC, a free health camp is being conducted. Free help Camp across the victim people of This War",
      img:"https://scontent.fshl2-1.fna.fbcdn.net/v/t39.30808-6/430174601_729959032675282_5854954279157721458_n.jpg?stp=dst-jpg_p600x600&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=jDp1816P56EAX-V679Y&_nc_ht=scontent.fshl2-1.fna&oh=00_AfBf9-dzoUlIjHWCRpAoCQKm76-ktbkVGoGzX0wQiHqpWQ&oe=65F1955C",
      }, 
      {id:6 ,
        title: "Kurkhul Relief Camp",
        description: "At the Relief Camps in Imphal, Manipur, organized by ZEO Zone 1, there is a pressing need for spreading awareness and education through the use of projectors to showcase social messages and animated films. This initiative aims to effectively communicate important messages to the attendees. It is crucial to utilize various forms of media to reach out to the people effectively, especially considering the diverse audience present at the relief centers. Singjamei 360 gave a huge role in Relief Camp for Giving peolple enjoyment about People who are vitim about this War ",
        img: "https://scontent.fshl2-1.fna.fbcdn.net/v/t39.30808-6/379836685_691529886327370_280962431890024218_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=E46C3T-Pm6sAX95psP4&_nc_ht=scontent.fshl2-1.fna&oh=00_AfCOVCWeVxUPVdbvosKdVooALmEDlhv92n_z4dMxacwEyA&oe=65F21845",
  },
  {
    id: 7,
    title: "Moirang Relief Camp",
    description: "Images from the relief camps in Imphal and Moirang. These children's' houses in indo-Myanmar border town Moreh and Churachandpur were burnt down by Kuki militants on the night of 3rd May 2023. They escaped with only the clothes they had on their body.Now they are put in schools and colleges which are being served as relief camps. They are looked after by local volunteers and clubs with donations from the public.",
    img: "https://scontent.fshl2-1.fna.fbcdn.net/v/t39.30808-6/385838333_6453945921370426_4085026955277484648_n.jpg?stp=dst-jpg_p720x720&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=-zkisKkw7FYAX_H2u-K&_nc_ht=scontent.fshl2-1.fna&oh=00_AfDVjFk8SzZvOawg6eAtXV_KVTjcT953IRJhfuN4e-6q1Q&oe=65F0F1A0",
  },
  {
    id: 8,
    title: "Kakching Khunou Relief Camp ",
    description: "Women at relief camps trying to make ends meet by weaving baskets. Please support them by buying their baskets if any of my friends happen to visit their camps at kakching khunou.Madam Shanti Sarangthem who used to teach at Blue Star Academy School, Sim Veng, Churachandpur, is seen (sitting rightmost)  making bags with Kouna (Water rush/ Club rush) at her Relief Camp at Kakching Khunou Hijam Angom Leikai Even the teacher also Suffered from This Violence among peoples.Madam Shanti has 18 years of teaching experience. Her house at Churachandpur was burnt in May 2023.She has talents and she learned to make stuff with Kouna a few months ago at her Relief Camp, and now she teaches other IDPs at her camp to make Kouna products. Such is the resilience, grit, and never-say-die spirit of her.Two species of rush - Water rush and Club rush (Scientific names - Schoenoplectus lacustris and Schoenoplectus mucronatus), known as Kouna in Manipur,are a part of Meitei culture and tradition, used for making mats since time immemorial. Nowadays it is used to make ladies' bags, decoration stuff, hats, wall hangings, pen stands, etc.",
  img:"https://scontent.fshl2-1.fna.fbcdn.net/v/t39.30808-6/418728268_7082098665169769_7570647310671489377_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=gjtBKSHww28AX_k4bmP&_nc_ht=scontent.fshl2-1.fna&oh=00_AfBmQaGxZTi4_r7f3ZdPTcg6vjhvjfnHrlsA_jQmBQpOWQ&oe=65F0B3D0",
  }, 
  {id: 9,
    title: " Khuyathong Relief Camp",
    description: "Meiteis Communities contributed ladies essential garments to the women of TAKDO Relief Camp Khuyathong...  ",
    img: "https://scontent.fshl2-1.fna.fbcdn.net/v/t39.30808-6/429534574_409094494971303_1509435974042978983_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=v0dJvGjBuboAX-PeqNx&_nc_ht=scontent.fshl2-1.fna&oh=00_AfBbqUljSRmUx_qCz2bVsCB5TtiB0gvaI08pQeYKmsAInw&oe=65F1BC17",
},  {
  id: 10 ,
  title: " Hijam Angom Leikai Relief Camp",
  description: "In this Crisis War Young Youths , they dont have any belongs aside clothes , they all are eagaerly waiting when he / she will go to school or college,There so many Young Youths wasted their talents ..reamaining a small room Waiting to end todays War ",
img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT78A0lg0CuhzaciZ8sfCdwRduJF0TCTil6Vg&usqp=CAU"
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
    
    export default ReliefCamp;
    
        
        
    
    


