import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Default extends Component {
    render() {
        console.log(this.props)

        return (
            <div className="container my-5 ">
                <div className="row ">
                    <div className="col-10 mx-auto text-center">
                        <h1>404</h1>
                        <h2 className=" pt-5">
                            Nie ma strony o adresie bąbki
                        <span className="text-danger">
                                {this.props.history.location.pathname}
                            </span>. Przejdź proszę na  <Link to="/">  stronę główną.
                        </Link>
                        </h2>
                    </div>
                   
                </div>
            </div>
        )
    }
}


