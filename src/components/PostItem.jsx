import { MyButton } from "./UI/button/MyButton";
import { useNavigate } from "react-router-dom";

export const PostItem = ({ id, title, body, removePost }) => {
  const navigate = useNavigate();

  return (
    <div className="post">
      <div className="post__content">
        <strong>{`${id}. ${title}`}</strong>
        <div>{body}</div>
      </div>
      <div className="post__btns">
        <MyButton onClick={() => navigate(`${id}`)}>Открыть</MyButton>
        <MyButton onClick={() => removePost(id)}>Удалить</MyButton>
      </div>
    </div>
  );
};
