import React from 'react';
import './Download.css'

const Download = () => {
    return (
        <div className='download-container'>
            <div className='download-section'>
                <div className='download-child'>
                    <div className='download-inner-child'>
                        <p className='section-highlight'>Download</p>
                        <h1 className='section-heading'>Download Trading App</h1>
                        <h3 className='section-paragraph'>We use cookines to understand how you use our website and to give you the best possible experience.</h3>

                    </div>
                    <div className='download-inner-child download-btns'>
                        <img src='/images/android-icon.png' alt='error' className='download-img' />
                        <img src='/images/ios-icon.png' alt='error' className='download-img' />
                        <img src='/images/microsoft-icon.jpg' alt='error' className='download-img' />
                        <img src='/images/qr-icon.jpg' alt='error' className='download-img' />
                    </div>
                </div>
                <div className='download-child download-child-2'></div>
            </div>
        </div>
    );
}

export default Download;
