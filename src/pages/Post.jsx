import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import './Post.scss';
import UserLink from '../components/UserLink';
import { postsUrl } from '../helpers/jsonPlaceholderHelper';

class PostBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: '',
      userId: 0
    };
  }

  componentDidMount() {
    axios.get(postsUrl(this.props.id))
      .then(response => {
        this.setState({
          title: response.data.title,
          content: response.data.body,
          userId: response.data.userId
        });
      })
      .catch(e => console.error(e));
  }

  render() {
    return (
      <div className="post">
        <h2>{this.state.title}</h2>
        <hr />
        <p>{this.state.content}</p>
        <UserLink id={this.state.userId} />
        {/* falta componente para el usuario y los comentarios */}
      </div>
    );
  }
}

function Post() {
  const { postId } = useParams();
  return (
    <>
      <PostBody id={postId} />
    </>
  );
}

export default Post;
