import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export class News extends Component {
     
      articles=[{"source": {
            "id": "ars-technica",
            "name": "Ars Technica"
            },
            "author": "Ron Amadeo",
            "title": "Pixel 6 review: Google Hardware finally lives up to its potential",
            "description": "Google finally built a great flagship smartphone.",
            "url": "https://arstechnica.com/gadgets/2021/11/pixel-6-review-google-hardware-finally-lives-up-to-its-potential/",
            "urlToImage": "https://cdn.arstechnica.net/wp-content/uploads/2021/11/GooglePixel_6-1_CROPPED-760x380.jpeg",
            "publishedAt": "2021-11-02T00:39:57Z",
            "content": "1 with 1 posters participating\r\nGoogle did it. The company finally made a phone that feels like a full-effort flagship device. It took six long, frustrating years, but with the Pixel 6 it finally fee… [+926 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Zacks.com"
            },
            "author": "Jim Giaquinto",
            "title": "New Highs to Kick Off a New Month",
            "description": "New Highs to Kick Off a New Month",
            "url": "https://www.zacks.com/registration/ultimatetrader/welcome/eoffer/30c3?adid=ZU_CONTENT_SYND&amp;cid=CS-ENTREPRENEUR-FT-zucommentary-31297",
            "urlToImage": "https://assets.entrepreneur.com/content/3x2/2000/20160408155709-default-hero-entrepreneur.png",
            "publishedAt": "2021-11-02T13:15:00Z",
            "content": "The month of November picked up on Monday right where the month of October left off with the three major indices putting in a new round of all-time highs! But lets not get ahead of ourselves. Were be… [+5567 chars]"
            
            },
            {
                  "source": {
                  "id": null,
                  "name": "Zacks.com"
                  },
                  "author": "Zacks Equity Research",
                  "title": "Should Invesco S&P 500 Revenue ETF (RWL) Be on Your Investing Radar?",
                  "description": "Style Box ETF report for RWL",
                  "url": "http://www.zacks.com/stock/news/1821393/should-invesco-s-p-500-revenue-etf-rwl-be-on-your-investing-radar?cid=CS-ENTREPRENEUR-FT-style_box_etf-1821393",
                  "urlToImage": "https://assets.entrepreneur.com/providers/zacks/hero-image-zacks-394788.jpeg",
                  "publishedAt": "2021-11-02T10:20:07Z",
                  "content": "Launched on 02/22/2008, the Invesco S&amp;P 500 Revenue ETF (RWL) is a passively managed exchange traded fund designed to provide a broad exposure to the Large Cap Value segment of the US equity mark… [+4303 chars]"
                  },
                  {
                  "source": {
                  "id": null,
                  "name": "StockNews.com"
                  },
                  "author": "Manisha Chatterjee",
                  "title": "Should You Buy the Dip in Twitter?",
                  "description": "Twitter’s (TWTR) shares have plunged in price over the past few months despite the company’s introduction of new features, such as its Super Follows. So, can the company overcome the...",
                  "url": "https://stocknews.com/news/twtr-tzoo-googl-yelp-should-you-buy-the-dip-in-twitter/",
                  "urlToImage": "https://assets.entrepreneur.com/providers/stocknews/hero-image-stocknews-394807.jpeg",
                  "publishedAt": "2021-11-02T12:36:16Z",
                  "content": "Twitters (TWTR) shares have plunged in price over the past few months despite the companys introduction of new features, such as its Super Follows. So, can the company overcome the impact of Apples (… [+4645 chars]"
                  }
            
      ]
      static defaultProps={
            country:"in",
            pageSize: 6,
            category:"general"
      }
      static propTypes = {
            country:PropTypes.string,
            pageSize:PropTypes.number ,
            category:PropTypes.string,

      }
      

      constructor(){
            super();
            console.log("hii i am a constructor from news component");
            this.state={
                  articles:this.articles,
                  loading:false,
                  page:1
            }
      }
      async updateNews(pageNo){
            let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ef483114eca34506b97cb7741568467f&page=${this.state.page}&pageSize=${this.props.pageSize}`;
            this.setState({loading:true})
            let data= await fetch(url);
            let parsedData= await data.json();
            console.log(parsedData);
            this.setState({articles:parsedData.articles,
                  totalResults:parsedData.totalResults,
            loading:false})

      }
     async componentDidMount(){
            console.log("cdm");
            // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ef483114eca34506b97cb7741568467f&page=1&pageSize=${this.props.pageSize}`;
            // this.setState({loading:true})
            // let data= await fetch(url);
            // let parsedData= await data.json();
            // console.log(parsedData);
            // this.setState({articles:parsedData.articles,
            //       totalResults:parsedData.totalResults,
            // loading:false})
            //you can use the above code instead of the function call done below
            this.updateNews();
      }
       handlePreviousClick= async()=>{
            console.log("previous");
            // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ef483114eca34506b97cb7741568467f&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
            // this.setState({loading:true})
            // let data= await fetch(url);
            // let parsedData= await data.json();
            // this.setState({loading:false})
            // console.log(parsedData);
            // this.setState({articles:parsedData.articles})


            // this.setState({
            //       page: this.state.page-1,
            // })
            //you can use the above code instead of the code below which is a function call
            this.setState({page:this.state.page-1});
            this.updateNews();
      }
       handleNextClick= async()=>{
            console.log("next");
      //       if (!( this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize))){
            


      //       let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ef483114eca34506b97cb7741568467f&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
      //       let data= await fetch(url);
      //       this.setState({loading:true})
      //       let parsedData= await data.json();
      //       this.setState({loading:false})
      //       console.log(parsedData);
      //       this.setState({articles:parsedData.articles})


      //       this.setState({
      //             page: this.state.page+1,
      //       })
      //    }
      //you can use the above code instead of the code below which is a function call,this is done ti make the code precise
      this.setState({page:this.state.page+1});
      this.updateNews();
  }
      
    render() {
          console.log("render")     
        return (
            <div>
                  
                <div className="container my-3 " >
            <h1 className="text-center" style={{margin:'30px'}}>NewsMonkey-Top Headlines</h1>
           {this.state.loading && <Spinner/>}
                
                <div className="row my-3">
                {!this.state.loading && this.state.articles.map((element)=>{
                   return <div className="col-md-4" key={element.url}>
                      <NewsItem  title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,80):""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
                </div>
                })}
                 </div>
                </div>
                <div className="container d-flex justify-content-between">
                <button disabled={this.state.page<=1}type="button" className  ="btn btn-dark"  onClick={this.handlePreviousClick}> &larr; Previous  </button>
                <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)}type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>

            </div>
        )
    }
}

export default News
