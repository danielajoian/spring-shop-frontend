import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'

const ImageDropzone = () => {

    const onDrop = useCallback(acceptedFiles => {
        // Do something with files

        const file = acceptedFiles[0];
        console.log(file);
    }, []);

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
