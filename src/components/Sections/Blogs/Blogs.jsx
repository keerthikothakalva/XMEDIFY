import BlogCard from "./BlogCard";
import "./Blogs.css";

function Blogs() {

  const blogs = [
    "6 Tips To Protect Your Mental Health When You're Sick",
    "Best Healthy Diet To Keep Your Heart Strong",
    "Why Regular Medical Checkups Are Important",
  ];

  return (
    <section className="blogs-section">

      <p className="blogs-small">Blog & News</p>

      <h2 className="blogs-heading">
        Read Our Latest News
      </h2>

      <div className="blogs-container">
        {blogs.map((blog, index) => (
          <BlogCard key={index} title={blog} />
        ))}
      </div>

    </section>
  );
}

export default Blogs;