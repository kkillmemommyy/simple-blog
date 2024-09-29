import { TransitionGroup, CSSTransition } from "react-transition-group";
import { PostItem } from "./PostItem";

export const PostList = ({ posts, title, removePost }) => {
  if (!posts.length) {
    return <h1 style={{ textAlign: "center" }}>Постов не найдено</h1>;
  }

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{title}</h1>
      <TransitionGroup>
        {posts.map((p, index) => (
          <CSSTransition key={p.id} timeout={500} classNames="post">
            <PostItem
              id={p.id}
              index={index + 1}
              title={p.title}
              body={p.body}
              removePost={removePost}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};
