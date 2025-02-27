import React, { useState } from 'react';
import './Download.css'
 

const Download = () => {

    const [showPopup, setShowPopup] = useState(false);

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };
    
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
                        <a href='https://panel.therisefx.com/platform/TheRiseFX-1.0.apk'>
                        <img src='/images/android-icon.png' alt='error' className='download-img' />
                        </a>
                        <a href='https://apps.apple.com/us/app/mobiustrader-7/id1355359598'>
                        <img src='/images/ios-icon.png' alt='error' className='download-img' />
                        </a>
                        <a href=''>
                        <img src='/images/microsoft-icon.jpg' alt='error' className='download-img microsoft' />
                        </a>
                        <img src='/images/qr-icon.jpg' alt='error' className='download-img' onClick={togglePopup} />
                    </div>
                </div>
                <div className='download-child download-child-2'></div>
            </div>
                    {/* <button className='popup-btn' onClick={togglePopup}>Show QR Codes</button> */}
            {showPopup && (
                <div className='popup'>
                    <button className='close-btn' onClick={togglePopup}>X</button>
                    <div className='popup-content'>
                        <img src='/images/QRcode1.png' alt='QR Code 1' className='qr-img' />
                        <a href='https://panel.therisefx.com/platform/TheRiseFX-1.0.apk'>
                            <img src='images/android-download.png' className='download-icon' alt='error'/>
                        </a>
                    </div>
                    <div className='popup-content'>
                        <img src='/images/QRcode2.png' alt='QR Code 2' className='qr-img' />
                        <a href='https://apps.apple.com/us/app/mobiustrader-7/id1355359598'>
                            <img src='images/ios-download.png' className='download-icon' alt='error'/>
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
}


export default Download;
