import React from 'react';
import BlogPost from '../BlogPost/BlogPost';
import nolan from '../../../images/nolan.png';
import dipjol from '../../../images/dipjol.jpg';
import shakib from '../../../images/shakib.jfif'

import './Blogs.css'


const blogData = [
    {
        title : 'New Movie is rolling out',
        description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        author:'Christopher Nolan',
        authorImg : nolan,
        date : '14 April 2021'
    },
    {
        title : 'My Movie will also get release',
        description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        author:'Dipjol',
        authorImg : dipjol,
        date : '14 April 2021'
    },
    {
        title : 'My Name is Shakib Khan,and i am number 1',
        description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        author:'Shakib Khan',
        authorImg : shakib,
        date : '14 April 2021'
    },
]

const Blogs = () => {
    return (
       <section className="blogs my-5">
           <div className="container">
               <div className="section-header text-center">
                    <h5 className="text-primary text-uppercase">our blog</h5>
                    <h1>Blog News</h1>
               </div>
               <div className="card-deck mt-5">
                    {
                        blogData.map(blog => <BlogPost blog={blog} key={blog.title}/>)
                    }
               </div>
           </div>
       </section>
    );
};

export default Blogs;