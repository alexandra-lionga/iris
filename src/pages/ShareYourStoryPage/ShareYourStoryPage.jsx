import "./ShareYourStoryPage.scss";
import { useDropzone } from "react-dropzone";
import uploadIcon from "/src/assets/images/icons/Upload.png";
import { useCallback, useState } from "react";
import axios from "axios";
const API_BASE_URL = import.meta.env.VITE_API_URL;

const ShareYourStoryPage = ({ contentList }) => {
  const [uploadedFile, setUploadedFile] = useState(null);
  const [isOptionYes, setIsOptionYes] = useState(false);
  const [storyObject, setStoryObject] = useState({
    category: "",
    description: "",
    media: "",
    source: "",
    source_name: "",
    title: "",
  });

  //Extracting unique list of categories
  const uniqueCategories = [
    ...new Set(contentList.map((contentObj) => contentObj.category)),
  ];

  //Reading the uploaded file properties/creating temporary URL for preview and upload
  const onDrop = useCallback((acceptedFiles) => {
    setUploadedFile({
      preview: URL.createObjectURL(acceptedFiles[0]),
      name: acceptedFiles[0].name,
      file: acceptedFiles[0],
    });
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const fileRemovalHandler = () => {
    setUploadedFile(null);
  };

  //Handling all input values at once and creating the object to be sent to the database
  //for story submission
  const handleUserInputs = (event) => {
    const { name, value, id } = event.target;
    if (id == "link") {
      value == "Yes" ? setIsOptionYes(true) : setIsOptionYes(false);
    }
    setStoryObject((prevStoryObject) => ({
      ...prevStoryObject,
      [name]: value,
      ["media"]: uploadedFile ? uploadedFile.file : "",
      ["source_name"]: "Alexandra Lionga", //hard-coded for demo
    }));
  };

  //Form Validation
  const isFormValid = () => {
    return (
      storyObject.title.trim() !== "" && storyObject.description.trim() !== ""
    );
  };

  //Handling form submission and clearing input values
  function handleSubmit(event) {
    event.preventDefault();

    if (!isFormValid()) {
      alert("All input fields need to be filled in order to submit the story.");
      return;
    }

    submitStory(storyObject);
    setStoryObject({
      category: "",
      description: "",
      media: "",
      source: "",
      source_name: "",
      title: "",
    });

    fileRemovalHandler();
  }

  const submitStory = async (data1) => {
    const formData = new FormData();

    Object.keys(data1).forEach((key) => { return formData.append(`${key}`, data1[key]); })
    for (let [key, value] of formData.entries()) {
      console.log(key, value); // Check the contents of FormData
    }

    try {
      const { data } = await axios.post(`${API_BASE_URL}/api/content/submit`,
        formData, {
          headers: {
            "Content-Type": "multipart/form-data", // Ensure the correct content type
          }
      },


      );
      for (let [key, value] of formData.entries()) {
        console.log(key, value); // Check the contents of FormData
      }
      console.log(data);
    } catch (error) { "ERROR: "+alert(error.response || error.message) }
  };

  if (storyObject) {
    console.log(storyObject);
  }

  return (
    <section className="upload">
      <h1 className="upload__heading">Submit a Story</h1>
      <p className="upload__subheading">
        Your experiences have the power to bring light, inspire change, and
        uplift those who hear them. Whether it’s a moment of kindness, a
        personal achievement, or a story that warmed your heart, we want to hear
        it. Share your positive story and help us build a community full of
        hope, joy, and inspiration.{" "}
      </p>

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
                Choose a file or drag and drop it here
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
          >
            {" "}
          </div>
          <p className="upload__subheading">{uploadedFile.name}</p>
          <button
            className="upload-preview__button"
            onClick={fileRemovalHandler}
          >
            Remove File
          </button>
        </div>
      )}

      <form className="upload__form" onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          required
          type="text"
          placeholder="Add a title"
          className="upload__form-title"
          name="title"
          id="title"
          value={storyObject.title}
          onChange={handleUserInputs}
        />
        <label htmlFor="story">Story Description</label>
        <textarea
          rows="4"
          cols="20"
          placeholder="Add your story here..."
          className="upload__form-story"
          name="description"
          id="story"
          value={storyObject.description}
          onChange={handleUserInputs}
        ></textarea>
        <label htmlFor="categories">Category:</label>
        <select
          required
          name="category"
          id="categories"
          className="upload__form-category"
          value={storyObject.category}
          onChange={handleUserInputs}
        >
          <option hidden value="">
            Select a category
          </option>
          {uniqueCategories.map((category, Index) => {
            return (
              <option key={Index} value={category}>
                {category}
              </option>
            );
          })}
        </select>
        <label htmlFor="link">Link?</label>
        <select name="link" id="link" onChange={handleUserInputs}>
          <option hidden value="">
            Select an option
          </option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
        <label
          htmlFor="link--hidden"
          className={
            isOptionYes == true
              ? "upload__form-link"
              : "upload__form-link--hidden"
          }
        >
          Link:
        </label>
        <input
          type="url"
          placeholder="Enter link here"
          className={
            isOptionYes == true
              ? "upload__form-link"
              : "upload__form-link--hidden"
          }
          name="source"
          id="link--hidden"
          value={storyObject.source}
          onChange={handleUserInputs}
        />
        <button
          type="submit"
          className="upload__button"
          onSubmit={handleSubmit}
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default ShareYourStoryPage;
