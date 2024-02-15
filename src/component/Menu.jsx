import Navbar from "./Navbar";
import Footer from "./Footer";

function Menu() {
    const posts = [
        {
          id: 1,
          title: "Understanding India’s Manipur Conflict and Its Geopolitical Implications",
          description: "Understanding India’s Manipur Conflict and Its Geopolitical Implications",
          img:"https://img.etimg.com/thumb/msid-103699465,width-300,height-225,imgsize-1932656,resizemode-75/manipur-violence.jpg",
        },
        {
          id: 2,
          title: "Understanding India’s Manipur Conflict and Its Geopolitical Implications",
          description: "Understanding India’s Manipur Conflict and Its Geopolitical Implications",
          img: "https://images.cnbctv18.com/wp-content/uploads/2023/07/naipurpro-1019x573.jpg?impolicy=website&width=590&height=264",
        },
        {
          id: 3,
          title: "Understanding India’s Manipur Conflict and Its Geopolitical Implications",
          description: "Understanding India’s Manipur Conflict and Its Geopolitical Implications",
          img: "https://www.livemint.com/lm-img/img/2023/05/26/600x338/Clashes-broke-out-in-Manipur-on-May-3-following-th_1685010777753_1685079579577.jpg",
        }, {id: 4,
          title: "Understanding India’s Manipur Conflict and Its Geopolitical Implications",
          description: "Understanding India’s Manipur Conflict and Its Geopolitical Implications",
          img: "https://akm-img-a-in.tosshub.com/indiatoday/images/breaking_news/202305/pti05_05_2023_000197b-sixteen_nine.jpg?VersionId=sXvBmuOyfwBOvt6Y3oY5A0W0cpa_hNJk",
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
