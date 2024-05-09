import { useEffect, useState } from "react";
import { database } from "../firebaseConfig";
import { onSnapshot, collection, query, orderBy } from "firebase/firestore";
import Footer from '../component/Footer'
import Navbar from "./Navbar";
function BlogDisplay() {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const blogRef = collection(database, "News");
        const q = query(blogRef, orderBy("createdat", "desc"));

        onSnapshot(q, (snapshot) => {
            const allBlogs = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }));
            setBlogs(allBlogs);
        });
    }, []);

    return (
        <div>
               <Navbar></Navbar>
            {blogs.length === 0 ? (
                <p>No News Found</p>
            ) : (
                blogs.map((blog) => (
                    <div className=".posta" key={blog.id}>
                        <div className="section1">
                            <p className="titles">{blog.title}</p>
                            <p className="datea">{blog.createdby}</p>
                        </div>
                        <div className="section2">
                            <img src={blog.imgurl} alt="blog" />
                            <p>{blog.description}</p>
                        </div>
                        <div className="section3">
                            <p>posted on -{blog.createdat}</p>
                        </div>
                    </div>
                ))
            )}
             <Footer></Footer>
        </div>
        
    );
}

export default BlogDisplay;
