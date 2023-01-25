import React, { Component } from 'react'

const Newsitem =(props)=> {
   
   
        let { description,title, imageUrl, newsUrl} = props;
        return (
            <div className="my-3">
                 <span className="badge rounded-pill text-bg-primary">Primary</span>
                <div className="card" >
               
                                <img src={imageUrl} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{title}</h5>
                                    <p className="card-text">{description}</p>
                                    <a href={newsUrl} className="btn btn-sm btn-primary">Read more</a>
                                </div>
                               
                            </div>
            </div>
        )
    
}
export default  Newsitem