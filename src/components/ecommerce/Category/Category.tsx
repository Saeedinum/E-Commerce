import styles from "./styles.module.css";
const { category, categoryImg, categoryTitle } = styles;

const Category = () => {
  return (
    <div className={category}>
      <div className={categoryImg}>
        <img
          src="https://th.bing.com/th/id/OIP.WpZIqtcfKpTMyzaa8eZaowHaFO?rs=1&pid=ImgDetMain"
          alt=""
        />
      </div>
      <h4 className={categoryTitle}>Title</h4>
    </div>
  );
};

export default Category;