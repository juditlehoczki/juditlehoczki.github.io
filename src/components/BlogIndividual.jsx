import React, { Component } from "react";
import axios from "axios";
import moment from "moment";
import { Link } from "@reach/router";

import S from "./StyledComponent";

class BlogIndividual extends Component {
  state = {
    blogPost: {},
    isLoading: true,
  };

  fetchBlogPost = (id) => {
    return axios
      .get(`https://dev.to/api/articles/${id}`)
      .then((response) => {
        this.setState({ blogPost: response.data, isLoading: false });
      })
      .catch(console.dir);
  };
  componentDidMount() {
    this.fetchBlogPost(this.props.id);
  }

  render() {
    const { isLoading } = this.state;
    const {
      title,
      published_at,
      tag_list,
      body_html,
      cover_image,
      url,
    } = this.state.blogPost;

    if (isLoading) {
      return (
        <S.BlogIndividual>
          <S.LoadingText>
            <p>Loading...</p>;
          </S.LoadingText>
        </S.BlogIndividual>
      );
    } else {
      return (
        <S.BlogIndividual>
          {cover_image && <img src={cover_image} alt="coverphoto" />}
          <h1>{title}</h1>
          <div>
            <span>Written by Judit Lehoczki on </span>
            <span>{moment(published_at).format("D MMMM YYYY")} on Dev.to.</span>
            <p>Tags: {tag_list}</p>
          </div>
          <div dangerouslySetInnerHTML={{ __html: body_html }} />
          <div>
            This blog was originally posted on Dev.to. If you want to leave a
            comment,{" "}
            <a href={url} target="_blank" rel="noopener noreferrer">
              click here
            </a>{" "}
            to visit the original blog.
          </div>
          <Link to="/blog">&lt; Back</Link>
        </S.BlogIndividual>
      );
    }
  }
}

export default BlogIndividual;
