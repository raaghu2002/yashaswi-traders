import React from 'react';
import ProjectGallery from '../components/gallery/ProjectGallery';
import SectionTitle from '../components/common/SectionTitle';
import ScrollToTop from '../components/common/ScrollToTop';

const GalleryPage = () => {
    return (
        <div className="gallery-page">
            {/* <div className="page-header">
                <div className="container">
                    <h1>Project Gallery</h1>
                    <p>Explore our completed projects and installations</p>
                </div>
            </div> */}

            <div className="container">
                <SectionTitle
                    title="Our Projects"
                    subtitle="Showcasing Our Quality Work and Satisfied Clients"
                />

                <ProjectGallery />
            </div>

            <ScrollToTop />
        </div>
    );
};

export default GalleryPage;