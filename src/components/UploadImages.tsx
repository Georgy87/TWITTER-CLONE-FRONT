import React from 'react'
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import { uploadImage } from '../utils/uploadImage';
import { useHomeStyles } from '../pages/theme';
import ClearIcon from '@material-ui/icons/Clear';
import IconButton from '@material-ui/core/IconButton';
import { ImageObj } from './AddTweetForm';

interface UploadImageProps {
    images: ImageObj[];
    onChangeImages: (callback: (prev:  ImageObj[]) =>  ImageObj[]) => void;
}

export const UploadImages: React.FC<UploadImageProps> = ({ images, onChangeImages }) => {

    const inputRef = React.useRef<HTMLInputElement>(null);
    const classes = useHomeStyles();

    const handleClickImage = () => {
        if (inputRef.current) {
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
            <div className={classes.imagesList}>
                {images.map(url => (
                    <div key={url.blobUrl} className={classes.imagesListItem} style={{ backgroundImage: `url(${url.blobUrl})` }}>
                        <IconButton className={classes.imagesListItemRemove} onClick={(): void => removeImage(url.blobUrl)} color="primary">
                            <ClearIcon style={{ fontSize: 15 }} />
                        </IconButton>
                    </div>
                ))}
            </div>
        </div>
    )
}
