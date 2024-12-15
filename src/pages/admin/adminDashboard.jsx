import React, { useState } from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

const AdminDashboard = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [scheduleData, setScheduleData] = useState({
    doctorName: "",
    checkType: "in",
    date: "",
    schedule: "",
    actualTime: "",
  });

  const openModal = (doctorName, checkType, date, schedule, actualTime) => {
    setScheduleData({ doctorName, checkType, date, schedule, actualTime });
    setModalIsOpen(true);
  };

  const closeModal = () => setModalIsOpen(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setScheduleData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    closeModal();
  };

  return (
    <div className="dark">
      {/* الشريط الجانبي */}
      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-800">
          <ul className="space-y-2 font-medium">
            <Link to={"/manageDoctors"}>
              <a
                href="#"
                className="flex items-center p-2 text-white rounded-lg hover:bg-gray-700 group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  width="24"
                  height="24"
                  fill="currentColor"
                >
                  <path d="M224 256A128 128 0 1 0 96 128a128 128 0 0 0 128 128zm0 32c-63.6 0-192 32-192 96v48a32 32 0 0 0 32 32h320a32 32 0 0 0 32-32v-48c0-64.1-128.4-96-192-96zm96 144h-48v40a16 16 0 0 1-32 0v-40h-48a16 16 0 0 1 0-32h48v-40a16 16 0 0 1 32 0v40h48a16 16 0 0 1 0 32z" />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">الأطباء</span>
              </a>
            </Link>
            <Link to={"/adminDashboard"}>
              <a
                href="#"
                className="flex items-center p-2 text-white bg-gray-700 rounded-lg group"
              >
                <svg
                  className="w-5 h-5 text-gray-400 group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm1 14.93a1 1 0 0 1-2 0V13a1 1 0 0 1 2 0Zm-1-5.93a1.5 1.5 0 1 1 1.5-1.5A1.5 1.5 0 0 1 12 11Z" />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">
                  الحضور و الانصراف
                </span>
              </a>
            </Link>
          </ul>
        </div>
      </aside>

      {/* المحتوى الرئيسي */}
      <div className="p-4 sm:ml-64 bg-gray-900 text-white">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-400">
            <thead className="text-xs text-gray-400 uppercase bg-gray-700">
              <tr>
                <th scope="col" className="px-6 py-3">
                  اسم الطبيب
                </th>
                <th scope="col" className="px-6 py-3">
                  نوع الفحص
                </th>
                <th scope="col" className="px-6 py-3">
                  التاريخ
                </th>
                <th scope="col" className="px-6 py-3">
                  الجدول
                </th>
                <th scope="col" className="px-6 py-3">
                  الوقت الفعلي
                </th>
                <th scope="col" className="px-6 py-3">
                  الإجراء
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="odd:bg-gray-800 even:bg-gray-700 border-b border-gray-600">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-white whitespace-nowrap"
                >
                  د. جون دو
                </th>
                <td className="px-6 py-4">دخول</td>
                <td className="px-6 py-4">2023-10-01</td>
                <td className="px-6 py-4">9:00 صباحًا - 5:00 مساءً</td>
                <td className="px-6 py-4">9:05 صباحًا</td>
                <td className="px-6 py-4">
                  <button
                    onClick={() =>
                      openModal(
                        "د. جون دو",
                        "in",
                        "2023-10-01",
                        "9:00 صباحًا - 5:00 مساءً",
                        "9:05 صباحًا"
                      )
                    }
                    className="font-medium text-blue-500 hover:underline"
                  >
                    تعديل المواعيد
                  </button>
                </td>
              </tr>
              <tr className="odd:bg-gray-800 even:bg-gray-700 border-b border-gray-600">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-white whitespace-nowrap"
                >
                  د. جين سميث
                </th>
                <td className="px-6 py-4">خروج</td>
                <td className="px-6 py-4">2023-10-01</td>
                <td className="px-6 py-4">10:00 صباحًا - 6:00 مساءً</td>
                <td className="px-6 py-4">6:10 مساءً</td>
                <td className="px-6 py-4">
                  <button
                    onClick={() =>
                      openModal(
                        "د. جين سميث",
                        "out",
                        "2023-10-01",
                        "10:00 صباحًا - 6:00 مساءً",
                        "6:10 مساءً"
                      )
                    }
                    className="font-medium text-blue-500 hover:underline"
                  >
                    تعديل المواعيد
                  </button>
                </td>
              </tr>
              <tr className="odd:bg-gray-800 even:bg-gray-700 border-b border-gray-600">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-white whitespace-nowrap"
                >
                  د. إميلي ديفيس
                </th>
                <td className="px-6 py-4">دخول</td>
                <td className="px-6 py-4">2023-10-02</td>
                <td className="px-6 py-4">8:00 صباحًا - 4:00 مساءً</td>
                <td className="px-6 py-4">8:05 صباحًا</td>
                <td className="px-6 py-4">
                  <button
                    onClick={() =>
                      openModal(
                        "د. إميلي ديفيس",
                        "in",
                        "2023-10-02",
                        "8:00 صباحًا - 4:00 مساءً",
                        "8:05 صباحًا"
                      )
                    }
                    className="font-medium text-blue-500 hover:underline"
                  >
                    تعديل المواعيد
                  </button>
                </td>
              </tr>
              <tr className="odd:bg-gray-800 even:bg-gray-700 border-b border-gray-600">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-white whitespace-nowrap"
                >
                  د. مايكل براون
                </th>
                <td className="px-6 py-4">خروج</td>
                <td className="px-6 py-4">2023-10-02</td>
                <td className="px-6 py-4">11:00 صباحًا - 7:00 مساءً</td>
                <td className="px-6 py-4">7:05 مساءً</td>
                <td className="px-6 py-4">
                  <button
                    onClick={() =>
                      openModal(
                        "د. مايكل براون",
                        "out",
                        "2023-10-02",
                        "11:00 صباحًا - 7:00 مساءً",
                        "7:05 مساءً"
                      )
                    }
                    className="font-medium text-blue-500 hover:underline"
                  >
                    تعديل المواعيد
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* النافذة المنبثقة */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="نافذة تعديل الجدول"
        className="modal"
        overlayClassName="modal-overlay"
      >
        <div className="relative bg-gray-800 rounded-lg shadow dark:bg-gray-700">
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t border-gray-600">
            <h3 className="text-xl font-semibold text-white">تعديل الجدول</h3>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-600 hover:text-white rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
              onClick={closeModal}
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
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">إغلاق النافذة</span>
            </button>
          </div>
          <div className="p-4 md:p-5">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="doctorName"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  اسم الطبيب
                </label>
                <input
                  type="text"
                  name="doctorName"
                  id="doctorName"
                  className="bg-gray-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  value={scheduleData.doctorName}
                  onChange={handleChange}
                  required
                  readOnly
                />
              </div>
              <div>
                <label
                  htmlFor="checkType"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  نوع الفحص
                </label>
                <select
                  name="checkType"
                  id="checkType"
                  className="bg-gray-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  value={scheduleData.checkType}
                  onChange={handleChange}
                  required
                >
                  <option value="in">دخول</option>
                  <option value="out">خروج</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="date"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  التاريخ
                </label>
                <input
                  type="date"
                  name="date"
                  id="date"
                  className="bg-gray-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  value={scheduleData.date}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="schedule"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  الجدول
                </label>
                <input
                  type="text"
                  name="schedule"
                  id="schedule"
                  className="bg-gray-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  value={scheduleData.schedule}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="actualTime"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  الوقت الفعلي
                </label>
                <input
                  type="text"
                  name="actualTime"
                  id="actualTime"
                  className="bg-gray-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  value={scheduleData.actualTime}
                  onChange={handleChange}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                حفظ التغييرات
              </button>
            </form>
          </div>
        </div>
      </Modal>

      <Outlet />

      {/* إضافة أنماط النافذة المنبثقة */}
      <style jsx global>{`
        body {
          background-color: #111827; /* Tailwind's bg-gray-900 */
        }
        .modal-overlay {
          background-color: rgba(0, 0, 0, 0.75);
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .modal {
          background: #1f2937;
          padding: 20px;
          border-radius: 8px;
          max-width: 500px;
          width: 100%;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        }
      `}</style>
    </div>
    
  );
};

export default AdminDashboard;
