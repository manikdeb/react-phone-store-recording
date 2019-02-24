import React from 'react'
import '../App.css'

export default function Title({name,title}) {
  return (
    <div className="row">
      <div className="col-10 mx-auto my-2 text-title">
        <h1 className="font-weight-bold">
            {name} <strong className="text-blue">{title}</strong>
        </h1>
      </div>
    </div>
  )
}

