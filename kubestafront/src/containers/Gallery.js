
import React from 'react'

import styled from 'styled-components'

//components
import { FileUploader } from '../components'

import PropTypes from 'prop-types';
const propTypes = {};
class Gallery extends React.Component {

    static propTypes = propTypes

    static defaultProps = {}

    state = {
        images: [],
    }

    constructor(props) {
        super(props)

        this.loadImages()
    }

    loadImages = () => {
        setTimeout(() => {
            this.setState({
                images: [
                    {src: "http://via.placeholder.com/320x100", alt: "img alt text",},
                    {src: "http://via.placeholder.com/320x120",},
                    {src: "http://via.placeholder.com/320x300",},
                    {src: "http://via.placeholder.com/320x100", alt: "img alt text",},
                    {src: "http://via.placeholder.com/320x120",},
                    {src: "http://via.placeholder.com/320x300",},
                ],
            })
        }, 3000)
    }

    reloadImages = () => {
        this.setState({images: [],})
        setTimeout(() => {
            this.setState({
                images: [
                    {src: "http://via.placeholder.com/320x100", alt: "img alt text",},
                    {src: "http://via.placeholder.com/320x120",},
                    {src: "http://via.placeholder.com/320x300",},
                    {src: "http://via.placeholder.com/320x100", alt: "img alt text",},
                    {src: "http://via.placeholder.com/320x120",},
                    {src: "http://via.placeholder.com/320x300",},
                ],
            })
        }, 3000)
    }

    render() {
        const {images} = this.state
        return (
            <React.Fragment>
                <div>
                    <FileUploader />
                    <button onClick={this.reloadImages}>reload</button>
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
    {/* <button onClick={()=>{}}>+ add img</button> */}
    <Gallery />
  </React.Fragment>
)
