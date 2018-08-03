import React from 'react'
import axios, { post } from 'axios';

import PropTypes from 'prop-types';
const propTypes = {
  fileUploadUrl: PropTypes.string,
  fileRequestKey: PropTypes.string,
  uploadOnSuccess: PropTypes.func,
};
class FileUploader extends React.Component {
  static propTypes = propTypes

  static defaultProps = {
    fileUploadUrl: 'http://example.com/file-upload',
    fileRequestKey: 'file',
    uploadOnSuccess: () => {},
  }

  state = {}

  constructor(props) {
    super(props);
    this.state ={
      file:null
    }
    this.onFormSubmit = this.onFormSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
    this.fileUpload = this.fileUpload.bind(this)
  }
  onFormSubmit(e){
    e.preventDefault() // Stop form submit
    const {fileUploadUrl, fileRequestKey, uploadOnSuccess} = this.props;
    this.fileUpload(this.state.file, fileUploadUrl, fileRequestKey).then((response)=>{
      console.log(response.data);
      uploadOnSuccess();
    }).catch((e) => {
      console.log("onFormSubmit.catch");
      console.dir(e);
    })
  }
  onChange(e) {
    this.setState({file:e.target.files[0]})
  }
  fileUpload(file, fileUploadUrl, fileRequestKey = 'file'){
    const formData = new FormData();
    formData.append(fileRequestKey, file)
    const config = {
        headers: {
            'content-type': 'multipart/form-data',
        }
    }
    return  post(fileUploadUrl, formData, config)
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <h1>File Upload</h1>
        <input type="file" onChange={this.onChange} />
        <button type="submit">Upload</button>
      </form>
   )
  }
}

export default FileUploader
