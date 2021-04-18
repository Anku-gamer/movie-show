import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import Sidebar from '../Dashboard/Sidebar/Sidebar';

const Feedback = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [imageURL, setIMageURL] = useState(null);
  const onSubmit = data => {
      console.log(data)
      const eventData = {
        name: data.name,
        email:data.email,
        place:data.place,
        review:data.review,
        imageURL: imageURL
      };
      const url = `https://aqueous-shelf-09145.herokuapp.com/addReview`;
    
      fetch(url, {
        method: 'POST', 
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(eventData)
      })
      .then(res => console.log('server side response', res))
    };
  const handleImageUpload= event =>{
    console.log(event.target.files[0])
    const imageData = new FormData();
    imageData.set('key', '86c63ceb40480da5f5634fae73891d0c');
    imageData.append('image', event.target.files[0]);
    
    axios.post('https://api.imgbb.com/1/upload', 
    imageData)
    .then(function (response) {
        console.log(response.data.data.display_url)
      setIMageURL(response.data.data.display_url);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
    return (
    <div className="container-fluid row">
        <div className="col-md-4"> 
        <Sidebar></Sidebar>
        </div>
         <div className="col-md-8" >
             <h2 className='p-5'>We want to know your feed back</h2>
         
         <form  onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">from</label>
                        <br/>
                        <input name="from" type="text" {...register("from")}  placeholder='from' className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Name</label>
                        <br/>
                        <input name="name" type="text" {...register("name")}  placeholder='name' className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Review</label>
                        <br/>
                        <input name="review" type="text" {...register("review")}  placeholder='review' className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Upload a image</label>
                        <input onChange={handleImageUpload}type="file" className="form-control" id="exampleInputPassword1" placeholder="Picture" />
                    </div>
                    <br/>
                    <input type="submit" />
                </form>
         </div>
    </div>
    );
};

export default Feedback;