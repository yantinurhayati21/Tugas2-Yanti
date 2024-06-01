import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Footer() {
    return (
        <div className="text-center p-6 bg-gray-300">
            <h3 className="text-xl font-semibold">
                Created By Yanti Nurhayati
            </h3>
            <div className="my-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="mx-2">
                    <FaFacebook className="inline-block text-blue-600 align-middle" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="mx-2">
                    <FaInstagram className="inline-block text-pink-500 align-middle" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="mx-2">
                    <FaTwitter className="inline-block text-blue-400 align-middle" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="mx-2">
                    <FaLinkedin className="inline-block text-blue-700 align-middle" />
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="mx-2">
                    <FaGithub className="inline-block text-gray-800 align-middle" />
                </a>
            </div>
        </div>
    );
}
