import galleryStyles from '@styles/components/gallery.module.css'

export default function Gallery() {
    return (
        <div className={galleryStyles.galleryDiv}>
                <h1 className={`title ${galleryStyles.titleshadow}`}>Gallery</h1>
                <div className={galleryStyles.mainBody}>
                    <h2>Test</h2>
                </div>
        </div>
    );
}