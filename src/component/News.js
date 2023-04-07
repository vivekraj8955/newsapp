import React, { Component } from "react";
import NewsItem from "./NewsItem";
export default class News extends Component {
  articles = [];
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
    };
  }
  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=bc9ebf342e734053a2a09ba08ab679e5&pageSize=18";
    let data = await fetch(url);
    let pdata = await data.json();
    this.setState({ articles: pdata.articles });
  }
  handleNextClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=bc9ebf342e734053a2a09ba08ab679e5&pageSize=18&page=${
      this.state.page + 1
    }`;
    let data = await fetch(url);
    let pdata = await data.json();
    this.setState({
      page: this.state.page + 1,
      articles: pdata.articles,
    });
  };
  handlePrevClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=bc9ebf342e734053a2a09ba08ab679e5&pageSize=18&page=${
      this.state.page - 1
    }`;
    let data = await fetch(url);
    let pdata = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: pdata.articles,
    });
  };
  Science = async () => {
    console.log("science");
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=bc9ebf342e734053a2a09ba08ab679e5&pageSize=18`;
    let data = await fetch(url);
    let pdata = await data.json();
    this.setState({
      articles: pdata.articles,
    });
  };
  Sports = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=bc9ebf342e734053a2a09ba08ab679e5&pageSize=18`;
    let data = await fetch(url);
    let pdata = await data.json();
    this.setState({
      articles: pdata.articles,
    });
  };
  Entertainment = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=bc9ebf342e734053a2a09ba08ab679e5&pageSize=18}`;
    let data = await fetch(url);
    let pdata = await data.json();
    this.setState({
      articles: pdata.articles,
    });
  };
  render() {
    return (
      <div className="container ">
        <nav className="navbar navbar-expand-lg bg-dark text-light ">
          <div className="container d-flex justify-content-between ">
            <button onClick={this.Sports} className="nav-link active" href="/">
              Sports
            </button>
            <button
              onClick={this.Science}
              className="nav-link active "
              aria-current="page"
              href="/"
            >
              Science
            </button>
            <button
              onClick={this.Entertainment}
              className="nav-link active"
              aria-current="page"
              href="/"
            >
              Entertainment
            </button>
          </div>
        </nav>
        <h2 className="d-flex justify-content-center my-2">
          News - Today News Headlines
        </h2>
        <div className=" row  my-3">
          {this.state.articles &&
            this.state.articles.map((element) => {
              return (
                <div
                  className="col d-flex justify-content-center my-2"
                  key={element.url}
                >
                  <NewsItem
                    title={element.title ? element.title.slice(0, 45) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 80)
                        : ""
                    }
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                  ></NewsItem>
                </div>
              );
            })}
        </div>
        <div className="container d-flex justify-content-between my-4">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-danger "
            onClick={this.handlePrevClick}
          >
            Prev
          </button>
          <button
            disabled={this.state.page >= 3}
            type="button"
            className="btn btn-danger"
            onClick={this.handleNextClick}
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}
