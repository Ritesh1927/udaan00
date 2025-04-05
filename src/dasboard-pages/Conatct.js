import React, { Fragment , useState } from 'react'
import "./Contact.css"
// import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';

const Conatct = () => {

 
  const [data , setdata] = useState();

  const getdata =(e)=> {
    setdata({
      ...data,
      [e.target.name] : e.target.value
    })

  }
console.log(data);

 
  const [selectedCourse, setSelectedCourse] = useState("")
 

  const courses = ["BCA", "MCA","B.TECH","M.TECH","BBA","MBA"];

  const handleChange = (event) => {
    setSelectedCourse(event.target.value)
  };


  // const submitdata = async()=>{
  //      try {
  //       const response = await axios.post('http://localhost:3090/register',data);
  //       // console.log(response);
  //        console.log(response.data.message);
  //        toast.success(response.data.message);
  //        if(response.status === 200){
  //        setTimeout(() => { 
  //         navigate('/'); }, 3000);
  //        }
  //      } catch (error) {
  //       // console.log(error)
  //       toast.error(error.response.data.message);
  //      }
  // }
 
  return (
    <Fragment>
       <div className="Register-p-cont">
        <div className="Register-m-cont">
          <div className="Register-head-cont">
             Contact Us
          </div>
          <div className="s-input-cont">
            
            <div>
            <label htmlFor="#" className="s-input-label-wrap"> Name  </label> <br />
            <input
              type="text"
              placeholder="Enter your Name"
              className="Register-input-wrap"
              name='name'
              onChange={getdata}
            />
            </div>

            <div>
            <label htmlFor="#" className="s-input-label-wrap"> Mobile  </label> <br />
            <input
              type="number"
              placeholder="+91  |  Mobile Number*"
              className="Register-input-wrap"
              name='mobile'
              onChange={getdata}
            />
            </div>
            
            <div>
            <label htmlFor="#" className="s-input-label-wrap"> Email  </label> <br />
            <input
              type="email"
              placeholder="Enter your email"
              className="Register-input-wrap"
              name='email'
              onChange={getdata} 
            />
            </div>
            
          

            <div>
            <label htmlFor="#" className="s-input-label-wrap"> 12th Percentage </label> <br />
            <input
              type="number"
              placeholder="Enter your 12th Percentage"
              className="Register-input-wrap"
              name='password'
              onChange={getdata}
              
            />
            </div>
            <div >
            <label htmlFor="#" className="s-input-label-wrap"> Select Course </label> <br />
            <select id="courses" value={selectedCourse} onChange={handleChange}>
           <option value="" disabled >Courses</option >
             {courses.map((course) => (
            <option key={course} value={course}  >
            {course}
           </option>
            ))}
          </select>
       

            </div>
            

            

            <button className="Register-b-wrap"  >Submit</button>

             

             
          </div>
        </div>
      </div>
      <ToastContainer />
    </Fragment>
  )
}

export default Conatct

