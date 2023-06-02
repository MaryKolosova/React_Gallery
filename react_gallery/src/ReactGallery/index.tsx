/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from 'react';

import { MainPhoto } from './MainPhoto';

import { PreviewGallery } from './PreviewGallery';

import { Navigation } from './Navigation';

import { Photo } from './types';

import style from './index.module.scss';

interface ReactGalleryProps {
	photos: Photo[]
}

export const ReactGallery: React.FC<ReactGalleryProps> = ({
	photos,
}) => {
	if (!photos.length) {
		return null;
	}

	const [ indexActivePhoto, setIndexActivePhoto ] = useState(0);
	const prevPhoto = photos[indexActivePhoto - 1];
	const nextPhoto = photos[indexActivePhoto + 1];


	return (
		<div className={style.reactGallery}>
			<div className={style.reactGalleryContainer}>
			<MainPhoto
				photos={photos}
				indexActivePhoto={indexActivePhoto}
				/>
			<Navigation
				className={style.reactGalleryNavigation}
				disabledPrev={!prevPhoto}
				disabledNext={!nextPhoto}
				onPrevClick={() => {
					setIndexActivePhoto(indexActivePhoto - 1);
				}}
				onNextClick={() => {
					setIndexActivePhoto(indexActivePhoto + 1);
				}}
			/>
			</div>
			<PreviewGallery
				activePhotoIndex={indexActivePhoto}
				photos={photos}
				className={style.reactGalleryPreviewList}
				setNewPhoto={setIndexActivePhoto}
			/>
		</div>
	)
}