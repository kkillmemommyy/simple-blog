import cls from "./MyModal.module.css";

export const MyModal = ({ children, visible, setVisible }) => {
  const rootClass = [cls.myModal];

  if (visible) {
    rootClass.push(cls.active);
  }

  return (
    <div
      className={rootClass.join(" ")}
      onClick={(e) => e.target === e.currentTarget && setVisible(false)}
    >
      <div className={cls.myModalContent}>{children}</div>
    </div>
  );
};
