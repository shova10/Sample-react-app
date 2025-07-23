import React,{useState, useEffect} from "react";
import styles from './Postlist.module.css';

function Postlist(){
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPosts = async () =>{
            try {
                setLoading(true);
                setError(null);

                const response = await fetch('https://jsonplaceholder.typicode.com/posts');

                if (!response.ok){
                    throw new Error('HTTP error! status: ${response.status}');
                }
                const data = await response.json();
                
                setPosts(data);
            } catch (err) {
                console.error ("failed to fetch posts:",err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchPosts();
    }, []);
    if (loading) {
        return (
            <div className ={styles.loadingMessage}>
                <p>Loading Post....</p>
            </div>
        );
    }
    if(error){
        return(
            <div className ={styles.errorMessage}>
                <p>Error: {error}</p>
                <p>Couldn't fetch post. Please try again.</p>
            </div>
        );
    }

    return(
        <div className={styles.postListContainer}>
            <h2 className={styles.listHeading}>Posts from JSONPlaceholder.</h2>
            <ul style={{ listStyle: 'none', padding: 0 }}>
                {posts.map(post => (
                    <li key={post.id} className={styles.postItem}>
                        <h3 className={styles.postTitle}>{post.title}</h3>
                        <p className={styles.postBody}>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );

}
export default Postlist;