import React, { Component } from "react";
export default class NewsItem extends Component {
  render() {
    let { title, description, imageUrl,newsUrl } = this.props;
    return (
      <div>
        <div className="card " style={{ width: "18rem"  }}>
          <img src={imageUrl} className="card-img-top NewsItem" alt="..." />
          <div className="card-body ">
            <h5 className="card-title  d-flex justify-content-center">
              {title}..
            </h5>
            <p className="card-text d-flex justify-content-center ">
              {description}...
            </p>
            <a
              href={newsUrl} target="_blank"
              className="btn  btn-primary d-flex justify-content-center"
            >
              {"Read More"}
            </a>
          </div>
        </div>
      </div>
    );
  }
}
