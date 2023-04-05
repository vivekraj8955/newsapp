import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
    articles=[]
    constructor()
    {
        
        super();
        this.state=
        {
           articles:this.articles,
           loading:false
        }
    }
   async componentDidMount()
    {
        let url="https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=bc9ebf342e734053a2a09ba08ab679e5"
        let data=await fetch(url);
        let pdata=await data.json();
        console.log(pdata);
        this.setState({articles:pdata.articles})
        console.log("vivek");
    }
  render() {
    return (
        
      <div className="container-fluid">
        <h2 className="d-flex justify-content-center my-2">News - Today News Headlines</h2>
        <div className=" row  my-3">

        {this.state.articles&&this.state.articles.map((element)=>{
           
           return <div className="col d-flex justify-content-center my-2" key={element.url}>
           <NewsItem  title={element.title?element.title.slice(0,45):""} description= {element.description?element.description.slice(0,80):""} imageUrl={element.urlToImage} newsUrl={element.url}></NewsItem>
         </div>

        })}
         
        </div>
      </div>
    );
  }
}
