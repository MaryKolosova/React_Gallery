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
	const activePhoto = photos[indexActivePhoto];
	const prevPhoto = photos[indexActivePhoto - 1];
	const nextPhoto = photos[indexActivePhoto + 1];


	return (
		<div className={style.reactGallery}>
			<div className={style.reactGalleryContainer}>
			<MainPhoto
				prevPhoto={prevPhoto}
				currentPhoto={activePhoto}
				nextPhoto={nextPhoto}
				className {style.reactMainPhoto}
				/>
				<Navigation
					className {style.reactNavigation}
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
				className={style.reactPreviewList}
			/>
		</div>
	)
}