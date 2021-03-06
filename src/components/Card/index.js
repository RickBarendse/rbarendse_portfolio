import React from 'react';

function Card(props) {
    return (
        <div id="card"  className="col-6" key={props.projectsArray.name.toString()}>
            <div className="card bg-dark text-white">
                <div className="card-body">
                    <h2 className="card-title">{props.projectsArray.name}</h2>
                    <p className="card-text">{props.projectsArray.description}</p>
                    <a href={props.projectsArray.app} target='_blank' rel='noreferrer noopener'><img className="img-fluid" src={props.projectsArray.image} alt={props.projectsArray.name}/></a>
                    <a href={props.projectsArray.github} target='_blank' rel='noreferrer noopener'>{props.projectsArray.github}</a>
                </div>
            </div>
        </div>
    )
}

export default Card;