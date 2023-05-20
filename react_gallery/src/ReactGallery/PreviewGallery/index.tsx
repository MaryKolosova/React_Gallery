import cl from 'classnames';

import { Photo, CommonClassProps } from '../types';

import style from './index.module.scss';

interface PreviewGalleryProps extends CommonClassProps {
	activePhotoIndex: number;
	photos: Photo [];
}

export const PreviewGallery: React.FC<PreviewGalleryProps> = ({
	activePhotoIndex,
	photos,
	className,
}) => (
	<div>Preview Gallery</div>
);