import usePosts from "../hooks/usePost";
import { ErrorMessage } from "./ErrorMessage";
import { PostList } from "./PostList";

export const UserPosts = ({ id }) => {
  const { posts, loading, error, removePost } = usePosts(id);

  if (loading) return <p>loading posts...</p>;
  if (error) return <ErrorMessage message={error} />;

  return <PostList posts={posts} removePost={removePost} />;
};
