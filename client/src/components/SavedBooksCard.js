import React from "react";

function SavedBooks(props) {
    return(
        <div className="row mt-3">
            <div className="col-lg-12">
                <div className="card">
                <div className="card-body">
                    <p className="lead">Results</p>
                        {props.savedBooks.length > 0 ? (
                            <div>
                            {props.savedBooks.map(book => (
                                <div key={book.id}>
                                <div className="card">
                                    <div className="card-body">
                                            <button type="button" className="btn btn-secondary float-right ml-2" 
                                            onClick={props.removeBook} 
                                            data-id={book._id}
                                            >Delete</button>
                                        <a href={book.link} target="_blank" rel="noopener noreferrer">
                                            <button type="button" className="btn btn-secondary float-right">View</button>
                                        </a>
                                        <p className="lead">{book.title}</p>
                                            <p>Written by {book.author}</p>
                                        <div className="row">
                                            <div className="col-lg-3 col-md-3 col-12" >
                                                <img src={book.image} className="img-fluid  p-1" alt="bookImage"></img>
                                            </div>
                                            <div className="col-lg-9 col-md-9 col-12" >
                                                <p>{book.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </div>
                                ))}
                            </div>
                        ) : (<h4>Saved books will appear here</h4>)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SavedBooks