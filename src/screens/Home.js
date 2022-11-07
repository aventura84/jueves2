import { AuthContext } from "../providers/AuthProvider";
import { useContext } from "react";
import usePosts from "../hooks/usePosts";
import Postlist from "../components/PostList";
import { ErrorMessage } from "../components";
import NewPost from "../components/NewPost";

function HomeScreen() {
  const { posts, loading, error, addPost, removePost } = usePosts();
  const { user } = useContext(AuthContext) ?? {};

  if (loading) return <p>loading posts</p>;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div>
      <h1>Latest Posts</h1>
      <Postlist posts={posts} />
      {/* <Stories />
      <Posts /> */}
      <button
        onClick={() => {
          login("test1@creatinium.com", "password");
        }}
      >
        Login
      </button>
      <span>{email ?? "No hay email"}</span>
      <span>{id ?? "No hay email"}</span>
      {/* {user ? <NewPost addPost={addPost} /> : null} */}
    </div>
  );
}

export default HomeScreen;
