import { Link } from "react-router-dom";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { doc, setDoc } from "firebase/firestore";
import { database } from "../firebaseConfig";

const logout = () => {
  localStorage.clear();
  window.location.reload();
};

function Home(props) {
  
  const addNews = async (post) => {
    const newsDoc = doc(database, "News");
    await setDoc(newsDoc, {
      title: post.title,
      description: post.description
    });
  };

  const Layout = () => {
    return (
      <>
        <Navbar />
      </>
    );
  };

  const posts = [
    {
      id: 1,
      title: "May 3 violence was likely pre-planned: Manipur CM Biren Singh",
      description: "Manipur Chief Minister N. Biren Singh said on Thursday that he was in touch with the legislators from the tribal Kuki-Zo community and would provide adequate security for them to attend the Assembly session slated for August 29 in Imphal. He said the violence that started on May 3 was likely pre-planned. He said to stop “illegal migration” from Myanmar, the State has sought more Central forces for the speedy fencing of the 398-km porous international border. ",
      img: "https://th-i.thgim.com/public/incoming/6gnxzi/article67232444.ece/alternates/LANDSCAPE_1200/20230823208L.jpg",
    },
    {
      id: 2,
      title: "175 Killed,over 1,100 injured in Manipur Since May 3",
      description: "Manipur Police on friday were killed and injured while 32 are missing in the ongoing ethnic strife which started in the state on May3. Addressing a press conference,Inspector General of Police IK Muiva said that in imphal,4786 houses were set on fire and 386 religious structures were destroyed or vandilised of which 254 are churches and 132 temples",
      img: "https://img.etimg.com/thumb/msid-103699465,width-300,height-225,imgsize-1932656,resizemode-75/manipur-violence.jpg",
    },
    {
      id: 3,
      title: "Curfew in parts of India’s Manipur after protests over killing of students",
      description: "Dozens of students injured in violence following protests over alleged abduction and murder of two Meitei students, officials say.Authorities have imposed a curfew in the capital and some other places in India’s restive state of Manipur after dozens of students were injured in violence following protests against the alleged abduction and murder of two students.Ethnic violence has plunged the northeastern state bordering Myanmar into what many security experts describe as an intense civil war fought over land, jobs and political clout between its two largest local group.More than 80 students were injured in Wednesday’s clashes, another police official said on condition of anonymity, adding that the situation was “extremely tense” after armed mobs vandalised an office of the governing party and hurled petrol bombs at the police parties.Mobile internet services have been suspended in the state for five days",
      img: "https://www.aljazeera.com/wp-content/uploads/2023/09/2023-09-27T134108Z_129384644_RC21H3A7H7IZ_RTRMADP_3_INDIA-MANIPUR-CONFLICT-1695890932.jpg?resize=770%2C513&quality=80",
    },
    {
      id: 4,
      title: "9 months months on, no end in sight for violence in Manipur",
      description: "After Nine months, there is no end in sight to the ongoing ethnic violence in Manipur. The violence between the Meitei and Kuki communities broke out on May 3.",
      img: "https://akm-img-a-in.tosshub.com/indiatoday/images/media_bank/202308/manipur-020819-16x9.jpeg?VersionId=22BC_bOiE.qkvZceem3gyYb64zXDIc3c&size=690:388",
    }
  ];

  return (
    <div>
      <div>
        <Layout />
      </div>

      <div>
        <div className='home'>
          <div className='posts'>
            {posts && posts.map(post => (
              <div className='post' key={post.id}>
                <div className='img'>
                  <Link onClick={() => addNews(post)} to="/details"><img src={post.img} alt={post.title} /></Link>
                </div>
                <div className='content'>
              
                    <h1>{post.title}</h1>
                  
                  <p>{post.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button onClick={logout}>Logout</button>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
