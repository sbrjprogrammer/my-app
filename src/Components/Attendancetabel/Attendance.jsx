import React from 'react'
import "./Attendance.css"

function AttendancePolicy() {
  return (
    <div className='container-fluid'>

        <div className='row'>
            <div className='col-lg-12 col-md-18 col-sm-12 col-12  '>

                <div className='Card table-responsive'>
                    <table className='table table-bordered '>
                        <thead className='bg-primary'>
                            <th>#</th>
                            <th>Employee type</th>
                            <th>Min login</th>
                            <th>Max login</th>
                            <th>Min logout</th>
                            <th>min Late</th>
                            <th>Max late</th>
                            <th>Min Half</th>
                            <th>Max Half day </th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </thead>

                        <tbody>
                          <tr>
                            <td>Local</td>
                            <td>9:30</td>
                            <td>9:45</td>
                            <td>9:45</td>
                            <td>9:45</td>
                            <td>9:45</td>
                            <td>9:45</td>
                            <td>Local</td>
                            <td>jd</td>
                            <td></td>
                            <td></td>
                          </tr>

                        </tbody>
                    </table>




                </div>
            </div>
        </div>

{/*     
    <table className="table">
      <thead className="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Employee Type</th>
          <th scope="col">Min Login</th>
          <th scope="col">Max Login</th>
          <th scope="col">Min Logout</th>
          <th scope="col">Min Late</th>
          <th scope="col">Max Late</th>
          <th scope="col">Min HalfDay</th>
          <th scope="col">Max HalfDay</th>
          <th scope="col">Edit</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr> 
            <td></td>
            <td><input type="text" /></td>
            <td><input type="text" /></td>
            <td><input type="text" /></td>
            <td><input type="text" /></td>
            <td><input type="text" /></td>
            <td><input type="text" /></td>
            <td><input type="text" /></td>
            <td><input type="text" /></td>
            <td></td>
        </tr>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </table> */}

  
  </div>
  )
}

export default AttendancePolicy