import axios from 'axios';
import { Button } from 'react-bootstrap';
import React, {useCallback, useState, useMemo, useEffect} from 'react';
import {useDropzone} from 'react-dropzone';
import './ImageDropzone.css';
import FromSuccess from './FromSuccess';

const ImageDropzone = (props) => {


    const [form, setForm] = useState(null);
    const [files, setFiles] = useState([]);
    const [imgIsUploaded, setImgIsUploaded] = useState(false);

    const onDrop = acceptedFiles => {

        const file = acceptedFiles[0];
        console.log(file);
        const formData = new FormData();
        formData.append("file", file);
        setForm(formData);
        console.log("ID din dropzone: " + props.productId);

        setFiles(acceptedFiles.map(file => Object.assign(file, {
            preview: URL.createObjectURL(file)
        })))
    };



    const handleSubmit = () => {
        axios.post(`http://localhost:8080/api/product/${props.productId}/image/upload`, form, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }).then(() => {
            console.log("file uploaded");
            // Redirect to "FormSuccess.js" after file is uploaded
            setImgIsUploaded(true);
        }).catch(err => {
            console.log(err);
            // Redirect to "Something went wrong" if it failed
        })
        
    }

    const { getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject } = useDropzone({onDrop: onDrop, accept: "image/*"})

    const baseStyle = {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
        borderWidth: 2,
        borderRadius: 2,
        borderColor: '#eeeeee',
        borderStyle: 'dashed',
        backgroundColor: '#fafafa',
        color: '#bdbdbd',
        outline: 'none',
        transition: 'border .24s ease-in-out'
      };
      
    const activeStyle = {
    borderColor: '#2196f3'
    };
      
    const acceptStyle = {
    borderColor: '#00e676'
    };
      
    const rejectStyle = {
    borderColor: '#ff1744'
    };

    const thumbsContainer = {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 16
      };
      
    const thumb = {
    display: 'inline-flex',
    borderRadius: 2,
    border: '1px solid #eaeaea',
    marginBottom: 8,
    marginRight: 8,
    width: 200,
    height: 200,
    padding: 4,
    boxSizing: 'border-box'
    };
    
    const thumbInner = {
    display: 'flex',
    minWidth: 0,
    overflow: 'hidden'
    };
    
    const img = {
    display: 'block',
    width: 'auto',
    height: '100%'
    };

    const thumbs = files.map(file => (
        <div style={thumb} key={file.name}>
        <div style={thumbInner}>
          <img
            src={file.preview}
            style={img}
            alt="file-preview"
          />
        </div>
      </div>
    ));

    useEffect(() => () => {
        // Make sure to revoke the data uris to avoid memory leaks
        files.forEach(file => URL.revokeObjectURL(file.preview));
      }, [files]);

    const style = useMemo(() => ({
        ...baseStyle,
        ...(isDragActive ? activeStyle : {}),
        ...(isDragAccept ? acceptStyle : {}),
        ...(isDragReject ? rejectStyle : {})
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }), [
        isDragActive,
        isDragReject,
        isDragAccept
      ]);

    const dropzone = (
        <div className="dropzone-container">
            <h1>Add your product image</h1>
            <h4>Only .jpg and .png images supported</h4>
            
            <div {...getRootProps({style})}>
                <input{...getInputProps()} />
            
            <p>Drag 'n' drop an image here, or click to select from your files</p>
            </div>
            <aside style={thumbsContainer}>
                {thumbs}
            </aside>
            <Button id="submit" onClick={handleSubmit}>Submit</Button>
        </div>
    ) 

    return (
        <React.Fragment>
        {
            !imgIsUploaded 
                ? dropzone
                : <FromSuccess/>
        }
        </React.Fragment>

    )
}

export default ImageDropzone
