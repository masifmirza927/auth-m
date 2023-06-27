import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function Search() {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState(null);

  const handleInput = (value) => {
    setSearch(value);
    if (value.length >= 3) {
      axios.get("http://localhost:3003/search/" + value).then((res) => {
        console.log(res.data);
        if(res.data.students.length > 0) {
          setResult(res.data.students);
        }else {
          setResult(null);
        }
      })
    }
  }

  return (
    <>
      <div className='searchInputBox mb-3'>
        <input className='form-control' style={{ outline: 'none' }} value={search} onChange={(e) => handleInput(e.target.value)} type='text' />
        {
          (result != null) ? (<>
            <div className='dropDownBox'>
              <ul>
                {
                  result.map( (item) => {
                    return( <li key={item._id}> <Link to={`/student/${item._id}`}>{item.name}</Link> </li> )
                  })
                }
              </ul>
            </div>
          </>) : null
        }
      </div>
    </>
  )
}

export default Search