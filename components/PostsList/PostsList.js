import PostsItem from "../PostsItem/PostsItem";
import styles from "./Posts.List.module.css";

const obj = {
  resources: 4,

  resources_0_image: {
    url: "https://static.ukrinform.com/photos/2023_09/thumb_files/300_200_1695980823-852.jpg",
    alt: "dots",
    title: "dots1",
  },

  resources_0_text:
    "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.1</p>",
  resources_0_title: "",

  resources_1_image: {
    url: "https://static.ukrinform.com/photos/2023_09/thumb_files/300_200_1695980823-852.jpg",
    alt: "dots",
    title: "dots2",
  },
  resources_1_text:
    "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.2</p>",
  resources_1_title: "",

  resources_2_image: {
    url: "https://static.ukrinform.com/photos/2023_09/thumb_files/300_200_1695980823-852.jpg",
    alt: "dots",
    title: "dots3",
  },
  resources_2_text:
    "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.3</p>",
  resources_2_title: "",

  resources_3_image: {
    url: "https://static.ukrinform.com/photos/2023_09/thumb_files/300_200_1695980823-852.jpg",
    alt: "dots",
    title: "dots4",
  },
  resources_3_text:
    "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.4</p>",
  resources_3_title: "",
};

const posts = [];

for (let i = 0; i < obj.resources; i++) {
  const image = obj[`resources_${i}_image`];
  const text = obj[`resources_${i}_text`].replace(/<[^>]+>/g, "");
  const title = obj[`resources_${i}_title`];

  const resourceObject = {
    image,
    text,
    title,
  };

  posts.push(resourceObject);
}

const PostsList = () => {
  return (
    <ul className={styles.list}>
      {posts.map((post) => (
        <PostsItem key={post.image.title} post={post} />
      ))}
    </ul>
  );
};

export default PostsList;
