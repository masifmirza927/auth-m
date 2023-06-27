import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'


function StudentDetail() {
  const [student, setStudent] = useState(null);
  const navigate = useNavigate();

  const params = useParams();
  const id = params.id;


  const handleDelete = () => {
    axios.delete("http://localhost:3003/student-delete/" + id).then((res) => {
      if (res.data.status == true) {
        alert("successfully delete");
        navigate("/");
      } else {
        alert("not deleted")
      }
    })
  }

  useEffect(() => {
    axios.get("http://localhost:3003/student/" + id).then((res) => {
      console.log(res.data);
      setStudent(res.data.student);
    })
  }, []);


  if (student !== null) {
    return (
      <>
        <div className='box'>
          <button onClick={() => { navigate(-1) }} className='btn btn-dark' style={{ position: "absolute", left: "25px" }}>&#x2190; Back</button>
          <div className='innerBox'>
            <img src={student.image} className='rounded-circle' style={{ width: "200px", marginTop: "60px" }} />
            <div>
              <h1>{student.name}</h1>
              <p>{student.email}</p>
            </div>
            <p>
              <div dangerouslySetInnerHTML={{ __html: student.about }} />

            </p>
            <div>
              <Link to={`/edit/${id}`} className="btn btn-info">Edit</Link>
              <button className="btn btn-danger mx-2" onClick={handleDelete}>Delete</button>
              <Link to={`/viewpdf/${id}`} className='btn btn-dark'>PDF download</Link>
            </div>
          </div>
        </div>


      </>
    )
  } else {
    return (
      <>
        loading...
      </>
    )
  }

}

export default StudentDetail