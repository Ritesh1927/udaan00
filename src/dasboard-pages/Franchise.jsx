import React, { Fragment, useState } from 'react'
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
 

const Franchise = () => {

    const [franchiesData, setFranchiesData] = useState({
      orgizationname: "",
      mobile: "",
      contactperson: "",
      email: "",
      description: "",  
      websiteurl: "", 
      
    });
  //  console.log(franchiesData);
   const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInput  = (e) => {
      setFranchiesData({ ...franchiesData, [e.target.name]: e.target.value });
    };
 

     const handleSub = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // console.log("Current form data:", franchiesData); // Debugging
        // console.log("Submitting request ....");
      
    
        try {
          
          const payload = { ...franchiesData };
        
          // console.log("Payload before sending:", payload);

          const response = await axios.post("/api/franchise", payload, {
            headers: { "Content-Type": "application/json" },
          });
          // console.log(response);
    
          toast.success(response.data.message);
          // Reset form
          // setFranchiesData({
          //   orgizationname: "",
          //   mobile: "",
          //   contactperson: "",
          //   email: "",
          //   description: "",  
          //   websiteurl: ""
          // });
          
        } catch (error) {
          const errorMsg = error.response?.data?.message || "Submission failed";
          toast.error(errorMsg);
        } finally {
          setIsSubmitting(false);
        }
      };
  
  return (
    <Fragment>
      <div>

        <form onSubmit={handleSub} >
        <div>
        <input type="text" 
        name='orgizationname'
        placeholder="name of orgization"
        onChange={handleInput}
        className="form-control"
        required
        />
         </div>
         <div>
        <input type="tel" 
        name='mobile'
        placeholder="Enter your mobile number"
        onChange={handleInput}
        className="form-control"
        required
        />
        </div>
        <div>
        <input type="text" 
        name='contactperson'
        placeholder="Contact person name"
        onChange={handleInput}
        className="form-control"
        required
        /></div>
        <div>
        <input type="email" 
        name='email'
        placeholder="Enter your email"
        onChange={handleInput}
        className="form-control"
        required
        />
        </div>
        <div>
        <textarea name="description" id=""
         placeholder='About Company' 
         onChange={handleInput}
         className='form-control'
         required>
        </textarea>
        </div>
        <div>
        <input type="url" 
        name='websiteurl'
        placeholder="Enter your website URL" 
        onChange={handleInput}
        className="form-control"
        required
        />
        </div>
        

        <div>
          <button className='btn btn-primary'  
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit Now"}
          
          </button>
        </div>
        </form>
        <ToastContainer  />
      </div>
      
    </Fragment>
  )
}

export default Franchise
 