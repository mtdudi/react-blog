import React from 'react'
import MainTemplate from '../templates/MainTemplate'
import { useLocation, useParams } from 'react-router-dom'
import styles from './PostPage.module.css'

const PostPage = () => {
  // const {title} = useParams();
  // console.log(title);
  const { state: { post } } = useLocation();

  console.log(post)


  return (
    <MainTemplate>
      <div className={styles.core}>
        <h1 className={styles.tytul}>#{post.id} {post.title}
        </h1>

<img className={styles.foto1} src={`https://picsum.photos/id/${post.postImg}/300/300`} alt=""/>
        <div className={styles.inner}
          dangerouslySetInnerHTML={{ __html: post.content }} />
        <div className={styles.autor}>
          <img className={styles.foto} src={`https://i.pravatar.cc/50?img=${post.authorImg}`} />
          <h3>Autor: {post.author}</h3>
        </div>
      </div>
    </MainTemplate>

  )
}

export default PostPage
