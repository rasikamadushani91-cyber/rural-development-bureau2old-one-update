import React, { useState, useRef } from "react";

const meats = [
  {
    id: 1,
    name: "Udahenthenna Goat Meat Cluster",
    district: "Maha Nuwara",
    office: "Gaga Ihala Korale",
    product: "Goat Meat",
    location: "Udahenthenna, Athgala North, Thebiligala, Ulapane North",
    buyPath: "/buy/udahenthenna-goat",
    description:
      "This cluster supports goat meat producers with improved grazing, veterinary care, and market access. It promotes sustainable livestock farming and connects producers to regional buyers.",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.951248420939!2d80.5264952!3d7.4099973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3415bb51230eb%3A0xb726b29dfcb059d8!2sUdahena!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
  },
  {
    id: 2,
    name: "Dambagolla Goat Meat Cooperative",
    district: "Maha Nuwara",
    office: "Kotmale West",
    product: "Goat Meat",
    location: "560 D Dambagolla",
    buyPath: "/buy/dambagolla-goat",
    description:
      "This cooperative supports goat farmers in Dambagolla with shared processing units, branding, and fair trade certification. It promotes rural entrepreneurship and sustainable livelihoods.",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3948.314248420939!2d80.5724434!3d7.7560549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afcb3c5240a5cc1%3A0x8957f51f3c82b9f7!2s560%20Ananda%20Rajakaruna%20Mawatha!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
  },
  {
    id: 3,
    name: "Walakada Goat Meat Zone",
    district: "Kalutara",
    office: "Palinda Nuwara",
    product: "Goat Meat",
    location: "Walakada, Peladha",
    buyPath: "/buy/walakada-goat",
    description:
      "This zone promotes goat meat production in Walakada and Peladha with improved feed, housing, and cold chain logistics. It connects producers to hotels and wellness markets.",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d80.2511092!3d6.5986099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3c891bdffea0f%3A0x1629136852c0eb13!2sWalakada!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
  },
];

const MeatsPage = () => {
  const [selectedProject, setSelectedProject] = useState(meats[0]);
  const scrollTargetRef = useRef(null);

  const handleSelect = (project) => {
    setSelectedProject(project);
    setTimeout(() => {
      scrollTargetRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-white px-6 py-10 space-y-10">
      <h1 className="text-2xl font-bold text-[#2C3E50] mb-6">Meats Product</h1>

      {/* Table Section */}
      <div className="overflow-x-auto mb-6">
        <table className="min-w-full border border-gray-300">
          <thead className="bg-[#F3931D] text-white">
            <tr>
              <th className="px-4 py-2 border">No</th>
              <th className="px-4 py-2 border">District</th>
              <th className="px-4 py-2 border">Divisional Secretary Office</th>
              <th className="px-4 py-2 border">Product</th>
              <th className="px-4 py-2 border">Location</th>
              <th className="px-4 py-2 border">Buy Product</th>
            </tr>
          </thead>
          <tbody>
            {meats.map((item) => (
              <tr
                key={item.id}
                className="hover:bg-[#FFF7E6] cursor-pointer"
                onClick={() => handleSelect(item)}
              >
                <td className="px-4 py-2 border text-center">{item.id}</td>
                <td className="px-4 py-2 border">{item.district}</td>
                <td className="px-4 py-2 border">{item.office}</td>
                <td className="px-4 py-2 border">{item.product}</td>
                <td className="px-4 py-2 border text-blue-600 underline">{item.location}</td>
                <td className="px-4 py-2 border">
                  <a
                    href={item.buyPath}
                    className="text-blue-600 underline hover:text-[#F3931D]"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Click Here
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Split Layout Section */}
      <div
        ref={scrollTargetRef}
        className="w-full flex flex-col lg:flex-row gap-6 items-start"
      >
        {/* Map Section */}
        <div className="w-full lg:w-1/2 h-[400px] rounded-md overflow-hidden shadow-lg">
          <iframe
            title="Meats Product Map"
            src={selectedProject.mapEmbed}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Project Details Section */}
        <div className="w-full lg:w-1/2 h-[400px] bg-[#FFF7E6] p-6 rounded-md shadow-md overflow-y-auto">
          <h2 className="text-xl font-bold text-[#F3931D] mb-2">{selectedProject.name}</h2>
          <p className="text-sm text-gray-700 mb-4">{selectedProject.description}</p>
          <div className="text-sm space-y-1">
            <p><strong>District:</strong> {selectedProject.district}</p>
            <p><strong>Divisional Secretary Office:</strong> {selectedProject.office}</p>
            <p><strong>Product:</strong> {selectedProject.product}</p>
            <p><strong>Location:</strong> {selectedProject.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeatsPage;
