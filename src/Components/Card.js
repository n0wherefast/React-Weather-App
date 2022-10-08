import React from 'react'

export  const Card= () => {
  return (
    <div className="card mb-3" style={{maxWidth:"540px",marginTop:"1rem" }}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src="..." className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Rome</h5>
        <p className="card-text">12 Ottobre</p>
        <p className="card-text">26 C</p>
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
  )
}
