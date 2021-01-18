import React from 'react'
import { useHomeStyles } from '../pages/theme';
import { ImageObj } from './AddTweetForm';
import { ImageList } from './ImageList';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import { IconButton } from '@material-ui/core';
interface UploadImageProps {
    images: ImageObj[];
    onChangeImages: (callback: (prev: ImageObj[]) => ImageObj[]) => void;
}

export const UploadImages: React.FC<UploadImageProps> = ({ images, onChangeImages }) => {
    const classes = useHomeStyles();
    const inputRef = React.useRef<HTMLInputElement>(null);
    const handleClickImage = () => {
        if (inputRef.current) {
            console.log(inputRef.current)
            inputRef.current.click();
        }
    }

    const handleChangeFileInput = React.useCallback((e: Event) => {
        if (e.target) {
            const target = (e.target as HTMLInputElement);
            const file = target.files?.[0];
            if (file) {
                const fileObj = new Blob([file]);
                onChangeImages(prev => [...prev, {
                    blobUrl: URL.createObjectURL(fileObj),
                    file
                }]);
            }
        }
    }, []);

    const removeImage = (url: string) => {
        onChangeImages(prev => prev.filter((obj) => obj.blobUrl != url));
    }

    React.useEffect(() => {
        if (inputRef.current) {
            inputRef.current.addEventListener('change', handleChangeFileInput);
        }

        return () => {
            if (inputRef.current) {
                inputRef.current.removeEventListener('change', handleChangeFileInput);
            }
        }
    }, []);

    return (
        <div>
            <IconButton onClick={handleClickImage} color="primary">
                <ImageOutlinedIcon style={{ fontSize: 26 }} />
            </IconButton>
            <input ref={inputRef} type="file" hidden id="upload-input" />
            <ImageList removeImage={removeImage}  images={images.map((obj) => obj.blobUrl)} classes={classes} />
        </div>
    )
}
