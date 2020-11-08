import React from 'react'

export default function Title({ title, name }) {
    return (
        <div className="row">
            <div className="col-10 mx-auto my-5 text-center text-title">
                <h1 className="text-capitalize font-weight-bo">     <strong className="text-uppercase">  {title} {name}</strong></h1>


            </div></div>

    )
}
