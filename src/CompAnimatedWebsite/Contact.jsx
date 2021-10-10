import React, { useState } from 'react';
import { NavLink, Redirect, Route } from 'react-router-dom';

const Contact = () => {

    const [data,setData] = useState({
        fullname:"",
        phone:"",
        email:"",
        msg:""
    })

   const inputEvent = (event) =>{
      const {name,value} =event.target;

      setData((preval)=>{
          return{
              ...preval,
              [name]:value,
          };
          })
     };

     const formSubmit = (e) =>{
        
        setData({
            fullname: "",
            phone: "",
            email: "",
            msg: "",
        });

       alert(`My Name is ${data.fullname}. My Mobile is ${data.phone} AND Email is ${data.email}. Here IS Your Message ${data.msg} ✌...`);
        
       e.preventDefault();

        }

    return (
        <>
        <div className="my-5">
            <h1 className="text-center">Contact US</h1>
        </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}>
                        <div className="mb-3">
                            <label for="fullname" 
                                   className="form-label">FullName 📛</label>
                             <input type="text" 
                                    className="form-control" 
                                   name="fullname"
                                   value={data.fullname}
                                   onChange={inputEvent}
                                    placeholder="Enter Your Name..."
                                   required />
                        </div>

                        <div className="mb-3">
                            <label for="phone" 
                                   className="form-label">Phone 📱</label>
                             <input type="number" 
                                    className="form-control" 
                                   name="phone"
                                   value={data.phone}
                                   onChange={inputEvent}
                                    placeholder="Mobile No..."
                                   required />
                        </div>

                        <div className="mb-3">
                            <label for="exampleFormControlInput1" 
                                   className="form-label">Email address 📧</label>
                             <input type="email" 
                                    className="form-control" 
                                    name="email"
                                    value={data.email}
                                    onChange={inputEvent}
                                    placeholder="name@example.com"/>
                        </div>

                         <div className="mb-3">
                            <label for="exampleFormControlTextarea1" 
                                   className="form-label">Message 📝</label>
                               <textarea className="form-control" 
                                         rows="3"
                                         name="msg"
                                         value={data.msg}
                                         onChange={inputEvent}
                                          placeholder="You Can Also Give Your Valuable Feedback OR Any Suggestions Here Also..."></textarea>
                        </div>

                        <div className="col-12">
                             <button class="btn btn-outline-primary" type="submit">Submit form</button>
                         </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;
