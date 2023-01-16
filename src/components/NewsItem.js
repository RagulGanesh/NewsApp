import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, newsUrl, author, date, source}=this.props;
    return (
      <div className="my-3">
        <div className="card" style={{width: "18rem"}}>
            <img className="card-img-top" src={!imageUrl?"https://www.digitaltrends.com/wp-content/uploads/2023/01/Exoplanet_LHS_475_b_Illustration_pillars1.jpg?resize=1200%2C630&p=1":imageUrl} alt="..."/>
            <h6><span className="mx-2 my-2 rounded bg-danger badge badge-secondary" style={{zIndex:0}}>{source}</span></h6>
            <div className="card-body">
                <h5 className="card-title">{title} </h5>
                <p className="card-text">{description}</p>
                <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} published at {new Date(date).toLocaleDateString()}</small></p>
                <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-primary">Read More</a>
            </div>
            </div>
      </div>
    )
  }
}

export default NewsItem