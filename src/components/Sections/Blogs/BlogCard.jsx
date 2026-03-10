import blogImg from "../../../assets/blog.jpg";
import personImg from "../../../assets/person.jpg";
import "./BlogCard.css";

function BlogCard({ title }) {
  return (
    <div className="blog-card">

      <img src={blogImg} alt="blog" className="blog-image" />

      <div className="blog-content">

        <p className="blog-meta">Medical | March 31, 2022</p>

        <h3 className="blog-title">{title}</h3>

        <div className="blog-author">
          <img src={personImg} alt="author" />
          <span>Rebecca Lee</span>
        </div>

      </div>

    </div>
  );
}

export default BlogCard;