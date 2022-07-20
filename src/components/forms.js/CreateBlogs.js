import { useState } from "react";
import axios from 'axios'

const CreateBlogs = (props) => {
  const [formData, setFormData] = useState({
    blog_title: "",
    blog_content: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:4000/blogs', formData, {
        headers: {
          'x-auth-token': localStorage.getItem("userToken")
        }
      }).then(res => props.setTodos([...props.todos, res.data]))
  }

  return (
    <form onSubmit={handleSubmit}>
      <label className="form-label" htmlFor="title">
        Title
      </label>
      <input
        className="form-control"
        type="text"
        id="blog_title"
        name="blog_title"
        value={formData.title}
        onChange={(e) =>
          setFormData({ ...formData, [e.target.id]: e.target.value })
        }
      />

      <div className="mb-3">
        <label className="form-label" htmlFor="details">
          Details
        </label>
        <input
          className="form-control"
          type="text"
          id="blog_content"
          name="blog_content"
          value={formData.details}
          onChange={(e) =>
            setFormData({ ...formData, [e.target.id]: e.target.value })
          }
        />
      </div>

      <input type="submit" className="btn btn-success" />
    </form>
  );
};

export default CreateBlogs;