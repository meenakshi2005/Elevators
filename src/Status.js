import { CalendarDaysIcon, HandRaisedIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function Example() {
  const [isOpen, setIsOpen] = useState(false);
  const [cardData, setCardData] = useState([]);

  const [formData, setFormData] = useState({
    device_id: "597440120c822c14",
    task_id: "",
    status: "",
    description: "",
  });
  
  const divRef = useRef(null);

  useEffect(() => {
    // Automatically fetch the value after 2 seconds
    const timer = setTimeout(() => {
      if (divRef.current) {
        alert(divRef.current.textContent); // Gets the inner content of the div
      }
    }, 2000); // 2000ms = 2 seconds

    // Clean up the timeout if the component unmounts
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await card_data(formData);
      console.log(data);
      if (data.status === "success") {

        toast.success("Report submitted successfully!");

      } else {
        toast.error("Failed to submit the report.");
      }
    } catch (error) {
      toast.error("An error occurred while submitting the report.");
    }
  };

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    fetchCardData();
  }, []);

  const fetchCardData = async () => {
    try {
      const response = await axios.get(
        "https://beacon-wine.vercel.app/api/personnel/29cfaa3ae8516b98/tasks"
      );
      setCardData(response.data.data);
    } catch (error) {
      toast.error("Failed to load tasks.");
    }
  };

  const card_data = async (data) => {
    try {
      const result = await axios.post(
        "https://beacon-wine.vercel.app/api/reportTask",
        data
      );
      console.log("successful:", result.data);
      if (result.data.status === "success") {
        
        toggleModal();
        setFormData({
          device_id: "597440120c822c14",
          task_id: "",
          status: "",
          description: "",
        })
      }
      return result.data;
    } catch (error) {
      console.error("Failed:", error.response ? error.response.statusText : error.message);
      return error;
    }
  };

  return (
    <div className="relative isolate overflow-hidden bg-white-900 py-16 sm:py-24 lg:py-32">
      <div className="display-none" id="formId1" ref={divRef}>
        Hello
      </div>
      <ToastContainer position="top-right" autoClose={5000} />
      {isOpen && (
        <div
          id="crud-modal"
          tabIndex="-1"
          aria-hidden="true"
          className="fixed inset-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50"
        >
          <div className="relative p-4 w-full max-w-md max-h-full">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              {/* Modal header */}
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Today's Report
                </h3>
                <button
                  onClick={toggleModal}
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>

              <form onSubmit={handleSubmit} className="p-4 md:p-5">
                <div className="grid gap-4 mb-4 grid-cols-2">
                  <div className="col-span-2">
                    <label
                      htmlFor="category"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Task
                    </label>
                    <select
                      id="category"
                      name="task_id"
                      value={formData.task_id}
                      onChange={handleChange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white outline-none"
                    >
                      <option value="">Select title</option>
                      {cardData.map((e) => (
                        <option key={e.task_id} value={e.task_id}>
                          {e.title}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="col-span-2">
                    <label
                      htmlFor="category"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Status
                    </label>
                    <select
                      id="category"
                      name="status"
                      value={formData.status}
                      onChange={handleChange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white outline-none"
                    >
                      <option value="">Select status</option>
                     
                        <option value="in-progress">
                        Progress
                        </option>
                        <option value="completed">
                        Completed
                        </option>
                     
                    </select>
                  </div>
                  <div className="col-span-2">
                    <label
                      htmlFor="description"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Product Description
                    </label>
                    <textarea
                      id="description"
                      rows="4"
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      placeholder="Write product description here"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
     
     <div className="mx-auto max-w-7xl px-6 lg:px-4">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h4 className="text-3x1 leading-loose text-gray-400 font-bold ">
              Hello, Alok
            </h4>
            <h2 className="text-4xl font-bold  text-black sm:text-4xl">
              You have <span className="text-blue-800"> 29 tasks</span> this
              month👍
            </h2>
            <div className="mt-6 flex max-w-md flex flex-1 justify-center items-center gap-x-4 relative  ">
              <input
                type="text"
                id="mySearch"
                placeholder="Search a task..."
                title="Type in a category"
                className="w-full rounded-md py-5 text-3x1 bg-gray-50 px-4 py-2 pl-10  outline-none"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="absolute left-2 h-5 w-5 text-gray-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-4.35-4.35m1.65-5.15a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <div className="flex justify-around w-1/2 py-4 px-8">
              <div
                onClick={() => toggleModal()}
                className="flex flex-col items-center p-4 "
              >
                <div className="w-16 h-16 flex justify-center items-center rounded-full bg-red-100 border-red-500 border-2  ">
                  <span className="text-300 font-bold  ">
                    <svg
                      class="h-10 w-10 text-red-500"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      {" "}
                      <path stroke="none" d="M0 0h24v24H0z" />{" "}
                      <path d="M9 5H7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2V7a2 2 0 0 0 -2 -2h-2" />{" "}
                      <rect x="9" y="3" width="6" height="4" rx="2" />{" "}
                      <line x1="9" y1="12" x2="9.01" y2="12" />{" "}
                      <line x1="13" y1="12" x2="15" y2="12" />{" "}
                      <line x1="9" y1="16" x2="9.01" y2="16" />{" "}
                      <line x1="13" y1="16" x2="15" y2="16" />
                    </svg>
                  </span>
                </div>
                <div className=" mt-2 text-100 font-bold text-gray-500 ">
                  Report
                </div>
              </div>
              <div className="flex flex-col items-center p-4 ">
                <div className="w-16 h-16 flex justify-center items-center rounded-full bg-yellow-100 border-yellow-500 border-2  ">
                  <span className="text-300 font-bold  ">
                    <svg
                      class="h-10 w-10 text-yellow-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </span>
                </div>
                <div className="mt-2 text-100 font-bold text-gray-500 ">
                  Progress
                </div>
              </div>
              <div className="flex flex-col items-center p-4">
                <div className="w-16 h-16 flex justify-center items-center rounded-full bg-green-100 border-green-500 border-2">
                  <span className="text-green-600 font-bold">
                    <span className="text-300 font-bold ">
                      <svg
                        class="h-10 w-10 text-green-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                        />
                      </svg>
                    </span>
                  </span>
                </div>
                <div className="mt-2 text-100 font-bold text-gray-500 ">
                  Done
                </div>
              </div>
            </div>

            <h2 className="text-4xl font-bold  text-black sm:text-4xl">
              Today's tasks
            </h2>
            <div className="mx-auto w-full flex flex-1 overflow-x-scroll scroll-smooth snap-x snap-mandatory">
              {cardData.map((e) => (
                <div
                  key={e.task_id}
                  className="rounded-md  bg-blue-600 mx-2 my-6 snap-center w-full sm:w-full lg:w-full"
                >
                  <div className="p-4 w-80">
                    <h1 className="inline-flex items-center text-2xl font-bold text-white">
                      {e.project_name}
                    </h1>
                    <p className="mt-3 text-xl font-semibold text-white">
                      {e.description}
                    </p>
                    <p className="mt-3 text-xl font-semibold text-white">
                      {e.validTill.slice(0, 10)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
