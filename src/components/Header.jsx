import { FaUser } from 'react-icons/fa';

export default function Header() {
    const author = "Yanti Nurhayati";
    const greeting = author ? author : "Tanpa Nama";

    return (
        <header className="bg-gray-500 p-6 text-white shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-3xl font-bold">
                    Daftar Lagu
                </h1>
                <div className="text-lg font-medium flex items-center text-sky-300">
                    <FaUser className="mr-2" />
                    {greeting}
                </div>
            </div>
        </header>
    );
}
