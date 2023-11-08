import styles from "./PostsItem.module.css";

const PostsItem = ({ post }) => {
  const { image, text } = post;

  return (
    <li className={styles.item}>
      <img src={image.url} alt={image.alt} width={300} height={200} />
      <h2>{image.title}</h2>
      <p>{text}</p>
    </li>
  );
};

export default PostsItem;
