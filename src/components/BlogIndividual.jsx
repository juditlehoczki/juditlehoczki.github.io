import React, { Component } from "react";
import axios from "axios";

class BlogIndividual extends Component {
  state = {
    blogPost: {},
    isLoading: true
  };

  fetchBlogPost = id => {
    return axios
      .get(`https://dev.to/api/articles/${id}`)
      .then(response => {
        console.log(response.data);
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
      body_markdown,
      cover_image
    } = this.state.blogPost;

    if (isLoading) {
      return <p>Loading...</p>;
    } else {
      return (
        <main>
          <h2>{title}</h2>
          <img style={{ width: 500 }} src={cover_image} alt="coverphoto" />
          <p>{published_at}</p>
          <p>{tag_list}</p>
          <div dangerouslySetInnerHTML={{ __html: body_html }} />
        </main>
      );
    }
  }
}

export default BlogIndividual;
