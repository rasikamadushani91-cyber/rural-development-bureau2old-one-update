import React, { useState, useRef } from "react";

const coconutHuskProjects = [
  {
    id: 1,
    name: "Nikaweratiya Coir Industry Zone",
    district: "Kurunegala",
    office: "Nikaweratiya",
    product: "Coir ropes, mats, brushes",
    location: "Nikaweratiya Industrial Zone",
    buyPath: "/buy/nikaweratiya-coir",
    description:
      "This zone supports coir product manufacturers with improved machinery, training, and export facilitation. It promotes eco-friendly production and connects artisans to global markets.",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.314248420939!2d80.2159383!3d7.7576504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2fddc602ccdb%3A0xcc8a51875ff74a03!2sNikaweratiya!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
  },
  {
    id: 2,
    name: "Wennappuwa Coir Cluster",
    district: "Puttalam",
    office: "Wennappuwa",
    product: "Eco-friendly packaging, coir blocks",
    location: "Wennappuwa Coir Cluster",
    buyPath: "/buy/wennappuwa-coir",
    description:
      "This cluster promotes sustainable coir packaging and block production. It supports innovation in biodegradable materials and connects producers to agriculture and construction sectors.",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.314248420939!2d79.9919143!3d7.309449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae392e07c554149%3A0x0000000000000000!2sWennappuwa!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
  },
  {
    id: 3,
    name: "Ambalangoda Coastal Coir Zone",
    district: "Galle",
    office: "Ambalangoda",
    product: "Handmade coir mats",
    location: "Ambalangoda Coastal Zone",
    buyPath: "/buy/ambalangoda-coir",
    description:
      "This coastal zone supports traditional coir mat weavers with raw material access, branding, and tourism-linked sales. It preserves heritage crafts and promotes fair trade.",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d80.0411077!3d6.2370214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae141cf559d74a9%3A0x753122db62df6017!2sAmbalangoda!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
  },
];

const CoconutHusk = () => {
  const [selectedProject, setSelectedProject] = useState(coconutHuskProjects[0]);
  const scrollTargetRef = useRef(null);

  const handleSelect = (project) => {
    setSelectedProject(project);
    setTimeout(() => {
      scrollTargetRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-white px-6 py-10 space-y-10">
      <h1 className="text-2xl font-bold text-[#2C3E50] mb-6">Coconut Husk Related Product</h1>

      {/* Table Section */}
      <div className="overflow-x-auto mb-6">
        <table className="min-w-full border border-gray-300">
          <thead className="bg-[#CB8589] text-white">
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
            {coconutHuskProjects.map((item) => (
              <tr
                key={item.id}
                className="hover:bg-[#F7CAC9] cursor-pointer"
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
                    className="text-blue-600 underline hover:text-[#CB8589]"
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
            title="Coconut Husk Project Map"
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
        <div className="w-full lg:w-1/2 h-[400px] bg-[#F7CAC9] p-6 rounded-md shadow-md overflow-y-auto">
          <h2 className="text-xl font-bold text-[#CB8589] mb-2">{selectedProject.name}</h2>
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

export default CoconutHusk;
