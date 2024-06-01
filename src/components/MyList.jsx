import { useState } from 'react';
import { FaHeart } from 'react-icons/fa';

export default function MyList() {
  const bands = [
    {
      id: 1,
      nama_penyanyi: "Ariel Noah",
      nama_lagu: "Separuh Aku",
      nama_band: "Noah",
      gambar: "noah.jpg",
    },
    {
      id: 2,
      nama_penyanyi: "Geisha",
      nama_lagu: "Lumpuhkan Ingatanku",
      nama_band: "Geisha",
      gambar: "geisha.jpg",
    },
    {
      id: 3,
      nama_penyanyi: "Vierra",
      nama_lagu: "Terlalu Lama",
      nama_band: "Vierratale",
      gambar: "vierra.jpg",
    },
    {
      id: 4,
      nama_penyanyi: "Nisa Sabyan",
      nama_lagu: "Deen Assalam",
      nama_band: "Sabyan Gambus",
      gambar: "sabyan.jpg",
    },
    {
      id: 5,
      nama_penyanyi: "Wali",
      nama_lagu: "Tobat Maksiat",
      nama_band: "Wali Band",
      gambar: "wali.jpg",
    },
    {
        id: 6,
        nama_penyanyi: "Armada",
        nama_lagu: "Asal Kau Bahagia",
        nama_band: "Armada",
        gambar: "armada.jpg",
      },
      {
        id: 7,
        nama_penyanyi: "Virgoun",
        nama_lagu: "Surat Cinta Untuk Starla",
        nama_band: "Virgoun",
        gambar: "virgoun.jpeg",
      },
      {
        id: 8,
        nama_penyanyi: "Dadali",
        nama_lagu: "Kau Terbaik Untukku",
        nama_band: "Dadali",
        gambar: "dadali.jpg",
      },
  ];

  const [likeCount, setLikeCount] = useState(0);
  const increaseLikeCount = () => {
    setLikeCount(likeCount + 1);
  };

  const showAlert = (band) => {
    alert(
      `Nama Penyanyi: ${band.nama_penyanyi}\nNama Band: ${band.nama_band}\nJudul Lagu: ${band.nama_lagu}`
    );
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 py-8">
      {bands.map((band) => (
        <div
          key={band.id}
          className="bg-white rounded-lg shadow-md overflow-hidden"
        >
          <img
            src={band.gambar}
            alt={band.nama_lagu}
            className="h-64 w-full object-cover"
          />
          <div className="p-4 flex flex-col justify-between">
            <h2 className="text-lg font-semibold mb-2">{band.nama_lagu}</h2>
            <button
              onClick={() => showAlert(band)}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 mb-2"
            >
              View More
            </button>
            <div className="flex items-center">
              <FaHeart
                onClick={increaseLikeCount}
                className="text-red-500 text-2xl cursor-pointer"
              />
              <span className="ml-1">{likeCount}</span>
            </div>
          </div>
        </div>
      ))}
      <div className="italic text-red-500 text-sm">Jika Anda Like 1 band maka semua band akan terlike ya, biar adil</div>
    </div>
  );
}
