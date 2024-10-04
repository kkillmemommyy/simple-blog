import { useState, useEffect, useCallback, useRef } from "react";
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

import { useObserver } from "../hooks/useObserver";
import { MySelect } from "../components/UI/select/MySelect";

export const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const lastElement = useRef();

  const [fetchingPosts, isPostLoading, errorPosts] = useFetching(
    async (limit, currentPage) => {
      const response = await PostServices.getAll(limit, currentPage);
      setPosts([...posts, ...response.data]);
      const totalCount = response.headers["x-total-count"];
      setTotalPages(getPagesCount(totalCount, limit));
    }
  );

  useObserver(lastElement, currentPage < totalPages, isPostLoading, () => {
    setCurrentPage(currentPage + 1);
  });

  useEffect(() => {
    fetchingPosts(limit, currentPage);
  }, [currentPage, limit]);

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
      <MySelect
        value={limit}
        onChange={(value) => setLimit(value)}
        defaultOption={"кол-во элементов на странице"}
        options={[
          {value: 5, name: '5'},
          {value: 10, name: '10'},
          {value: -1, name: 'Показать все'},
        ]}
      />
      {errorPosts && <h1>{errorPosts}</h1>}
      <PostList
        removePost={removePost}
        posts={sortedAndSearchedPosts}
        title="Посты про JS"
      />
      <div ref={lastElement} />
      {isPostLoading && (
        <div className="wrap">
          <Loader />
        </div>
      )}
      <Pagination
        currentPage={currentPage}
        togglePage={togglePage}
        totalPages={totalPages}
      />
    </div>
  );
};
