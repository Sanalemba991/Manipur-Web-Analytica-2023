import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";


function Dead(){



   
   
        const mays=[
            
    
        {
          id: 1,
          title: "  S.IBETOMBI FREEDOM FIGHTER WIFE ( 80yrs)",
          description:" W/o S.Churchand Singh  (FREEDOM FIGHTER) wife of a revered freedom fighter was burnt alive by an armed Kuki's mob in Kakching district on May 28. ",
         img:"https://www.etvbharat.com/_next/image?url=https%3A%2F%2Fetvbharatimages.akamaized.net%2Fetvbharat%2Fprod-images%2F23-07-2023%2F1200-675-19076870-772-19076870-1690125173095.jpg&w=1920&q=30"
        },
        {
          id: 2,
          title: "Mayanglambam Tiken Meitei ",
          description: "Loinabi(o)Ibemnungshi from Kakching Khunou ",
          img:"https://scontent.fshl2-1.fna.fbcdn.net/v/t39.30808-6/427898655_3616902688581364_401930742128247621_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=TxQ-FxZypXEAX8HaIzk&_nc_ht=scontent.fshl2-1.fna&oh=00_AfBQDNHgmkv48GQfYxriOim2Jkvw3Ne3Q4N-wjvRXe2o-A&oe=65F31367",
         
        },
        {
          id: 3,
          title: "Yumnam Jiten Meitei ",
          description: "S/o (L) Ibohal Meitei from Kwakta Lamkhai ward no 8",
          img:"https://scontent.fshl2-1.fna.fbcdn.net/v/t39.30808-6/427994337_3616902591914707_5774068974086531735_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=OOUds4vFwacAX__UnRG&_nc_ht=scontent.fshl2-1.fna&oh=00_AfDZO81-2ana_jv5_-do-ElaWUdHYDicxAs05SW-4Y0tJA&oe=65F25F6A",
       
        }, 
        {id: 4,
          title: "Moirangthem Heman Meitei ",
          description: "S/o M.Milloshing Meitei from Okshu ningthem Mamang Leikai", 
          img:"https://scontent.fshl2-1.fna.fbcdn.net/v/t39.30808-6/427927611_3616902798581353_650321376033126417_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=lbhBpqGB5qUAX99cWTR&_nc_ht=scontent.fshl2-1.fna&oh=00_AfBnLj5Oz7B0Kuoyy2RDcx_ReGhInxHC9XXKO4LpGVvMfg&oe=65F2C0F0",
       
    },  {
        id: 5  ,
        title: " Khangembam Anandprashad Shingh ",
        description: "S/o Kh.Rajen from Wabagai Kadajit Awang Leikai",
        img:"https://scontent.fshl2-1.fna.fbcdn.net/v/t39.30808-6/427892215_3616903061914660_9120717877092800941_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=RpeVaR2X0_kAX-OITn6&_nc_ht=scontent.fshl2-1.fna&oh=00_AfDREyWicUgLdjaLDMOXb01lvvZhlGR0i8duArSVJrjs8g&oe=65F31DF0",

      }, 
      {id:6 ,
        title: "Yumnam Pishak Meitei ",
        description: "from Kwakta Lamkhai",
        img:"https://scontent.fshl2-1.fna.fbcdn.net/v/t39.30808-6/427887800_3616902541914712_2553386526469974201_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Hijpl-q7Oe0AX81aR_C&_nc_ht=scontent.fshl2-1.fna&oh=00_AfABryPXb92g63tFISgisZsP9TcOhlS7yWkeqgPoPquGfg&oe=65F3108D",
      
  },
  {
    id: 7,
    title: "Laishram Suresh Meitei  ",
    description: "S/o L.Samungou fromOksa Ningthemcha khul",
    img:"https://scontent.fshl2-1.fna.fbcdn.net/v/t39.30808-6/427899109_3616903231914643_3619737591315483871_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=liV65ExZISsAX834A1P&_nc_ht=scontent.fshl2-1.fna&oh=00_AfCJB6taO1HGGUAtHfFeT3DgF8XJAgfiha_DSpfMPsB6_g&oe=65F20A8A",
  
  },
  {
    id: 8,
    title: "Khoirom Meiraba Meitei ",
    description: "S/o kh Sunil from Ithai Barrage",
    img:"https://scontent.fshl2-1.fna.fbcdn.net/v/t39.30808-6/428235431_3616902788581354_3502525844519183946_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=pUp_4NrbBBkAX97qCg0&_nc_ht=scontent.fshl2-1.fna&oh=00_AfAc1jgxcrroW9zw8QqCSIKNjMCohKYSPTuLeAL4hpCtNg&oe=65F1D0A7",
 
  }, 
  {id: 9,
    title: " Yumnam Premkumar ",
    description: "S/o Pishak from Kwakta ",
    img:"https://scontent.fshl2-1.fna.fbcdn.net/v/t39.30808-6/427700128_3616903275247972_9234445877379314_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ZB-SJTWCmzgAX9UcjwV&_nc_ht=scontent.fshl2-1.fna&oh=00_AfB8tdsrTRg48Vi3yjl7x8gIc9PYJomIPRH0PjiBAqwYlw&oe=65F2EDE2",
    
},  {
  id: 10 ,
  title: " Telem Thoithoi ",
  description: "S/o T.Surjit from Leimakhong  ",
  img:"https://scontent.fshl2-1.fna.fbcdn.net/v/t39.30808-6/427905423_3616902921914674_6764993178749931559_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ZgIZ30wSZ4gAX-itiec&_nc_oc=AQn0RMHBlqIJ-8Oa9BS-3-gudr79FL9f7CEEOhcP0iAviSvwfiTuOMLqwM7GAreE2ak&_nc_ht=scontent.fshl2-1.fna&oh=00_AfB5ALO3DZM2RHMokDQ6hwjMVVZKZ4LVdF9wxSKmzEeONA&oe=65F200E6",

},     
{
  id: 11,
  title: "Heikrujam Robinson  ",
  description:"s/o H.Dhana from Khongjom Bazar",
  img:"https://scontent.fshl2-1.fna.fbcdn.net/v/t39.30808-6/427887030_3616902365248063_337177279601799746_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=nHQG7ypKWEcAX84dnB1&_nc_ht=scontent.fshl2-1.fna&oh=00_AfBDf-gjjUl9H9GpKfqkei5vB8Q4GwWt9AligtZoYD2vaw&oe=65F2FA09",
},
{
  id: 12,
  title: "Kongjengbam Shankar ",
  description: "S/o K.Shamu from Ithai ",
  img:"https://scontent.fshl2-1.fna.fbcdn.net/v/t39.30808-6/427887065_3616902481914718_4956829867630509057_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=MQzpsJs4DOEAX87pvzR&_nc_ht=scontent.fshl2-1.fna&oh=00_AfDxEhxnxzdyWuPR1H_ugJggPPldR6iKsB_UzMKqf5lX0g&oe=65F3AB97",

},
{
  id: 13,
  title: "Laithangbam Noren   ",
  description: "S/o (L) Labanggo from Sagoldband Nepra Menjor Leikai",
  img:"https://scontent.fshl2-1.fna.fbcdn.net/v/t39.30808-6/427891654_3616902868581346_5761303425366250352_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=zDUvwd02nFAAX94h_WE&_nc_ht=scontent.fshl2-1.fna&oh=00_AfDVrIVzw35pZrz9irzLmQUQOoWfHsnIbmxRoUROHzpUxA&oe=65F39B34",

}, 
{id:14,
  title: "Akoijam Ronaldo ",
  description: "Heirok part 3",
  img:"https://scontent.fshl2-1.fna.fbcdn.net/v/t39.30808-6/427903828_3616902525248047_2702098092687766541_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=6TGoEGvpk8IAX9k6JWw&_nc_ht=scontent.fshl2-1.fna&oh=00_AfDa4iqUZb4p6em8xrFBBvUgmik-lKCXLC4CR0zOChQx3Q&oe=65F249E5",
 
},  {
id: 15  ,
title: "Laishram Abung  ",
description: "S/o L Megha from Kangla Sangomshang",
img:"https://scontent.fshl2-1.fna.fbcdn.net/v/t39.30808-6/427910054_3616903285247971_8508082741821932688_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=KrL4GV20vE0AX_cuDJA&_nc_ht=scontent.fshl2-1.fna&oh=00_AfBFr6P6ysIyvIUafh-thVjREOCxfSjrei8Vqcqenk648Q&oe=65F352C2",

}, 
{id:16 ,
title: "Biyash Ningthoujam ",
description: "S/o N.Ningthem from Maibam Lotpa ching",
img:"https://scontent.fshl2-1.fna.fbcdn.net/v/t39.30808-6/427899451_3616903038581329_4979338792645661858_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=E4sfXL2Wn4gAX9s-9c_&_nc_ht=scontent.fshl2-1.fna&oh=00_AfBUEqOFi4E2r9-kFCDS2FJctiXOKitEePYtic9b5l9VDA&oe=65F385CE",

},
{
id: 17,
title: "Haobijam Somenkumar ",
description: "S/o H(L) Chaoba Singh from Panggei",
img:"https://scontent.fshl2-1.fna.fbcdn.net/v/t39.30808-6/427882912_3616902985248001_2938434751348758179_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=GVRXSevwptUAX_LVWMh&_nc_ht=scontent.fshl2-1.fna&oh=00_AfAgUer8cEDYuXRUNVA0u_Aof1RJh_bReOoefVRstWykuw&oe=65F30CF7",

},
{
id:18,
title: "Ningthoujam  Dijen  ",
description: "S/o N.Muhindro from Moirang Kampu",
img:"https://scontent.fshl2-1.fna.fbcdn.net/v/t39.30808-6/427905442_3616903098581323_2672986113621998270_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=AixNvcWIUZIAX9XCj8a&_nc_ht=scontent.fshl2-1.fna&oh=00_AfBCr12aM4VT_s3TZcM0DMvrgUQbrCJ37-r15vi5rbldvw&oe=65F2153B",

}, 
  {
id: 20 ,
title: " Laishram Narendra Meitei ",
description: "S/o L.Bingthou from Kongpal ",
img:"https://scontent.fshl2-1.fna.fbcdn.net/v/t39.30808-6/427904514_3616902945248005_5802524603338195446_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=S_UiPamq1WkAX_G1BwD&_nc_ht=scontent.fshl2-1.fna&oh=00_AfCG5n6PcFRQm_dIKQX02jQAYGCOP2QD1j7FDF4JqxS4Og&oe=65F1F55B",
}, {id:21 ,
    title: "Thokchom Kiran (ASI) ",
    description: "S/o Th.Shyamkesho Singh from Wangjing",
    img:"https://scontent.fshl2-1.fna.fbcdn.net/v/t39.30808-6/427893240_3616902355248064_7841137283425397431_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=_9Mb-g1M2JoAX8gL3A1&_nc_oc=AQkVkkwBS254kkEz4HZ2dH2TVhoNe7xysbcE7MpdsbLSP5P_UhJifoNbuaTI3EOjabw&_nc_ht=scontent.fshl2-1.fna&oh=00_AfARUI16d97-_ZKT4Ld0yAVnxIyiFDyXFZ2w3z8fGYEbww&oe=65F28B0A",
    
    },
    {
    id: 22,
    title: "Longjam Naocha ",
    description: "S/o L(Late) Borbang from Phabakchou",
    img:"https://scontent.fshl2-1.fna.fbcdn.net/v/t39.30808-6/427887830_3616902855248014_2870493243872935612_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=PQ3qurDX-98AX9AYwXL&_nc_ht=scontent.fshl2-1.fna&oh=00_AfCvk9SF3HPL-3XbQtZ3kyU5lMWbx-Fv-Gn6VoJCsbWADg&oe=65F2495B",
    
    },
    {
    id:23,
    title: " Angom Romesh   ",
    description: "S/o (L) A.Mukta from Phaiyeng",
    img:"https://scontent.fshl2-1.fna.fbcdn.net/v/t39.30808-6/427883374_3616902581914708_8880253875130600584_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=OcY3V4hu6q8AX8mSrFv&_nc_ht=scontent.fshl2-1.fna&oh=00_AfDyI1bjNas8rhQ5J3qiEq_yquzp9LU12cBo4aVBJKwXRA&oe=65F253A9",
    
    }, 
    {id: 24,
    title: " Haobam Ibocha ",
    description: "S/o (L) H.Kesho from Khoijumantabi ",
    img:"https://scontent.fshl2-1.fna.fbcdn.net/v/t39.30808-6/427991087_3616902735248026_47659855325305185_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=BcsJ0kRhy2gAX9p-3Cm&_nc_ht=scontent.fshl2-1.fna&oh=00_AfDhjxiHRa3rnNWX5PTKs_1yBo2YFZ2vrUL8N5copDM9PQ&oe=65F203C8",
   
    },  {
    id: 25 ,
    title: " Angom Rakesh ",
    description: "S/o A.Tombi from Phaiyeng ",
    img:"https://scontent.fshl2-1.fna.fbcdn.net/v/t39.30808-6/428002318_3616902471914719_848318652082351950_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=KuCkyQ0o3GMAX-x60kJ&_nc_ht=scontent.fshl2-1.fna&oh=00_AfAs8ZUalgkxh8nKGaVJ0RXQIfkaWpmuEpM6pBfUHR5AFg&oe=65F2C01E"
    } ,
    {id:26 ,
        title: "Ningombam Ibomcha  ",
        description: "S/o Th.Shyamkesho Singh from Wangjing",
        img:"https://scontent.fshl2-1.fna.fbcdn.net/v/t39.30808-6/427899818_3616902671914699_5886173243485836356_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Hxw3pmNqx0EAX_06aJC&_nc_ht=scontent.fshl2-1.fna&oh=00_AfCN_Pqi-WoSPsmenLWOIjahv7T2wKGvt379kyLGe804LA&oe=65F3B030",
       
        },
      
        {
        id:28,
        title: " Angom Basanta  ",
        description: "S/o A.Ingojao from Phaiyeng",
        img:"https://scontent.fshl2-1.fna.fbcdn.net/v/t39.30808-6/427972391_3616903178581315_1860260769956353523_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=zywXDYuYep4AX91AkRf&_nc_ht=scontent.fshl2-1.fna&oh=00_AfDJLvKd4SaJ2PjpYzfMI4DwPJdlw1imOQUVM_q32RGAQw&oe=65F31B72",
       
        }, 
        {id: 29,
        title: " Naorem Rajkumar Singh   ",
        description: "S/o N.Sanjoy from Khoijumantabi ",
        img:"https://scontent.fshl2-1.fna.fbcdn.net/v/t39.30808-6/427908712_3616903211914645_3355151656721967034_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=HxBPgpyxH28AX_48Zun&_nc_ht=scontent.fshl2-1.fna&oh=00_AfB19DL4ZzCOimdunyo5mZWh21WNgCqPdiAHHfAoWAslxQ&oe=65F3972E",
        
        },  {
        id: 30 ,
        title: " Yumlembam Shiva ",
        description: "S/o Y. Ibochouba from Sugnu  ",
        img:"https://scontent.fshl2-1.fna.fbcdn.net/v/t39.30808-6/428157417_3616903155247984_7605794275709096734_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=e7nnFLD9LboAX8C-C5_&_nc_oc=AQmIPbKDXjhlLrLfTLcBpexS5lMLNpPp0UbgecE_wGhDeavIV5t3aO5Ra8dbP1DdiQcFob7HfidAnB1hi4FkS96a&_nc_ht=scontent.fshl2-1.fna&oh=00_AfBTpqz8isY21Q4ffhrVZdkt1kK3_Ky23huYItefM5gY5g&oe=65F3A463",
       
        }

    ]
      return (
        <div className='home'>
             <Navbar></Navbar>
            <div className="Ol">List Of SomePeople that Deceased During War</div>
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
    
    export default Dead;
    
        
        
    
    


