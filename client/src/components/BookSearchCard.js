import React from "react";

function BookSearch(props) {
  return(
    <div className="row">
      <div className="col-12 mt-1">
        <div className="card">
          <div className="card-body">
            <p className="lead">Book Search</p>
            <form>
              <div className="form-group">
                <label>Book</label>
                <input type="text" className="form-control" id="bookToSearch" name="searchInput" onChange={props.handleInputChange} placeholder="Enter A Book to Search Here"/>
              </div>
              <button onClick={props.bookSearch} className="btn btn-secondary float-right">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookSearch;