import "./EditStoryPage.scss";
import { useDropzone } from "react-dropzone";
import uploadIcon from "/src/assets/images/icons/Upload.png";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const API_BASE_URL = import.meta.env.VITE_API_URL;

const EditStoryPage = ({ contentList }) => {
  const { storyId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const story = location.state?.story;

  const [uploadedFile, setUploadedFile] = useState(null);
  const [isOptionYes, setIsOptionYes] = useState(false);
  const [formValues, setFormValues] = useState({
    category: "",
    description: "",
    media: null,
    source: "",
    source_name: "Alexandra Lionga",
    title: "",
  });

  useEffect(() => {
    if (story) {
      setFormValues({
        category: story.category || "",
        description: story.description || "",
        media: story.media || null,
        source: story.source || "",
        source_name: story.source_name || "Alexandra Lionga",
        title: story.title || "",
      });
    }
  }, [story]);

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    if (file) {
      setUploadedFile({
        preview: URL.createObjectURL(file),
        file,
      });
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const fileRemovalHandler = () => {
    setUploadedFile(null);
  };

  const handleInputChange = (event) => {
    const { name, value, id } = event.target;
    if (id === "link") {
      setIsOptionYes(value === "Yes");
    }

    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    Object.keys(formValues).forEach((key) => {
      formData.append(key, formValues[key]);
    });

    if (uploadedFile) {
      formData.append("media", uploadedFile.file);
    }

    try {
      await axios.put(`${API_BASE_URL}/api/content/story/${storyId}/edit`, formData);
      toast.success("Story successfully updated. Redirecting to Story Details...", {
        position: "top-center",
        hideProgressBar: true, 
      });
      setTimeout(() => navigate(-1), 2000);
    } catch (error) {
      console.error(error);
      toast.error("Failed to update the story. Please try again.", {
        position: "top-right",
      });
    }
  };

  const uniqueCategories = [
    ...new Set(contentList.map((contentObj) => contentObj.category)),
  ];

  return (
    <>
      <Header />
      <section className="upload">
        <h1 className="upload__heading">Edit a Story</h1>
        <p className="upload__subheading"></p>
        <div className="upload--desktop">
          <div>
            {!uploadedFile ? (
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                {isDragActive ? (
                  <div className="upload__dropbox">
                    <p className="upload__dropbox-instructions">
                      Drop the files here ...
                    </p>
                  </div>
                ) : (
                  <div className="upload__dropbox">
                    <img
                      src={uploadIcon}
                      className="upload__icon"
                      alt="upload icon"
                    />
                    <p className="upload__dropbox-instructions">
                      Choose a new file or drag and drop it here. If no new file
                      is required, keep it blank.
                    </p>
                  </div>
                )}
              </div>
            ) : (
              <div className="upload-preview-container">
                <div
                  style={{
                    backgroundImage: `url(${uploadedFile.preview})`,
                  }}
                  className="upload-preview"
                ></div>
                <p className="upload__subheading">{uploadedFile.file.name}</p>
                <button
                  className="upload-preview__button"
                  onClick={fileRemovalHandler}
                >
                  Remove File
                </button>
              </div>
            )}
          </div>

          <form className="upload__form" onSubmit={handleSubmit}>
            <label htmlFor="title">Title</label>
            <input
              required
              type="text"
              placeholder="Add a title"
              className="upload__form-title"
              name="title"
              id="title"
              value={formValues.title}
              onChange={handleInputChange}
            />
            <label htmlFor="story">Story Description</label>
            <textarea
              rows="4"
              cols="20"
              placeholder="Add your story here..."
              className="upload__form-story"
              name="description"
              id="story"
              value={formValues.description}
              onChange={handleInputChange}
            ></textarea>
            <label htmlFor="categories">Category:</label>
            <select
              required
              name="category"
              id="categories"
              className="upload__form-category"
              value={formValues.category}
              onChange={handleInputChange}
            >
              <option hidden value="">
                Select a category
              </option>
              {uniqueCategories.map((category, Index) => (
                <option key={Index} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <label htmlFor="link">Link?</label>
            <select name="link" id="link" onChange={handleInputChange}>
              <option value="No">No</option>
              <option value="Yes">Yes</option>
            </select>
            {isOptionYes && (
              <>
                <label htmlFor="link--hidden" className="upload__form-link">
                  Link:
                </label>
                <input
                  type="url"
                  placeholder="Enter link here"
                  className="upload__form-link"
                  name="source"
                  id="link--hidden"
                  value={formValues.source}
                  onChange={handleInputChange}
                />
              </>
            )}
            <button
              type="submit"
              className="upload__button"
              onSubmit={handleSubmit}
            >
              Submit
            </button>
          </form>
        </div>
      </section>
      <ToastContainer transition={Slide}
        position="top-right"
        autoClose={2000}
        hideProgressBar={true} 
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover />
    </>
  );
};

export default EditStoryPage;
