import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


export class New extends Component {

    static defaultProps = {
        country: "in",
        pageSize: 9,
        category: "general",
    }
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
        api: PropTypes.string,
    }
  constructor(props){
    super(props);
    // console.log("Hello I am a constructor.");
    this.state={
      articles: [],
      loading:false,
      page: 1,
      totalResults: 0,
    }
  }

  async updateNews(){
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.api}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data=await fetch(url);
    let parsedData=await data.json();
    console.log(parsedData);
    this.setState({
        articles:parsedData.articles,
        totalResults: parsedData.totalResults,
        loading: false,
    })
  }

  async componentDidMount(){
    // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.api}&page=1&pageSize=${this.props.pageSize}`;
    // this.setState({loading:true});
    // let data=await fetch(url);
    // let parsedData=await data.json();
    // console.log(parsedData);
    // this.setState({
    //     articles:parsedData.articles,
    //     totalResults: parsedData.totalResults,
    //     loading: false,
    // })
    this.updateNews();
  }

  // handleNextClick = async ()=>{
  //   if(!((this.state.page+1)>Math.ceil(this.state.totalResults/this.props.pageSize))){
  //       // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.api}&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
  //       // this.setState({loading:true});
  //       // let data=await fetch(url);
  //       // let parsedData=await data.json();
  //       // console.log(parsedData);
  //       // this.setState({
  //       //     page: this.state.page+1,
  //       //     articles:parsedData.articles,
  //       //     loading: false,
  //       // })  
  //       this.setState({
  //         page: this.state.page+1,
  //       })
  //       this.updateNews();
  //   }
  // }

  // handlePrevClick = async ()=>{
  //   // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.api}&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
  //   // this.setState({loading:true});
  //   // let data=await fetch(url);
  //   // let parsedData=await data.json();
  //   // console.log(parsedData);
  //   // this.setState({
  //   //     page: this.state.page-1,
  //   //     articles:parsedData.articles,
  //   //     loading: false,
  //   // })
  //   this.setState({
  //     page: this.state.page-1,
  //   })
  //   this.updateNews();
  // }

  fetchMoreData= async() =>{
    this.setState({page:this.state.page+1});
    const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.api}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    // this.setState({loading:true});
    let data=await fetch(url);
    let parsedData=await data.json();
    console.log(parsedData);
    this.setState({
        articles:this.state.articles.concat(parsedData.articles),
        totalResults: parsedData.totalResults,
        loading: false,
    })
    // if((this.state.page+1)>Math.ceil(this.state.totalResults/this.props.pageSize)){
    //   this.setState({loading:false});
    // }
  }

  render() {
    return (
      <>
        <h1 className="text-center" style={{marginTop:"50px"}}>NewsMonkey - Top Headlines</h1>
        {this.state.loading && <Spinner/>}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner/>}
        >
        <div className="container">
        <div className="row">
        {this.state.articles.map((element)=>{
          // return !this.state.loading && <div className="col-md-4" key={element.url}>
          return <div className="col-md-4" key={element.url}>
          <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
        </div>
        })}      
        </div>          
        </div> 
        </InfiniteScroll> 
        {/* <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className="btn btn-primary" onClick={this.handlePrevClick}>  &#8592; Previous</button>
        <button disabled={(this.state.page+1)>Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" id="next" className="btn btn-primary" onClick={this.handleNextClick}>  Next &#8594;</button>
        </div> */}
           
      </>
    )
  }
}

export default New