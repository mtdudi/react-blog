import React from 'react'
import styles from './Post.module.css'
import { useNavigate } from 'react-router-dom';
import { posts } from '../FakeDb';


// const shortDesc = posts.short.lenght>80? posts.short.slice(0,80) +"...": posts.short

const Post = ({ post }) => {
    const navigation = useNavigate();

    const handleNavigate = () => {
        navigation(`/blog/${post.slug}`, { state: { post } })
    }


    return (
        <div className={styles.container}>
             
             <img className={styles.fota} src={`https://picsum.photos/id/${post.postImg}/300/300`} alt=""/>
             <div className={styles.category}>#{post.category}</div>
             <h3 className={styles.tytuł}>{post.title}</h3>

             
             <div className={styles.short}>{post.short.substring(0,100)}...</div>
             <button className={styles.klik} onClick={() => handleNavigate(post)} >
                Czytaj więcej
            </button>
             <div className={styles.dol}>
            <img className={styles.fota1} src={`https://i.pravatar.cc/50?img=${post.authorImg}`} alt=""/>
           Autor: {post.author}
            
            </div>
        </div>
    )
}


export default Post
