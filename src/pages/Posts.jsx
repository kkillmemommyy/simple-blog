import { useState, useEffect, useCallback } from "react";
import { PostList } from "../components/PostList";
import { PostForm } from "../components/PostForm";
import { MyModal } from "../components/UI/MyModal/MyModal";
import { MyButton } from "../components/UI/button/MyButton";
import { PostFilter } from "../components/PostFilter";
import { usePosts } from "../hooks/usePosts";
import { PostServices } from "../API/PostService";
import { Loader } from "../components/UI/Loader/Loader";
import { useFetching } from "../hooks/useFetching";
import { getPagesCount } from "../utils/pages";
import { Pagination } from "../components/UI/pagination/Pagination";

export const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  const [fetchingPosts, isLoadingPosts, errorPosts] = useFetching(async () => {
    const response = await PostServices.getAll(limit, currentPage);
    setPosts(response.data);
    const totalCount = response.headers["x-total-count"];
    setTotalPages(getPagesCount(totalCount, limit));
  });

  useEffect(() => {
    fetchingPosts();
  }, [currentPage]);

  const createPost = (post) => {
    setPosts([post, ...posts]);
    setModal(false);
  };
  const removePost = (id) => setPosts(posts.filter((p) => p.id !== id));

  const togglePage = useCallback(
    (page) => {
      setCurrentPage(page);
    },
    [setCurrentPage]
  );

  return (
    <div className="app">
      <MyButton onClick={() => setModal(true)}>Создать пост</MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm createPost={createPost} />
      </MyModal>
      <hr style={{ margin: "15px 0" }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      {errorPosts && <h1>{errorPosts}</h1>}
      {isLoadingPosts ? (
        <div className="wrap">
          <Loader />
        </div>
      ) : (
        <PostList
          removePost={removePost}
          posts={sortedAndSearchedPosts}
          title="Посты про JS"
        />
      )}
      <Pagination
        currentPage={currentPage}
        togglePage={togglePage}
        totalPages={totalPages}
      />
    </div>
  );
};

