"use client"

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import { useEffect } from 'react';

import EditPostBox from "@/components/edit_post_box/edit_post_box";

import styles from './syles.module.css'

const Admin = () => {

    useEffect(()=>{
        document.querySelector(".ql-toolbar.ql-snow").style.border = 'none';
        document.querySelector(".ql-toolbar.ql-snow").style.borderBottom = '1px solid black';
        document.querySelector(".ql-toolbar.ql-snow").style.fontFamily = 'inherit';
        document.querySelector(".ql-container.ql-snow").style.border = 'none';
        document.querySelector(".ql-container.ql-snow").style.fontFamily = 'inherit';
    },[])

    return(
        <main className={styles.container}>
            <div className={styles.inner_container}>
                <div className={styles.posts_container}>
                  <h3>Posts</h3>  
                  <EditPostBox/>
                </div>
                <div className={styles.add_post_container}>
                    <h3>Add New Post</h3>
                    <form action="">
                        <input type="text" name="title" placeholder='Title'/>
                        <input type="text" name="author" placeholder='Author'/>
                        <ReactQuill theme="snow" placeholder='Blog Post' style={{
                            backgroundColor: 'var(--accent-color)',
                            height: '200px'
                        }}/>
                        <button type="submit">Add</button>
                    </form>
                </div>
            </div>
        </main>
    )
}

export default Admin;