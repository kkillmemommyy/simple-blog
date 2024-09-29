import { MyButton } from "./UI/button/MyButton";

export const PostItem = ({ id, index, title, body, removePost }) => {
  return (
    <div className="post">
      <div className="post__content">
        <strong>{`${index}. ${title}`}</strong>
        <div>{body}</div>
      </div>
      <div className="post__btns">
        <MyButton onClick={() => removePost(id)}>Удалить</MyButton>
      </div>
    </div>
  );
};
