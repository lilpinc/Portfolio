import './Footer.css'
import { Link } from 'react-router-dom';

export default function Footer() {

    return (
        <>
            <div className='footer'>
                <p>Created by me © 2024</p>
                <div>
                <Link to="https://www.linkedin.com/in/anna-britta-pincus-25293b137/" className="sourcelinks">
                    LinkedIn
                </Link>
                <Link to="https://github.com/lilpinc" className="sourcelinks">
                    Github
                </Link>
                </div>
            </div>
        </>
    );
}