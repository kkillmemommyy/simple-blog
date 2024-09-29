import { useState, useMemo } from "react";
import { PostList } from "./components/PostList";
import { PostForm } from "./components/PostForm";
import { MyModal } from "./components/UI/MyModal/MyModal";
import { MyButton } from "./components/UI/button/MyButton";
import "./styles/App.css";
import { PostFilter } from "./components/PostFilter";
import { usePosts } from "./hooks/usePosts";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  const createPost = (post) => {
    setPosts([post, ...posts]);
    setModal(false);
  };
  const removePost = (id) => setPosts(posts.filter((p) => p.id !== id));

  return (
    <div className="app">
      <MyButton onClick={() => setModal(true)}>Создать пост</MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm createPost={createPost} />
      </MyModal>
      <hr style={{ margin: "15px 0" }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      <PostList
        removePost={removePost}
        posts={sortedAndSearchedPosts}
        title="Посты про JS"
      />
    </div>
  );
};

export default App;
