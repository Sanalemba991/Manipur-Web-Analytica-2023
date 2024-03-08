import { useEffect, useState } from "react";
import { database } from "../firebaseConfig";
import { onSnapshot, collection, query, orderBy } from "firebase/firestore";

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
            {blogs.length === 0 ? (
                <p>No Blogs Found</p>
            ) : (
                blogs.map((blog) => (
                    <div className="blog-cont" key={blog.id}>
                        <div className="section1">
                            <p>{blog.title}</p>
                            <p>{blog.createdby}</p>
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
        </div>
    );
}

export default BlogDisplay;
