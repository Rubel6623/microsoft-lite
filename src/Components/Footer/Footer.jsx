import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='footer d-flex'>
            <div>
                <ul>
                <h6>What's new</h6>
                    <li>Surface Pro 9</li>
                    <li>Surface Laptop 5</li>
                    <li>Surface Studio 2+</li>
                    <li>SurfaceLaptop Go 2</li>
                    <li>Surface Laptop Studio</li>
                    <li>Windows 11 apps</li>
                </ul>
            </div>
            <div>
                
                <ul>
                <h6>Microsoft Store</h6>
                    <li>Account Profile</li>
                    <li>Download Center</li>
                    <li>Microsoft Store support</li>
                    <li>Returns</li>
                    <li>Order tracking</li>
                    <li>Virtual workshops and training</li>
                </ul>
            </div>
            <div>
                
                <ul>
                <h6>EduCation</h6>
                    <li>Microsoft in EduCation</li>
                    <li>Device for EduCation</li>
                    <li>Microsoft Terms for EduCation</li>
                    <li>Microsoft 365 Education</li>
                    <li>Educator training and development</li>
                    <li>Azure for students</li>
                </ul>
            </div>
            <div>
                
                <ul>
                <h6>Business</h6>
                    <li>Microsoft Cloud</li>
                    <li>Microsoft Security</li>
                    <li>Dynamics 365</li>
                    <li>Microsoft 365</li>
                    <li>Microsoft Power Platform</li>
                    <li>Small Business</li>
                </ul>
            </div>
            <div>
                
                <ul>
                <h6>Developer & IT</h6>
                    <li>Azure</li>
                    <li>Developer Center</li>
                    <li>Documentation</li>
                    <li>Microsoft Tech Community</li>
                    <li>Azure Marketplace</li>
                    <li>Visual Studio</li>
                </ul>
            </div>
            <div>
                
                <ul>
                <h6>Company</h6>
                    <li>Careers</li>
                    <li>About Microsoft</li>
                    <li>Company news</li>
                    <li>Privacy at Microsoft</li>
                    <li>Diversity and inclusion</li>
                    <li>Sustainability</li>
                </ul>
            </div>
            </div>
            <p className='text-end me-5 mt-4'> &copy; Microsoft 2023</p>
        </div>
    );
};

export default Footer;