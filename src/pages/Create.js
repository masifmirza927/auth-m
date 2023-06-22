import React, { useState } from 'react'

function Create() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [about, setAbout] = useState("");
  const [errors, setErrors] = useState({});
  
  const handleSubmit = () => {

    if(name && image && email && address && about) {
      
      

    }

    // if(!name) {
    //   // const newAr = {...errors, name: "name field is required"}
    //   setErrors(prevState => ({
    //     ...prevState,
    //     name: "name filed is required"
    //   }));
    //   console.log("inside")
    // }

console.log(errors)
  }

  return (
    <>
      <form onSubmit={ (e) => e.preventDefault() }>
        <div style={{ width: "600px" }} className='mx-auto'>
          <div className="mb-3">
            <label htmlFor="formFile" className="form-label">Image</label>
            <input onChange={(e) => { setImage(e.target.files[0])} } className="form-control" type="file" id="formFile"  />
          </div>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input onChange={(e) => { setName(e.target.value) }} type="text" className="form-control" id="name" />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input onChange={(e) => { setEmail(e.target.value) }} type="email" className="form-control" id="email" />
          </div>
          <div className="mb-3">
            <label htmlFor="address" className="form-label">Address</label>
            <input onChange={(e) => { setAddress(e.target.value) }} type="text" className="form-control" id="address" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">About</label>
            <textarea onChange={(e) => { setAbout(e.target.value) }} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
          <button onClick={handleSubmit} className='btn btn-primary'>Create</button>
        </div>
      </form>
    </>
  )
}

export default Create