import React, { useRef, useState } from 'react'
import { useFormik } from 'formik';

function Create() {
  // const [name, setName] = useState("");
  // const [image, setImage] = useState("");
  // const [email, setEmail] = useState("");
  // const [address, setAddress] = useState("");
  // const [about, setAbout] = useState("");
  // const eRefs = useRef({});
  // const [errors, setErrors] = useState([]);
  const formik = useFormik({
    initialValues: {
      name: "", image: "", email: "", address: "", about: ""
    },
    onSubmit: values => {
      // alert(JSON.stringify(values, null, 2));
      console.log(values)
    },
  });

  // const handleSubmit = () => {

  //   // if (!address)  setErrors({...errors, address: "please write your address"});
  //   // if (!about)  setErrors({...errors, about: "write something about you"});

  //   // if(name && image && email && address && about) {



  //   // }

  // }

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name">Student Name</label>
        <input
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        </div>
        <div className="mb-3">
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="image">Image</label>
          <input
            id="image"
            name="image"
            type="file"
            onChange={(e) => formik.setFieldValue('image', e.currentTarget.files[0])}
          />
        </div>


        <button type="submit" className='btn btn-primary'>Submit</button>
      </form>
      {/* <form onSubmit={(e) => e.preventDefault()}>
        <div style={{ width: "600px" }} className='mx-auto'>
          <div className="mb-3">
            <label htmlFor="formFile" className="form-label">Image</label>
            <input onChange={(e) => { setImage(e.target.files[0]) }} className="form-control" type="file" id="formFile" />
          </div>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input onChange={(e) => { setName(e.target.value) }} type="text" className={`form-control ${(errors.name) ? " inputError" : ""}`} id="name" />
            {
              (errors.name) ? <p className='errTxt'>{errors.name}</p> : ""
            }
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
      </form> */}
    </>
  )
}

export default Create