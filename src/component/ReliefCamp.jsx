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
          img: "https://scontent.fshl2-1.fna.fbcdn.net/v/t39.30808-6/418925188_3704551879867114_6823917124181094585_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=AOZTfGJkujkAX9KEXf5&_nc_ht=scontent.fshl2-1.fna&oh=00_AfBis1-fBomaTzeN2kq4O9Q5lR3EI8GiGFo5SyfKykNq5g&oe=65C97DD4",
        },
        {
          id: 3,
          title: "Akampat Relief Camp ",
          description: "S David, a constable with Manipur police, and his family are among the 700-odd people staying at a relief camp here set up in a college where everyone has one hope – return home safely once the situation is normal.They also went through the same trauma – explosions, rioting and mob violence before the Assam Rifles came to their rescue.As many as 238 families are lodged at the Ideal Girls’ College here since the Assam Rifles, a paramilitary force under the operational command of the Army, brought them from Moreh and Churachandpur.Th Chanchal, who is staying in the chemistry classroom of the college that has tin roofing, keeps herself busy teaching her kids who have taken admission in a government school.Hailing from Moreh, a town located 107 km from the capital city of Imphal, Chanchal, belonging to the majority community, recalls her experience of May 3 when the entire family was sitting for dinner.Pro-active deployment facilitated faster reaction in de-notified areas of Imphal as also in villages of Tengnoupal and Churachandpur districts where Assam Rifles does not have any company operating base in vicinity,” said a senior official.Pro-active deployment facilitated faster reaction in de-notified areas of Imphal as also in villages of Tengnoupal and Churachandpur districts where Assam Rifles does not have any company operating base in vicinity,” said a senior official.Pro-active deployment facilitated faster reaction in de-notified areas of Imphal as also in villages of Tengnoupal and Churachandpur districts where Assam Rifles does not have any company operating base in vicinity,” said a senior official.“Pro-active deployment facilitated faster reaction in de-notified areas of Imphal as also in villages of Tengnoupal and Churachandpur districts where Assam Rifles does not have any company operating base in vicinity,” said a senior official.“Pro-active deployment facilitated faster reaction in de-notified areas of Imphal as also in villages of Tengnoupal and Churachandpur districts where Assam Rifles does not have any company operating base in vicinity,” said a senior official.“Pro-active deployment facilitated faster reaction in de-notified areas of Imphal as also in villages of Tengnoupal and Churachandpur districts where Assam Rifles does not have any company operating base in vicinity,” said a senior official.“Pro-active deployment facilitated faster reaction in de-notified areas of Imphal as also in villages of Tengnoupal and Churachandpur districts where Assam Rifles does not have any company operating base in vicinity,” said a senior official.“Pro-active deployment facilitated faster reaction in de-notified areas of Imphal as also in villages of Tengnoupal and Churachandpur districts where Assam Rifles does not have any company operating base in vicinity,” said a senior official.“Pro-active deployment facilitated faster reaction in de-notified areas of Imphal as also in villages of Tengnoupal and Churachandpur districts where Assam Rifles does not have any company operating base in vicinity,” said a senior official.“Pro-active deployment facilitated faster reaction in de-notified areas of Imphal as also in villages of Tengnoupal and Churachandpur districts where Assam Rifles does not have any company operating base in vicinity,” said a senior official.“Pro-active deployment facilitated faster reaction in de-notified areas of Imphal as also in villages of Tengnoupal and Churachandpur districts where Assam Rifles does not have any company operating base in vicinity,” said a senior official.“Pro-active deployment facilitated faster reaction in de-notified areas of Imphal as also in villages of Tengnoupal and Churachandpur districts where Assam Rifles does not have any company operating base in vicinity,” said a senior official.“Pro-active deployment facilitated faster reaction in de-notified areas of Imphal as also in villages of Tengnoupal and Churachandpur districts where Assam Rifles does not have any company operating base in vicinity,” said a senior official.“Pro-active deployment facilitated faster reaction in de-notified areas of Imphal as also in villages of Tengnoupal and Churachandpur districts where Assam Rifles does not have any company operating base in vicinity,” said a senior official.",
        img:"https://thehillstimes.in/wp-content/uploads/2023/07/People-at-Manipur-relief-camps-Divided-by-violence-united-by-hope-1024x576.jpg",
        }, 
        {id: 4,
          title: "Yairipok Relief Camp",
          description: "Its a relief camp that are located in Yairipok Yambem.Most of the people are from Keithelmanbi Moirangpurel and Others places... Again Team Mitsna and AMMU visit at Yairipok Yambem Camp. Relief materials were provided, and a medical camp was held. they covers around 270 people, including 37 kids aged 0-4 and 50 kids aged 5-15. ",
          img: "https://mitsna.org/wp-content/uploads/2023/06/photo_2023-06-17_18-33-01-2-1024x576.jpg",
    },  {
        id: 5  ,
        title: " Yaiskul A.C Wangkhei High School Relief Camp",
        description: "At the relief camp of Wangkhei High School, organized by Yaiskul AC, a free health camp is being conducted. Free help Camp across the victim people of This War",
      img:"https://scontent.fshl2-1.fna.fbcdn.net/v/t39.30808-6/418474339_417777347241987_1141462745802844402_n.jpg?stp=dst-jpg_s1080x2048&_nc_cat=109&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=cVW70k_2WqcAX_br3d4&_nc_ht=scontent.fshl2-1.fna&oh=00_AfB0_XuvBPcD5cMySUmZjxTvuACXh-_a45VswWc7f3w00g&oe=65CA4BA7",
      }, 
      {id:6 ,
        title: "Kurkhul Relief Camp",
        description: "At the Relief Camps in Imphal, Manipur, organized by ZEO Zone 1, there is a pressing need for spreading awareness and education through the use of projectors to showcase social messages and animated films. This initiative aims to effectively communicate important messages to the attendees. It is crucial to utilize various forms of media to reach out to the people effectively, especially considering the diverse audience present at the relief centers. Singjamei 360 gave a huge role in Relief Camp for Giving peolple enjoyment about People who are vitim about this War ",
        img: "https://scontent.fshl2-1.fna.fbcdn.net/v/t39.30808-6/379836685_691529886327370_280962431890024218_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=3635dc&_nc_ohc=UUS_jk7tcvcAX8CxIpv&_nc_ht=scontent.fshl2-1.fna&oh=00_AfDtVxnuA9ZTuYldphCXQDOgsjOEOENyyTxRPhNZY-Wlog&oe=65CA8B45",
  },
  {
    id: 7,
    title: "Moirang Relief Camp",
    description: "Images from the relief camps in Imphal and Moirang. These children's' houses in indo-Myanmar border town Moreh and Churachandpur were burnt down by Kuki militants on the night of 3rd May 2023. They escaped with only the clothes they had on their body.Now they are put in schools and colleges which are being served as relief camps. They are looked after by local volunteers and clubs with donations from the public.",
    img: "https://scontent.fshl2-1.fna.fbcdn.net/v/t39.30808-6/353408263_651109530382437_5144328705654804609_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=3635dc&_nc_ohc=TioypQpnsnkAX9qrhWS&_nc_oc=AQkmsdvPIJvMeivnlnSpAqqVlFOzI3aiORiI3xdUmBhOgZ2iVWxfFvgcJ7qnGJtutEKHEgWw8iRLDdsT3HycS3Xt&_nc_ht=scontent.fshl2-1.fna&oh=00_AfARTCuYGn64oUw2omqQQXYFPUt_ZFo4tWvz0nU6Go2Hxw&oe=65C9CCCC",
  },
  {
    id: 8,
    title: "Kakching Khunou Relief Camp ",
    description: "Women at relief camps trying to make ends meet by weaving baskets. Please support them by buying their baskets if any of my friends happen to visit their camps at kakching khunou.Madam Shanti Sarangthem who used to teach at Blue Star Academy School, Sim Veng, Churachandpur, is seen (sitting rightmost)  making bags with Kouna (Water rush/ Club rush) at her Relief Camp at Kakching Khunou Hijam Angom Leikai Even the teacher also Suffered from This Violence among peoples.Madam Shanti has 18 years of teaching experience. Her house at Churachandpur was burnt in May 2023.She has talents and she learned to make stuff with Kouna a few months ago at her Relief Camp, and now she teaches other IDPs at her camp to make Kouna products. Such is the resilience, grit, and never-say-die spirit of her.Two species of rush - Water rush and Club rush (Scientific names - Schoenoplectus lacustris and Schoenoplectus mucronatus), known as Kouna in Manipur,are a part of Meitei culture and tradition, used for making mats since time immemorial. Nowadays it is used to make ladies' bags, decoration stuff, hats, wall hangings, pen stands, etc.",
  img:"https://scontent.fshl2-1.fna.fbcdn.net/v/t39.30808-6/418728268_7082098665169769_7570647310671489377_n.jpg?stp=dst-jpg_p960x960&_nc_cat=106&ccb=1-7&_nc_sid=3635dc&_nc_ohc=_S-C-cKPukMAX-cHSnc&_nc_ht=scontent.fshl2-1.fna&oh=00_AfDj3_fQnaGwowbXapQN6-whLJJs-uIx_DSzwp8oKSrS1A&oe=65C926D0",
  }, 
  {id: 9,
    title: " Khuyathong Relief Camp",
    description: "Meiteis Communities contributed ladies essential garments to the women of TAKDO Relief Camp Khuyathong...  ",
    img: "https://scontent.fshl2-1.fna.fbcdn.net/v/t39.30808-6/423162063_1805146579960202_1165413381071614882_n.jpg?stp=dst-jpg_p720x720&_nc_cat=109&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=G-lj2YZUa-gAX97vclt&_nc_ht=scontent.fshl2-1.fna&oh=00_AfAWmGAAiqazvw7o9VPFB053gffBPYmBl8gcQM_I6B-TYw&oe=65C96212",
},  {
  id: 10 ,
  title: " Hijam Angom Leikai Relief Camp",
  description: "In this Crisis War Young Youths , they dont have any belongs aside clothes , they all are eagaerly waiting when he / she will go to school or college,There so many Young Youths wasted their talents ..reamaining a small room Waiting to end todays War ",
img:"https://scontent.fshl2-1.fna.fbcdn.net/v/t39.30808-6/380273615_10228529129386025_2553108074472239805_n.jpg?stp=dst-jpg_p720x720&_nc_cat=105&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=VNeBBl6d_aQAX8l5QIi&_nc_ht=scontent.fshl2-1.fna&oh=00_AfCDJgt3yhcxCp4LoYk1ExvTMmNW5Ln55OJpufftMlgWmg&oe=65CA25B1",
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
    
        
        
    
    


