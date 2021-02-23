import axios from 'axios';
import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'

const ImageDropzone = (props) => {


    const onDrop = acceptedFiles => {

        const file = acceptedFiles[0];
        console.log(file);
        const formData = new FormData();
        formData.append("file", file);

        console.log("ID din dropzone: " + props.productId);

        axios.post(`http://localhost:8080/api/product/${props.productId}/image/upload`, formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }).then(() => {
            console.log("file uploaded");
        }).catch(err => {
            console.log(err);
        })
        

    };

    const { getRootProps, getInputProps, isDragActive } = useDropzone({onDrop})

    return (
        <div {...getRootProps()}>
            <input{...getInputProps()} />

            {
                isDragActive 
                    ? <span>Drop the image here...</span>
                    : <span>Drag and drop image here, or click to select image</span>
            }
        </div>
    )
}

export default ImageDropzone
