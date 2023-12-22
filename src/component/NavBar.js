import React from 'react'
import { Link } from 'react-router-dom'

const NavBar=(props)=> {
        return (
            <>
                <div>

                    <nav className={`navbar navbar-expand bg-${props.color}`}>
                        <div className="container-fluid">
                            <Link className="navbar-brand" to="/Allnews" style={{color:props.colorrtx}}>NewsPoint</Link>
                            <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <Link className="nav-link" style={{ color: props.colorrtx }} aria-current="page" to="/">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" style={{ color: props.colorrtx }} to="/business">Business</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" style={{ color: props.colorrtx }} to="/entertainment">Entertainment</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" style={{ color: props.colorrtx }} to="/general">General</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" style={{ color: props.colorrtx }} to="/health">Health</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" style={{ color: props.colorrtx }} to="/science">Science</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" style={{ color: props.colorrtx }} to="/sports">Sports</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" style={{ color: props.colorrtx }} to="/technology">Technology</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className='form-check form-switch mx-2'>
                                <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault" />
                                <label className="form-check-label" style={{ color: props.colorrtx }} htmlFor="flexSwitchCheckDefault">{props.namee}</label>
                            </div>
                        </div>
                    </nav>
                </div>
            </>
        )
    }
     export default NavBar
