const PostList = ({ posts }) => {
  return posts.length ? (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <article>
            <h2>{post.text}</h2>
            <img src={post.image} alt="Post" />
          </article>
        </li>
      ))}
    </ul>
  ) : (
    <p>There are not posts yet...</p>
  );
};

export default PostList;
