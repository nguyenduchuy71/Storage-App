import React, { useRef, useState } from 'react'
import PropTypes from 'prop-types'
import uploadImg from '../assets/upload-cloud.jpg'

const DropFileInput = props => {
  const wrapperRef = useRef(null)

  const [fileList, setFileList] = useState([])

  const onDragEnter = () => wrapperRef.current.classList.add('dragover')

  const onDragLeave = () => wrapperRef.current.classList.remove('dragover')

  const onDrop = () => wrapperRef.current.classList.remove('dragover')

  const onFileDrop = e => {
    const newFile = e.target.files
    if (newFile) {
      const list_file = [...newFile]
      const updatedList = [...fileList, ...list_file]
      setFileList(updatedList)
      props.onFileChange(updatedList)
    }
  }

  return (
    <div
      ref={wrapperRef}
      className='drop-file-input'
      onDragEnter={onDragEnter}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
    >
      <div className='drop-file-input__label'>
        <img src={uploadImg} alt='img-upload' />
        <p>Drag & Drop your files here</p>
      </div>
      <input type='file' value='' multiple onChange={onFileDrop} />
    </div>
  )
}

DropFileInput.propTypes = {
  onFileChange: PropTypes.func
}

export default DropFileInput
