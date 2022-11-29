import React from 'react'
import Nav from './Nav'

export default function Contact() {
  return (
    <>
    <Nav/>
        <div className="container">
        <div className="card">
          <div className="card-body">
          <form>
  <div className="mb-3">
    <label className="form-label">Name</label>
    <input type="text" className="form-control" id="name" name='name'/>
  </div>
  <div className="mb-3">
    <label className="form-label">Email</label>
    <input type="email" className="form-control" id="email" name='email'/>
  </div>
  <div className="mb-3">
    <label className="form-label">Phone Number</label>
    <input type="text" className="form-control" id="number" name='number'/>
  </div>
 
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
          </div>
        </div>

        </div>
    </>
  )
}
