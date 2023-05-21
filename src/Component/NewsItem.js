import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let{title,description,imageUrl,newsUrl,author,date,source}=this.props;
        return (
            <div>
                   <div className="my-2">
                <div  className="card" style={{width: "18rem"}}>
  <img src={!imageUrl?"https://www.zacks.com/registration/ultimatetrader/welcome/eoffer/30c3?adid=ZU_CONTENT_SYND&amp;cid=CS-ENTREPRENEUR-FT-zucommentary-31297":imageUrl} alt=""/>
  <div  className="card-body">
    <h5  className="card-title">{title}...<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {source}
    
  </span></h5>
  {/* the above used component is called badges */}
    <p  className="card-text">{description}...</p>
    <p className="card-text"><small class="text-muted">By {!author?"Unknown": author} on {new Date(date).toGMTString()}</small></p>
    <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">Read More</a>
  </div>
</div>        </div>
</div>
        )
    }
}

export default NewsItem
