import React, { useState } from "react";
import { createPost } from "../authapi/ApiService";
import { useNavigate } from "react-router-dom";

interface CreatePostProps {
  onPostCreated: () => void;
}

const CreatePost: React.FC<CreatePostProps> = ({ onPostCreated }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    author: "",
    category: "",
    photo: null as File | null,
    publishDate: "",
    authorphoto: null as File | null,
    readingTime: "",
    content: "",
    tags: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const navigate = useNavigate();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files && files.length > 0) {
      setFormData({ ...formData, [name]: files[0] });
    }
  };

  const validate = () => {
    const requiredFields = [
      "title",
      "description",
      "author",
      "category",
      "photo",
      "publishDate",
    ];
    const newErrors: { [key: string]: string } = {};
    requiredFields.forEach((field) => {
      if (!formData[field as keyof typeof formData]) {
        newErrors[field] = `${field} is required`;
      }
    });
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      const data = new FormData();
      data.append("title", formData.title);
      data.append("description", formData.description);
      data.append("author", formData.author);
      data.append("category", formData.category);
      data.append("publishDate", formData.publishDate);
      if (formData.photo) data.append("Photo", formData.photo);
      if (formData.authorphoto) data.append("authorphoto", formData.authorphoto);
      if (formData.readingTime) data.append("readingTime", formData.readingTime);
      if (formData.content) data.append("content", formData.content);
      data.append("tags", formData.tags);

      try {
        const result = await createPost(data);
        console.log("Post created successfully:", result);
        onPostCreated();
        navigate("/dashboard");
      } catch (error) {
        console.error("Post creation failed:", error);
        alert("Post creation failed. Please try again.");
      }
    }
  };

  return (
    <form
      className="row g-3 p-3 mx-auto"
      onSubmit={handleSubmit}
      style={{
        maxWidth: "100%",
        width: "100%",
        maxInlineSize: "750px",
        border: "1.5px solid gray",
        borderRadius: "15px",
      }}
    >
      <div className="col-md-6">
        <label className="form-label">
          Title <span className="text-danger">*</span>
        </label>
        <input
          type="text"
          name="title"
          className={`form-control ${errors.title ? "is-invalid" : ""}`}
          value={formData.title}
          onChange={handleChange}
        />
        {errors.title && <div className="invalid-feedback">{errors.title}</div>}
      </div>

      <div className="col-md-6">
        <label className="form-label">
          Author <span className="text-danger">*</span>
        </label>
        <input
          type="text"
          name="author"
          className={`form-control ${errors.author ? "is-invalid" : ""}`}
          value={formData.author}
          onChange={handleChange}
        />
        {errors.author && <div className="invalid-feedback">{errors.author}</div>}
      </div>

      <div className="col-12">
        <label className="form-label">
          Description <span className="text-danger">*</span>
        </label>
        <input
          type="text"
          name="description"
          className={`form-control ${errors.description ? "is-invalid" : ""}`}
          value={formData.description}
          onChange={handleChange}
        />
        {errors.description && (
          <div className="invalid-feedback">{errors.description}</div>
        )}
      </div>

      <div className="col-md-6">
        <label className="form-label">
          Category <span className="text-danger">*</span>
        </label>
        <input
          type="text"
          name="category"
          className={`form-control ${errors.category ? "is-invalid" : ""}`}
          value={formData.category}
          onChange={handleChange}
        />
        {errors.category && (
          <div className="invalid-feedback">{errors.category}</div>
        )}
      </div>

      <div className="col-md-6">
        <label className="form-label">
          Photo <span className="text-danger">*</span>
        </label>
        <input
          type="file"
          name="photo"
          className={`form-control ${errors.photo ? "is-invalid" : ""}`}
          onChange={handleFileChange}
          accept="image/*"
        />
        {errors.photo && <div className="invalid-feedback">{errors.photo}</div>}
      </div>

      <div className="col-md-6">
        <label className="form-label">
          Publish Date <span className="text-danger">*</span>
        </label>
        <input
          type="date"
          name="publishDate"
          className={`form-control ${errors.publishDate ? "is-invalid" : ""}`}
          value={formData.publishDate}
          onChange={handleChange}
        />
        {errors.publishDate && (
          <div className="invalid-feedback">{errors.publishDate}</div>
        )}
      </div>

      <div className="col-md-6">
        <label className="form-label">Author Photo</label>
        <input
          type="file"
          name="authorphoto"
          className="form-control"
          onChange={handleFileChange}
          accept="image/*"
        />
      </div>

      <div className="col-md-6">
        <label className="form-label">Reading Time</label>
        <input
          type="text"
          name="readingTime"
          className="form-control"
          value={formData.readingTime}
          onChange={handleChange}
        />
      </div>

      <div className="col-12">
        <label className="form-label">Content</label>
        <textarea
          name="content"
          className="form-control"
          rows={3}
          value={formData.content}
          onChange={handleChange}
        />
      </div>

      <div className="col-12">
        <label className="form-label">Tags (comma separated)</label>
        <input
          type="text"
          name="tags"
          className="form-control"
          placeholder="e.g. tech, coding, react"
          value={formData.tags}
          onChange={handleChange}
        />
      </div>

      <div className="col-12 text-center">
        <button type="submit" className="btn btn-primary mt-3 px-4">
          Submit
        </button>
      </div>
    </form>
  );
};

export default CreatePost;
