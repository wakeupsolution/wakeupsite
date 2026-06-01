"use client";
import React, { useState } from "react";

const ClientInfoForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // State to track selected bulk files for UI feedback
  const [selectedImagesCount, setSelectedImagesCount] = useState(0);
  const [selectedVideosCount, setSelectedVideosCount] = useState(0);
  const [logoName, setLogoName] = useState("");

  const handleFileChange = (e, type) => {
    const files = e.target.files;
    if (!files) return;

    if (type === "logo") {
      setLogoName(files[0] ? files[0].name : "");
    } else if (type === "images") {
      setSelectedImagesCount(files.length);
    } else if (type === "videos") {
      setSelectedVideosCount(files.length);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.currentTarget);

      const res = await fetch("/api/contact/clinetinfo", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (data.success) {
        alert(`Successfully zipped and sent all files to Telegram! 🚀`);
        e.target.reset();
        // Reset states
        setLogoName("");
        setSelectedImagesCount(0);
        setSelectedVideosCount(0);
      } else {
        alert(`Submission Failed: ${data.message}`);
      }
    } catch (error) {
      console.error("Frontend Form Submission Error:", error);
      alert("An error occurred while zipping and uploading batch records.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-[#f6fbff] via-[#eefaf2] to-[#f7fbff] py-20 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>
          <div className="inline-flex items-center gap-3 bg-white px-5 py-3 rounded-full shadow-md border border-gray-100 mb-8">
            <div className="flex -space-x-2">
              <div className="w-5 h-5 rounded-full bg-cyan-400 border-2 border-white"></div>
              <div className="w-5 h-5 rounded-full bg-lime-400 border-2 border-white"></div>
              <div className="w-5 h-5 rounded-full bg-gray-300 border-2 border-white"></div>
            </div>
            <p className="text-gray-600 font-medium">Client Website Onboarding</p>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-gray-900">
            Share Your
            <span className="block bg-gradient-to-r from-cyan-500 to-lime-400 bg-clip-text text-transparent">
              Business Details
            </span>
          </h1>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-xl">
            Fill your company information and upload your branding assets to start your website project. All files are automatically zipped in the background.
          </p>

          {/* CARD */}
          <div className="relative mt-14">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-lime-300 rounded-[35px] rotate-2"></div>
            <div className="relative bg-white border-2 border-cyan-400 rounded-[35px] p-8 shadow-2xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Business Information</h2>
              <p className="text-gray-600 leading-relaxed">
                Upload your business logo, images, videos, and company details securely.
              </p>
              <div className="mt-8 bg-gray-50 rounded-3xl p-6 border">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-xl text-gray-900">Website Development</h3>
                  <div className="w-10 h-10 rounded-full bg-lime-100 flex items-center justify-center">↑</div>
                </div>
                <div className="mt-8">
                  <p className="text-gray-500 text-sm">Businesses Served</p>
                  <h1 className="text-5xl font-bold text-gray-900 mt-2">150+</h1>
                  <p className="text-lime-500 mt-2 font-medium">Growing Companies Online</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="bg-white/80 backdrop-blur-xl border border-white rounded-[35px] shadow-2xl p-10">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">Client Information</h2>
          <p className="text-gray-500 mb-10">Submit your business details below.</p>

          <form className="space-y-6" onSubmit={handleFormSubmit}>

            {/* CLIENT NAME */}
            <div>
              <label className="text-sm font-semibold text-gray-700">Client Name</label>
              <input
                type="text"
                name="clientName"
                required
                placeholder="Enter client name"
                className="w-full mt-2 px-5 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>

            {/* SINGLE LOGO UPLOAD */}
            <div>
              <label className="text-sm font-semibold text-gray-700">Client Image / Main Logo (Single File)</label>
              <div className="mt-2 border-2 border-dashed border-gray-200 bg-gray-50 hover:bg-gray-100 transition rounded-2xl p-4 text-center relative cursor-pointer">
                <input 
                  type="file"
                  name="clientImage"
                  accept="image/*"
                  onChange={(e) => handleFileChange(e, "logo")}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" 
                />
                <p className="text-sm text-gray-600">
                  {logoName ? `Selected: ${logoName}` : "Click to upload main business logo"}
                </p>
              </div>
            </div>

            {/* EMAIL + MOBILE */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="text-sm font-semibold text-gray-700">Email Address</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="company@gmail.com"
                  className="w-full mt-2 px-5 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-gray-700">Mobile Number</label>
                <input
                  type="text"
                  name="mobile"
                  required
                  placeholder="+91 9876543210"
                  className="w-full mt-2 px-5 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-lime-400"
                />
              </div>
            </div>

            {/* ADDRESS */}
            <div>
              <label className="text-sm font-semibold text-gray-700">Address</label>
              <textarea
                rows="3"
                name="address"
                placeholder="Enter company address..."
                className="w-full mt-2 px-5 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              ></textarea>
            </div>

            {/* COMPANY NAME */}
            <div>
              <label className="text-sm font-semibold text-gray-700">Company Name</label>
              <input
                type="text"
                name="companyName"
                required
                placeholder="Enter company name"
                className="w-full mt-2 px-5 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-lime-400"
              />
            </div>

            {/* GOOGLE BUSINESS */}
            <div>
              <label className="text-sm font-semibold text-gray-700">Google My Business Link</label>
              <input
                type="url"
                name="googleBusiness"
                placeholder="https://business.google.com/"
                className="w-full mt-2 px-5 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>

            {/* TRUE BULK UPLOADS SECTION */}
            <div className="grid md:grid-cols-2 gap-6">
              
              {/* BULK IMAGES INPUT - SELECT ALL AT ONCE */}
              <div>
                <label className="text-sm font-semibold text-gray-700 block">
                  Upload Project Images (Bulk)
                </label>
                <div className="mt-2 border-2 border-dashed border-cyan-300 bg-cyan-50/50 hover:bg-cyan-50 transition rounded-2xl p-6 text-center relative cursor-pointer">
                  <input 
                    type="file"
                    name="images" 
                    multiple // Enables bulk selecting
                    accept="image/*"
                    onChange={(e) => handleFileChange(e, "images")}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" 
                  />
                  <div className="space-y-1 pointer-events-none">
                    <p className="text-2xl">📸</p>
                    <p className="text-sm font-medium text-cyan-800">
                      {selectedImagesCount > 0 
                        ? `✅ ${selectedImagesCount} Images Selected` 
                        : "Click to select ALL images"}
                    </p>
                    <p className="text-xs text-cyan-600">Drag & drop or highlight multiple files</p>
                  </div>
                </div>
              </div>

              {/* BULK VIDEOS INPUT - SELECT ALL AT ONCE */}
              <div>
                <label className="text-sm font-semibold text-gray-700 block">
                  Upload Project Videos (Bulk)
                </label>
                <div className="mt-2 border-2 border-dashed border-lime-300 bg-lime-50/50 hover:bg-lime-50 transition rounded-2xl p-6 text-center relative cursor-pointer">
                  <input 
                    type="file" 
                    name="videos" 
                    multiple // Enables bulk selecting
                    accept="video/*"
                    onChange={(e) => handleFileChange(e, "videos")}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" 
                  />
                  <div className="space-y-1 pointer-events-none">
                    <p className="text-2xl">🎥</p>
                    <p className="text-sm font-medium text-lime-800">
                      {selectedVideosCount > 0 
                        ? `✅ ${selectedVideosCount} Videos Selected` 
                        : "Click to select ALL videos"}
                    </p>
                    <p className="text-xs text-lime-600">Drag & drop or highlight multiple files</p>
                  </div>
                </div>
              </div>

            </div>

            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-cyan-500 to-lime-400 text-white py-5 rounded-2xl font-semibold text-lg shadow-lg hover:scale-[1.02] transition-all duration-300 disabled:opacity-60 disabled:hover:scale-100"
            >
              {isSubmitting ? "Zipping Batch Files & Sending..." : "Submit Business Details"}
            </button>

          </form>
        </div>
      </div>
    </section>
  );
};

export default ClientInfoForm;