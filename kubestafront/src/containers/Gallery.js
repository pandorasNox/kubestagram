
import React from 'react'

import styled from 'styled-components'

//components
import { FileUploader } from '../components'

//util
import axios from 'axios'

import PropTypes from 'prop-types';
const propTypes = {};
class Gallery extends React.Component {

    static propTypes = propTypes

    static defaultProps = {}

    state = {
        images: [
            {src: "http://via.placeholder.com/320x100", alt: "img alt text",},
            {src: "http://via.placeholder.com/320x120",},
            {src: "http://via.placeholder.com/320x300",},
            {src: "http://via.placeholder.com/320x100", alt: "img alt text",},
            {src: "http://via.placeholder.com/320x120",},
            {src: "http://via.placeholder.com/320x300",},
        ],
        downloadUrl: process.env.IMAGE_SERVICE_URL || "",
    }

    constructor(props) {
        super(props)

        this.loadImages()
    }

    loadImages = async () => {
        const result = await axios.get(this.state.downloadUrl)
        const { data:{data:{uploads}}, } = result;

        this.setState({
            images: uploads.map((img => ({src: this.state.downloadUrl + "/static/" + img}))),
        })
    }

    render() {
        const {images, downloadUrl} = this.state

        return (
            <React.Fragment>
                <div>
                    <FileUploader
                        fileUploadUrl={downloadUrl}
                        fileRequestKey="imgdata"
                        uploadOnSuccess={this.loadImages}
                    />
                    <button onClick={this.loadImages}>reload</button>
                </div>
                <StyledGalleryCon>
                    {images.map( (img, index) => {
                        const {src = "", alt = ""} = img
                        return (
                            <img src={src} key={index+src} width="320px" alt={alt} />
                        )
                    })}
                </StyledGalleryCon>
            </ React.Fragment>
        )
    }
}

const StyledGalleryCon = styled.div`
  display: grid;
  height: 100%;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 5px;
  row-gap: 5px;

  justify-items: center;
  align-items: center;
`

export default () => (
  <React.Fragment>    
    <h1>Gallery</h1>
    <Gallery />
  </React.Fragment>
)
