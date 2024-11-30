import { useState } from "react";
import { MDXProvider } from "@mdx-js/react";
import firstBlog from "../blogs/first-blog.mdx";
import secondBlog from "../blogs/second-blog.mdx";

const Blog = () => {
  const [showMore, setShowMore] = useState(false);
  const blogs = [firstBlog, secondBlog]; // Add more as you need

  return (
    <div className="blog-container">
      <h2 className="text-4xl">Blog Posts</h2>
      <div className="blog-posts">
        {blogs
          .slice(0, showMore ? blogs.length : 4)
          .map((BlogComponent, idx) => (
            <MDXProvider key={idx}>
              <BlogComponent />
            </MDXProvider>
          ))}
      </div>
      <button
        className="text-white bg-black px-4 py-2 mt-4"
        onClick={() => setShowMore(!showMore)}
      >
        {showMore ? "Show Less" : "Show More"}
      </button>
    </div>
  );
};

export default Blog;
