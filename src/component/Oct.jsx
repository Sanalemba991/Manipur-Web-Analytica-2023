import { Link } from "react-router-dom";
import Arms from "./Images/Arms.png";
import Arms2 from "./Images/Arms2.png";
import Mass from "./Images/Mass.png";
import Navbar from "./Navbar";
import Footer from "./Footer";
function Oct(){
    const octs=[
        

    {
      id: 1,
      title: "October:Weapon Siezed ",
      description: " On 13th October 2023(from 3 am to 4:45 am), CASO was conducted by combined team of Imphal West District Police and S.F. at Kameng, Khamran and Mana Ingkhol area of IW Dist. The combined forces searched about 150 houses in the three villages. The following items are recovered in the ops.(i) Carbine - 3 nos.(ii) Carbine magazines- 5 nos.(iii) 9 mm pistol - 1 no with 1 mag.(iv) 7.65 lama pistol - 1 no with mag.(v) 36 HE Granade - 3 nos.(vi)  Air gun with scope - 1 no.All state government/state government aided/private unaided schools in Manipur will re-open from 6th October 2023,” state director of education (schools) L Nadakumar Singh said in an order on Thursday",    
     
     img2:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReuUJ4TS4pg8TZMtZtNRuGYmEi2vL4jL9XKdgJNYtf2B2UPGSVFY9X6Q_ltcMuVoEVeQQ&usqp=CAU" 
    },
    {
      id: 2,
      title: "November:Mass Misscall",
      description: "On this Month people are trying to do Call To number :8732042511 Meitei community were trying to include in ST List For Future Generation.Again Our Prime Minister Still in silent",
      img: "https://scontent.fshl2-1.fna.fbcdn.net/v/t39.30808-6/399541748_792494359554278_1467639721128478636_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=RGniArLHDmkAX_dO2qj&_nc_ht=scontent.fshl2-1.fna&oh=00_AfBnadrZXk-CKdOyWl1s27O9LU1N4cKx2c3_IHuhwJ56Qg&oe=65F0F861"
    },
    {
      id: 3,
      title: "December:Mr Manipur",
      description: "During this War Manipur were trying to improve our Development and Society . AMBBA association sponsored Mr Manipur More than 100 people were participated across the Manipur But most of them are Meiteis",
      img: "https://i.ytimg.com/vi/-GRRsLToBZA/maxresdefault.jpg",
    }, 
    {id: 4,
      title: "January:MEITEI LEGISLATORS TAKE PLEDGE AND ENDORSE AT’S DEMAND TO QUELL MANIPUR VIOLENCE ",
      description: "Imphal: Amidst stringent security measures, the anticipated meeting between collective leadership of Arambai Tenggol (AT), a major stakeholder in the current strife and 39 Meitei legislators of Manipur, including members of Parliament and union minister  of state, Dr. RK Ranjan Singh (Lok Sabha) and Maharaj Leisemba Sanajaoba (Rajya Sabha) concluded amicably at the historic Kangla Fort with the legislators endorsing the 6-point demands put forth by AT. Additionally, the legislators took the pledge to serve the community selflessly and preserve the indigenous faith and beliefs.The 6-point demands comprise implementing NRC with 1951 as the base year, revoking the Suspension of Operation agreement with Kuki militants, relocating all Myanmarese refugees to Mizoram, implementing border fencing, replacing Assam Rifles with other Central forces, and delisting Kukis from the Scheduled Tribes (ST) list.AT, gaining prominence in the ongoing Kuki-Zo and Meitei ethnic conflict playing a key role in countering armed attacks on Meitei villages in buffer zones. Despite over nine months passing since the strife began on May 3, 2023, intermittent attacks and counterattacks between the two communities persist.   Established in 2020, AT gained popularity in 2022 for cultural revival efforts through motor road shows and allegedly enjoyed political patronage. The group's oath-taking ceremony occurred at the residence of Manipur’s Rajya Sabha MP and titular king, Leisemba Sanajaoba. While aligned with the state government's Wars on Drugs AT faced criticism from the Indian National Congress, accused of resembling RSS and Bajrang Dal. Kuki-Zo organizations perceive AT as a radical, armed militia threatening their community. While in the valley, they are seen as the saviour of the Meitei community. ",
      img: "https://www.e-pao.org/galleries/images/News_Related/2024/01/Arambai_20240125_1.jpg"
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
        <Link to="/october">  <img src={oct.img}/></Link>  
          <img src={oct.img2}></img>
         </div>
        
         <div className='content'>
         
          <h1>{oct.title}</h1>   
          
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

export default Oct;

    
    

