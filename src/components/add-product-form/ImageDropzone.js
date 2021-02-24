import axios from 'axios';
import { Button } from 'react-bootstrap';
import React, {useCallback, useState} from 'react'
import {useDropzone} from 'react-dropzone'

const ImageDropzone = (props) => {


    const [form, setForm] = useState(null);

    const onDrop = acceptedFiles => {

        const file = acceptedFiles[0];
        console.log(file);
        const formData = new FormData();
        formData.append("file", file);
        setForm(formData);
        console.log("ID din dropzone: " + props.productId);

    };

    const handleSubmit = () => {
        axios.post(`http://localhost:8080/api/product/${props.productId}/image/upload`, form, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }).then(() => {
            console.log("file uploaded");
            // Redirect to "FormSuccess.js" after file is uploaded
        }).catch(err => {
            console.log(err);
            // Redirect to "Something went wrong" if it failed
        })

        
    }

    const { getRootProps, getInputProps, isDragActive } = useDropzone({onDrop})

    return (
        <div>
            <h1>Add your product image</h1>
            <div {...getRootProps()}>
                <input{...getInputProps()} />

                {
                    isDragActive 
                        ? <span>Drop the image here...</span>
                        : <span>Drag and drop image here, or click to select image</span>
                }
            
            </div>
            <Button id="submit" onClick={handleSubmit}>Submit</Button>
        </div>
    )
}

export default ImageDropzone
