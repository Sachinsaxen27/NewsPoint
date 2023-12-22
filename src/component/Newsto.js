import React from 'react'

const Newsto=(props)=> {
        // let {color,colorrtx,title, description, Url, imageUrl,author,date } = this.props
        return (
            <>
            <div>
                <div className={`card my-2 bg-${props.color}`} style={{width: "19rem", height:"25.8rem"}}>
                    <img src={props.imageUrl?props.imageUrl:"https://images.moneycontrol.com/static-mcnews/2023/02/FM-1-737x435.jpeg"} className="card-img-top w-100 p-3"style={{height: "200px"}} alt="..."/>
                        <div className="card-body" >
                            <h5 className='card-title' style={{color:props.colorrtx}}>{props.title}...</h5>
                            <p className="card-text" style={{color:props.colorrtx}}>{props.description}...</p>
                            <p className="card-text" style={{color:props.colorrtx}}><small className="text " style={{color:props.color}}>By:-{props.author?props.author:"Unknown"} at {new Date(props.date).toDateString()}</small></p>
                            <a href={props.Url} target='_blank' rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
                        </div>
                </div>
            </div>
            </>
        )
   
}
export default Newsto