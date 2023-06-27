import React, { useState } from 'react'
import axios from 'axios';
import { Editor } from 'primereact/editor';

function Create() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [about, setAbout] = useState("");
  const [errors, setErrors] = useState({});


  const handleSubmit = () => {
    // if (name && image && email && address && about) {
    const studentData = {
      name: name, image: image, email: email, address: address, about: about
    }

    axios.post("http://localhost:3003/create-student/", studentData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }
    ).then((res) => {

      if (res.data.status == true) {
        alert("Successfully created");
      } else {
        // status false
        if (res.data.status == false) {
          console.log(res.data)
          setErrors(res.data.errors)
        }

      }
    })
    // }

  }

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <div style={{ width: "600px" }} className='mx-auto'>
          <div className="mb-3">
            <label htmlFor="formFile" className="form-label">Image</label>
            <input onChange={(e) => { setImage(e.target.files[0]) }} className="form-control" type="file" id="formFile" accept="image/*" />
            {
              (errors.image) ? <p style={{ color: 'red' }}>{errors.image}</p> : null
            }
          </div>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input onChange={(e) => { setName(e.target.value) }} type="text" className="form-control" id="name" />
            {
              (errors.name) ? <p style={{ color: 'red' }}>{errors.name}</p> : null
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
          {/* <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">About</label>
            <textarea onChange={(e) => { setAbout(e.target.value) }} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div> */}

          <Editor value={about} onTextChange={(e) => setAbout(e.htmlValue)} style={{ height: '320px' }} />

          <button onClick={handleSubmit} className='btn btn-primary'>Create</button>
        </div>
      </form>
    </>
  )
}

export default Create