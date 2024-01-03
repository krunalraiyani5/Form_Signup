import React, { useContext, useRef, useState } from 'react';
import PropTypes from 'prop-types';

import "./aadhaar-file-input.css";

import { ImageConfig } from '../config/ImageConfig'; 
import uploadImg from '../assets/images/upload_icon.png';
import { Timer_Context } from '../../../../Context/Timer_context';

const EducationDrop = props => {

    const wrapperRef = useRef(null);
    const [widthSet, setWidthSet] = useState("w-[664px] h-[216px]")

    const [fileList, setFileList] = useState([]);

    const onDragEnter = () => wrapperRef.current.classList.add('dragover');

    const onDragLeave = () => wrapperRef.current.classList.remove('dragover');

    const onDrop = () => wrapperRef.current.classList.remove('dragover');
  
    const {Set_Education} = useContext(Timer_Context)
 

    const onFileDrop = (e) => {
        const newFile = e.target.files[0];
        
        if (newFile) {
            const updatedList = [ newFile];
            Set_Education(newFile);
            setFileList(updatedList);
            props.onFileChange(updatedList);
        }
        setWidthSet("w-[664px] h-[140px]")
    }

    const fileRemove = (file) => {
        const updatedList = [...fileList];
        updatedList.splice(fileList.indexOf(file), 1);
        setFileList(updatedList);
        props.onFileChange(updatedList);
    }

    return (
        <>
            <div
                ref={wrapperRef}
                className={`drop-file-inputs ${widthSet}`}
                onDragEnter={onDragEnter}
                onDragLeave={onDragLeave}
                onDrop={onDrop}
            >
                <div className="drop-file-inputs__label ">
                    <img src={uploadImg} alt="Upload" className='ml-[22px] w-[50px]' />
                    <p>Drag & Drop your files here</p>
                </div>
                <input type="file" value="" onChange={onFileDrop}/>
            </div>
            {
                fileList.length > 0 ? (
                    <div className="drop-file-preview">
                        <p className="drop-file-preview__title text-[#9699ab] text-[14px]">
                            {/* Ready to upload */}
                        </p>
                        {
                            fileList.map((item, index) => (
                                <div key={index} className="drop-file-preview__item">
                                    <img src={ImageConfig[item.type.split('/')[1]] || ImageConfig['default']} alt="" />
                                    <div className="drop-file-preview__item__info">
                                        <p>{item.name}</p>
                                        <p>{item.size}B</p>
                                    </div>
                                    <span className="drop-file-preview__item__del" onClick={() => fileRemove(item)}>x</span>
                                </div>
                            ))
                        }
                    </div>
                ) : null
            }
        </>
    );
}

EducationDrop.propTypes = {
    onFileChange: PropTypes.func
}

export default EducationDrop;
