import React from "react";

class UserCards extends React.Component {
  render() {
    return (
      <div className="card d-flex flex-row justify-content-center align-items-center">
        <img src={this.props.imageUrl} className="card-img-top" alt=""/>
        <div className="card-body">
          <h5 className="card-title">{this.props.title}</h5>
          <p className="card-text">Email: {this.props.email}</p>
          <p className="card-text">Phone: {this.props.phone}</p>
        </div>
      </div>
    );
  }
}

export default UserCards;