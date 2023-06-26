import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom'

function Edit() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [about, setAbout] = useState("");

  const params = useParams();
  const id = params.id;

  const handleSubmit = () => {
    if (name && image && email && address && about) {
      const studentData = {
        name: name, image: image, email: email, address: address, about: about
      }

      axios.put("http://localhost:3003/update-student/" + id, studentData , {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
      ).then( (res) => {
        console.log(res.data)
        if(res.data.status == true) {
          alert("Successfully updated");
        }else {
          alert("something went wrong")
        }
      })
    }

  }

  useEffect(() => {
    axios.get("http://localhost:3003/student/" + id).then((res) => {
      console.log(res.data.student);
      if(res.data.status == true) {
        setName(res.data.student.name);
        setEmail(res.data.student.email);
        setAddress(res.data.student.address);
        setAbout(res.data.student.about);
      }
    })
  }, []);

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <div style={{ width: "600px" }} className='mx-auto'>
          <div className="mb-3">
            <label htmlFor="formFile" className="form-label">Image</label>
            <input onChange={(e) => { setImage(e.target.files[0]) }} className="form-control" type="file" id="formFile" />
          </div>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input value={name} onChange={(e) => { setName(e.target.value) }} type="text" className="form-control" id="name" />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input value={email} onChange={(e) => { setEmail(e.target.value) }} type="email" className="form-control" id="email" />
          </div>
          <div className="mb-3">
            <label htmlFor="address" className="form-label">Address</label>
            <input value={address} onChange={(e) => { setAddress(e.target.value) }} type="text" className="form-control" id="address" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">About</label>
            <textarea value={about} onChange={(e) => { setAbout(e.target.value) }} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
          <button onClick={handleSubmit} className='btn btn-primary'>Update</button>
        </div>
      </form>
    </>
  )
}

export default Edit