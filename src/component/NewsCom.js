import React, { Component } from 'react'
import Newsto from './Newsto'
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';
// import PropTypes from 'prop-types'

// import axios from 'axios';
export default class NewsCom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      article: [],
      loading: false,
      page: 1,
      totalResult: 0
    }
    document.title=`${this.capitalizedfun(this.props.category)}`
  }
  capitalizedfun=(string) =>{
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  async updateNews() {
    this.props.setProgress(10);
    let Url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pagesize=6`;
    this.setState({ loading: true })
    this.props.setProgress(30);
    let data = await fetch(Url)
    let parasedData = await data.json()
    this.props.setProgress(70);
    this.setState({
      article: parasedData.articles,
      totalResult: parasedData.totalResults,
      loading: false
    })
    console.log(this.state.article[1],'sss')
      this.props.setProgress(100);
  }
  async componentDidMount() {
    this.updateNews()
  }
  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 })
    let Url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pagesize=6`;
    this.setState({loading:true})
    let data = await fetch(Url)
    let parasedData = await data.json()
    this.setState({
      article: this.state.article.concat(parasedData.articles),
      totalResults: parasedData.totalResults,
      loading: false,
    })
  }
  // handleprev = () => {
  //   this.setState({ page: this.state.page - 1 })
  //   this.updateNews()
  // }
  // handlenext = () => {
    //   this.setState({ page: this.state.page + 1 })
    //   this.updateNews()
    // }
    render() {
      let { color, colorrtx,button} = this.props
      // console.log(button)
      return (
      <div className='container my-2' style={{overflowX:'hidden'}}>
        <h1 className="text-center" style={{ color: colorrtx }}>Top Headline- On {this.capitalizedfun(this.props.category)} Section </h1>
       {/* <Spinner /> */}
        {this.state.loading && <Spinner />}

        <InfiniteScroll
          dataLength={this.state.article.length}
          next={this.fetchMoreData}
          hasMore={this.state.article.length !== this.state.totalResult}
          loader={this.state.loading?< Spinner/>:""}
        >
        <div >
            <div className="row " style={{overflowY:'hidden'}} >
              {this.state.article.map((element,index) => {
                return <div className="col md-4" key={index}>
                  <Newsto button={button} color={color} colorrtx={colorrtx} title={element.title ? element.title.slice(0, 25) : ""} description={element.description ? element.description.slice(0, 68) : ""} Url={element.url} imageUrl={element.urlToImage} author={element.author} date={element.publishedAt} />
                </div>
              })}
            </div>
          </div>
        </InfiniteScroll>
        {/* <div className="container d-flex justify-content-between">
          <button type="button" disabled={this.state.page <= 1} className="btn bt-sm btn-dark" onClick={this.handleprev}>&larr; Preview </button><h4>{this.state.page}</h4>
          <button type="button" className="btn btn-dark" disabled={this.state.page + 1 > Math.ceil(this.state.totalResult / 9)} onClick={this.handlenext}>&nbsp;&nbsp;Next &rarr;&nbsp;&nbsp;&nbsp;  </button> </div> */}
      </div>
    )
  }
}