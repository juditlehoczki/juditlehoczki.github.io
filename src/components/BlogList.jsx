import React, { Component } from "react";
import axios from "axios";
import moment from "moment";
import { Link } from "@reach/router";
import S from "./StyledComponent";

class Blog extends Component {
  state = {
    blogPosts: [],
    isLoading: true
  };

  fetchBlogPosts = () => {
    return axios
      .get("https://dev.to/api/articles?username=juditlehoczki")
      .then(response => {
        console.log(response.data[0]);
        this.setState({ blogPosts: response.data, isLoading: false });
      })
      .catch(console.dir);
  };
  componentDidMount() {
    this.fetchBlogPosts();
  }

  render() {
    const { blogPosts, isLoading } = this.state;

    if (isLoading) {
      return <p>Loading...</p>;
    } else {
      return (
        <S.BlogsListContainer>
          {blogPosts.map(blogPost => {
            return (
              <Link
                className="blogPreviewCard"
                to={`/blog/${blogPost.id}`}
                key={blogPost.id}
              >
                <h1>{blogPost.title}</h1>
                <div>
                  <span>
                    {moment(blogPost.published_at).format("D MMMM YYYY")}
                  </span>
                  <span>
                    ✎ comments: {blogPost.comments_count} ❤︎ likes:{" "}
                    {blogPost.positive_reactions_count}
                  </span>
                </div>
                <p>{blogPost.description}</p>
              </Link>
            );
          })}
        </S.BlogsListContainer>
      );
    }
  }
}

export default Blog;
