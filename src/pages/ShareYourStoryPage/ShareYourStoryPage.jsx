import "./ShareYourStoryPage.scss";
import { useDropzone } from "react-dropzone";
import { useCallback, useState } from 'react'

const ShareYourStoryPage = () => {
  const onDrop = useCallback(acceptedFiles => {
    // Do something with the files
  }, [])
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  return (
    <section className="upload">
      <h1 className="upload__heading">Submit a Story</h1>

      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {
          isDragActive ?
            <div className="upload__dropbox">Drop the files here ...</div> :
            <div className="upload__dropbox">Drag 'n' drop some files here, or click to select files</div>
        }
      </div>
    </section>
  )
}

export default ShareYourStoryPage;