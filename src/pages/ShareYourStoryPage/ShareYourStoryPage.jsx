import "./ShareYourStoryPage.scss";
import { useDropzone } from "react-dropzone";
import uploadIcon from "/src/assets/images/icons/Upload.png";
import { useCallback, useState } from 'react'

const ShareYourStoryPage = ({ contentList }) => {
  //Extracting unique list of categories
  const uniqueCategories = [...new Set(contentList.map((contentObj) => contentObj.category))];

  const onDrop = useCallback(acceptedFiles => {
    // Do something with the files
  }, [])
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })
  function formHandler(e) {
    e.preventDefault();
  }
  return (
    <section className="upload">
      <h1 className="upload__heading">Submit a Story</h1>
      <p className="upload__subheading">Your experiences have the power to bring light, inspire change, and uplift those who hear them. Whether it’s a moment of kindness, a personal achievement, or a story that warmed your heart, we want to hear it. Share your positive story and help us build a community full of hope, joy, and inspiration. </p>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {
          isDragActive ?
            <div className="upload__dropbox"><p className="upload__dropbox-instructions">Drop the files here ...</p></div> :
            <div className="upload__dropbox">
              <img src={uploadIcon} className="upload__icon" alt="upload icon" />
              <p className="upload__dropbox-instructions">Choose a file or drag and drop it here</p>
            </div>
        }
      </div>
      <form className="upload__form">
        <label for='title'>Title</label>
        <input required type="text" placeholder="Add a title" className="upload__form-title" name="title"/>
        <label for='story'>Story Description</label>
        <textarea rows="4" cols="20" placeholder="Add your story here..." className="upload__form-story" name="story"></textarea>
        <label for='categories'>Category:</label>
        <select name="categories" className="upload__form-category" >
          <option value=''></option>
          {uniqueCategories.map((category) => { return <option value={category}>{category}</option> })}
        </select>
        <label for='link'>Link?</label>
        <select name="link" className="upload__form-link" >
          <option value=''></option>
          <option value='yes'>Yes</option>
          <option value='no'>No</option>
        </select>
        <label for='link'>Link:</label>
        <input required type="text" placeholder="Enter link here" className="upload__form-link--hidden" name="link"/>
        <button type="submit" className="upload__button" onClick={formHandler}>Submit</button>

      </form>
    </section>
  )
}

export default ShareYourStoryPage;