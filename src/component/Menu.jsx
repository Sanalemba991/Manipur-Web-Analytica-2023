import Navbar from "./Navbar";
import Footer from "./Footer";

function Menu() {
    const posts = [
        {
       
          id: 1,
          title: " May Unsee Footage",
          description: "Unseen footage of Kuki Mob going on rampage and committing Heinous crimes against Meitei's and destroying it's houses on 3rd May, 2023. on This Day Most of them holding Sophosticate Weapon and Try to Genocide Meiteis from Manipur by Good We all Safe ",
          img: "https://swarajya.gumlet.io/swarajya/2024-01/7248b861-c2e9-441a-bac5-3b6eb2a79b83/Untitled_1.png?w=640&q=75&auto=format,compress&format=webp",
        },
        {
          id: 2,
          title: "October:Weapon Siezed ",
          description: " On 13th October 2023(from 3 am to 4:45 am), CASO was conducted by combined team of Imphal West District Police and S.F. at Kameng, Khamran and Mana Ingkhol area of IW Dist. The combined forces searched about 150 houses in the three villages. The following items are recovered in the ops.(i) Carbine - 3 nos.(ii) Carbine magazines- 5 nos.(iii) 9 mm pistol - 1 no with 1 mag.(iv) 7.65 lama pistol - 1 no with mag.(v) 36 HE Granade - 3 nos.(vi)  Air gun with scope - 1 no.All state government/state government aided/private unaided schools in Manipur will re-open from 6th October 2023,” state director of education (schools) L Nadakumar Singh said in an order on Thursday",    
          img: "https://scontent.fshl2-1.fna.fbcdn.net/v/t39.30808-6/392746839_637546485160691_9187925507524363128_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=1vKt7gaiIwUAX8iIIxn&_nc_ht=scontent.fshl2-1.fna&oh=00_AfCxsVvg3LIuWMmnJyii9VXlKtA2whWNaZ2Hwxsme1gpjw&oe=65C6AF77",
         img2:"https://www.facebook.com/photo?fbid=637546538494019&set=pcb.637546558494017" 
        },
        {
          id: 3,
          title: "Arambai Tenggol",
          description:"Arambai Tenggol is a  group that emerged in the state of Manipur in northeastern India in the early 2020s.They are one of the  most respected and talented groupin manipur. they helped during today's crises most of them are meitei's ...There are more than 54 branch group and more than 54000.Because of  Arambai meitei people lives in manipur peacefully they exposed kuki's lies throughout the World ",
          img: "https://scontent.fshl2-1.fna.fbcdn.net/v/t39.30808-6/384573255_3567492050186817_6357640911999411832_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=IPSWV1pw2hgAX9Nd6Ht&_nc_ht=scontent.fshl2-1.fna&oh=00_AfDC7Tj4ZtxxiI5x7z6iLttX0XT8JjTSni2UGYG18QRAXQ&oe=65C95819",
        },
        {
          id: 4,
          title: "  S.IBETOMBI FREEDOM FIGHTER WIFE ( 80yrs)",
          description:" W/o S.Churchand Singh  (FREEDOM FIGHTER) wife of a revered freedom fighter was burnt alive by an armed Kuki's mob in Kakching district on May 28. ",
         img:"https://www.etvbharat.com/_next/image?url=https%3A%2F%2Fetvbharatimages.akamaized.net%2Fetvbharat%2Fprod-images%2F23-07-2023%2F1200-675-19076870-772-19076870-1690125173095.jpg&w=1920&q=30"
        }]
  return (
    <div className='menu'>
      
       
       {posts && posts.map(post => (
          <>
          <div className='post'  key={post.id}>
          <img src={post.img}/>
          <h1>{post.title}</h1>   
          <button>Read more</button>
         </div>   
         </>
        ))}
        <Footer></Footer>
    </div>
  )
}

export default Menu
