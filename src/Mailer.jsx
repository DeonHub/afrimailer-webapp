import React, { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import axios from 'axios';
import openNotification from "./components/OpenNotification";
import Loader from "./components/Loader";

const Mailer = () => {

  const [useTemplate, setUseTemplate] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [personalize, setPersonalize] = useState(false);
  const [formData, setFormData] = useState({
    subject: "",
    recipients: "",
    message: "",
    template: "",
    useTemplate: "",
    personalize: "",
    csvFile: null
  });



  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    // Check if the event target is a checkbox or select element
    const newValue =
      type === "checkbox" ? checked : type === "file" ? files[0] : value;

    if (name === 'useTemplate') setUseTemplate(checked);
    else if (name === 'personalize') setPersonalize(checked);

    // Update state based on the name of the input field
    setFormData((prevState) => ({
      ...prevState,
      [name]: newValue,
    }));
  };


  const validateForm = () => {
    if (!formData.subject) {
      openNotification("topRight", "error", "Mailer Error", "Please provide subject for this message");
      return false;
    }
    if (!formData.recipients && !formData.csvFile) {
      openNotification("topRight", "error", "Mailer Error", "Please provide at least one recipient or upload a CSV file.");
      return false;
    }
    if (!formData.message && !useTemplate) {
      openNotification("topRight", "error", "Mailer Error", "Message is required if not using a template.");
      return false;
    }
    return true;
  };

  const handleSubmit = async () => {
    if(!validateForm()) {
      return;
    }

    setIsLoading(true);
  
    const body = new FormData();
    for (const key in formData) {
      body.append(key, formData[key]);
    }

    console.log(body)
  
    try {
      axios
      .post(`${import.meta.env.VITE_API_URL}/mails/send-bulk-email`,  body, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((response) => {
        if (response.data.success) {
          setIsLoading(false);
          openNotification("topRight", "success", "Mailer Success", "Message(s) sent successfully");
        }
      })
      .catch((error) => {
        setIsLoading(false);
        openNotification("topRight", "error", "Mailer Error", "Error sending mail");
        console.error(error);
      });
    } catch (error) {
      openNotification("topRight", "error", "Mailer Error", "Error sending mail");
      console.error(error);
    }
  };


  return (
   
      <>
      <div className="flex h-screen overflow-hidden bg-white">
        <Sidebar active={'mailer'} />
        <div className="flex flex-col flex-1 h-full overflow-hidden">
          <Header />
 {isLoading ? (<Loader />) : (
  <>
          <main className="flex-1 max-h-full p-5 overflow-hidden overflow-y-scroll bg-gray-100">
            <div className="flex flex-col items-start justify-between pb-6 space-y-4 border-b lg:items-center lg:space-y-0 lg:flex-row">
              <h1 className="text-2xl font-semibold whitespace-nowrap">AfriMailer</h1>
            </div>

            <form className="m-auto p-0 w-[70%]">
              <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12 mt-10">
                  <h2 className="text-base font-semibold text-gray-900 text-center">Send Messages to anyone</h2>
                  <p className="mt-1 text-sm text-gray-600 text-center">Fill in the necessary details and submit</p>

                  <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="col-span-full">
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-900">Subject</label>
                      <input
                        id="subject"
                        name="subject"
                        type="text"
                        placeholder="Enter message subject"
                        className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-span-full">
                      <label htmlFor="recipients" className="block text-sm font-medium text-gray-900">Recipient(s)</label>
                      <textarea
                        id="recipients"
                        name="recipients"
                        rows={3}
                        className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                        placeholder="Enter recipients' emails here, separated by commas"
                        onChange={handleChange}
                      />
                      <p className="mt-3 text-sm/6 text-gray-600">Seperate multiple emails with comma</p>
                    </div>

                    <div className="col-span-full">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-900">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        rows={3}
                        disabled={useTemplate}
                        required={!useTemplate}
                        className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                        placeholder="Enter message here..."
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-span-full flex gap-x-3">
                      <input
                        id="useTemplate"
                        name="useTemplate"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        checked={useTemplate}
                        onChange={handleChange}
                      />
                      <label htmlFor="useTemplate" className="font-medium text-gray-900">Use Template</label>
                    </div>

                    <div className="col-span-full">
                    <label htmlFor="country" className="block text-sm/6 font-medium text-gray-900">
                      Select Template
                    </label>
                    <div className="mt-2">
                      <select
                        id="template"
                        name="template"
                        autoComplete="country-name"
                        className="block w-full rounded-md bg-white disabled:bg-gray-100 border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                        disabled={!useTemplate} onChange={handleChange}
                      >
                        <option value="">Choose a template</option>
                        <option value="csr">CSR Interview Invitation</option>
                        <option value="alert">Staff Alert Message</option>
                        <option value="prom">Promotional Message</option>
                      </select>
                    </div>
                  </div>

                    <div className="col-span-full">
                      <label htmlFor="csvFile" className="block text-sm font-medium text-gray-900">Upload User CSV</label>
                      <input
                        id="csvFile"
                        name="csvFile"
                        type="file"
                        className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                        onChange={handleChange}
                      />
                      <a href="https://drive.google.com/file/d/1ARi0-1newD8vIwbGe9WgBJKRdAA1KigP/view?usp=sharing" target="_blank" className="mt-5 text-sm/6 text-blue-600 hover:underline">Download CSV Template</a>
                    </div>

                    <div className="col-span-full flex gap-x-3">
                      <input
                        id="personalize"
                        name="personalize"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        checked={personalize}
                        onChange={handleChange}
                      />
                      <label htmlFor="personalize" className="font-medium text-gray-900">Personalize</label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-center gap-x-6">
                <button
                  type="button"
                  className="w-full rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline-none"
                  onClick={handleSubmit}
                >
                  Send Emails
                </button>
              </div>

            
            </form>
          </main>

  <Footer />
  </>

 )}
        </div>
      </div>
    </>
   
    
  );
};



export default Mailer;
