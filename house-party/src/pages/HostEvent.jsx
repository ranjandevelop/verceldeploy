import React, { useState } from "react";

function HostEvent() {
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [locality, setLocality] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send request email
    const requestEmailData = {
      to: "ranjankwork@gmail.com",
      subject: "Event Request",
      text: `New event request from:\nEmail: ${email}\nPreferred Date: ${date}\nLocality: ${locality}\nCity: ${city}\nPincode: ${pincode}`,
    };

    // Send thank you email
    const userName = localStorage.getItem("userName") || "User"; // Get name from local storage
    const thankYouEmailData = {
      to: email, // Replace with user's email if available
      subject: "Thank You for Your Request",
      text: `Hey ${userName},\n\nWe have received your request to host a house party with us and we are delighted!\n\nWhile we are reviewing your request, please email your government IDs which have an address on them, if you are a first-time user.\n\nSee how to upload ID: Watch Video\n\nClick on the link below to upload the documents: Upload Documents\n\nWe are excited and will be calling you shortly to tell you more about hosting. Looking forward to speaking to you!\n\nCheers,\nTeam mytivibes.club`,
    };

    try {
      await fetch("http://localhost:3001/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestEmailData),
      });

      // Optionally send the thank you email as well
      await fetch("http://localhost:3001/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(thankYouEmailData),
      });

      // Clear the form or show a success message
      alert("Request sent successfully!");
      setEmail("");
      setDate("");
      setLocality("");
      setCity("");
      setPincode("");
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send request.");
    }
  };

  return (
    <>
      <div className="flex justify-center items-center h-[100vh]">
        <div className="max-w-4xl mx-auto bg-white p-10 md:p-16 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit}>
            {/* Email Input */}
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 transition-colors"
                placeholder="john.doe@company.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Preferred Date */}
            <div className="mb-6">
              <label
                htmlFor="date"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Enter Preferred Date
              </label>
              <input
                type="date"
                id="date"
                className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 transition-colors"
                required
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>

            {/* Locality */}
            <div className="mb-6">
              <label
                htmlFor="locality"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Locality
              </label>
              <input
                type="text"
                id="locality"
                className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 transition-colors"
                placeholder="Complete address of party"
                required
                value={locality}
                onChange={(e) => setLocality(e.target.value)}
              />
            </div>

            {/* City and Pincode */}
            <div className="mb-6 flex space-x-4">
              <div className="w-1/2">
                <label
                  htmlFor="city"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  City
                </label>
                <select
                  id="city"
                  className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 transition-colors"
                  required
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                >
                  <option value="" disabled>
                    Select city
                  </option>
                  <option value="bangalore">Bangalore</option>
                  <option value="kolkata">Kolkata</option>
                  <option value="mumbai">Mumbai</option>
                  <option value="pune">Pune</option>
                  <option value="delhi">Delhi</option>
                  <option value="noida">Noida</option>
                </select>
              </div>
              <div className="w-1/2">
                <label
                  htmlFor="pincode"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Pincode
                </label>
                <input
                  type="text"
                  id="pincode"
                  className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 transition-colors"
                  placeholder="City pincode"
                  required
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value)}
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="text-white bg-[#460064] hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center transition-colors"
            >
              Send Request
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default HostEvent;
