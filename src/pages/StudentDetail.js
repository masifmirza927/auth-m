import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'

function StudentDetail() {
  const [student, setStudent] = useState(null);
  const navigate = useNavigate();

  const params = useParams();
  const id = params.id;


const handleDelete = () => {
    axios.delete("http://localhost:3003/student-delete/"+id).then( (res) => {
      if(res.data.status == true) {
        alert("successfully delete");
        navigate("/");
      }else {
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
        {student.name}
        <Link to={`/edit/${id}`} className="btn btn-info mx-2">Edit</Link>
        <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
      </>
    )
  } else {
    return(
      <>
      loading...
      </>
    )
  }

}

export default StudentDetail