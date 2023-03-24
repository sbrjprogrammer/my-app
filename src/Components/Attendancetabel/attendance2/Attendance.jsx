import React from 'react'
import "./attendence.css"

function Attendance() {
  return (
    <section className="bg-light p-5">
    <h3 className="pb-2">Responsive Table</h3>
    <div className="table-responsive" id="no-more-tables">
      <table className="table bg-white">
        <thead className="bg-dark text-light">
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>State</th>
            <th>Email</th>
            <th>Phone No</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-title="First Name">Alisha</td>
            <td data-title="Last Name">Roy</td>
            <td data-title="Age">20</td>
            <td data-title="State">Kerala</td>
            <td data-title="Email">abc@gmail.com</td>
            <td data-title="Phone No">9876543456</td>
          </tr>
          <tr>
            <td data-title="First Name">Barun</td>
            <td data-title="Last Name">Basu</td>
            <td data-title="Age">24</td>
            <td data-title="State">Goa</td>
            <td data-title="Email">def@gmail.com</td>
            <td data-title="Phone No">7685434567</td>
          </tr>
          <tr>
            <td data-title="First Name">Deena</td>
            <td data-title="Last Name">Sharma</td>
            <td data-title="Age">22</td>
            <td data-title="State">Bihar</td>
            <td data-title="Email">ghi@gmail.com</td>
            <td data-title="Phone No">8765438765</td>
          </tr>
          <tr>
            <td data-title="First Name">Suman</td>
            <td data-title="Last Name">Kashyap</td>
            <td data-title="Age">26</td>
            <td data-title="State">Assam</td>
            <td data-title="Email">jkl@gmail.com</td>
            <td data-title="Phone No">9546789876</td>
          </tr>
          <tr>
            <td data-title="First Name">Seema</td>
            <td data-title="Last Name">Bose</td>
            <td data-title="Age">23</td>
            <td data-title="State">Karnataka</td>
            <td data-title="Email">mno@gmail.com</td>
            <td data-title="Phone No">7654345678</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
  )
}

export default Attendance