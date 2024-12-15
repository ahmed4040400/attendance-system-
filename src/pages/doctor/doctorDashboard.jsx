import React, { useState } from "react";
import Modal from "react-modal";
import "./doctorDashboard.css";

const DoctorDashboard = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const openModal = (content) => {
    setModalContent(content);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setModalContent("");
  };

  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-[#111418] dark group/design-root overflow-x-hidden"
      style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col">
        {/* قسم الرأس */}
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#293038] px-10 py-3">
          <div className="flex items-center gap-4 text-white">
            <div className="size-4">
              <svg
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M39.475 21.6262C40.358 21.4363 40.6863 21.5589 40.7581 21.5934C40.7876 21.655 40.8547 21.857 40.8082 22.3336C40.7408 23.0255 40.4502 24.0046 39.8572 25.2301C38.6799 27.6631 36.5085 30.6631 33.5858 33.5858C30.6631 36.5085 27.6632 38.6799 25.2301 39.8572C24.0046 40.4502 23.0255 40.7407 22.3336 40.8082C21.8571 40.8547 21.6551 40.7875 21.5934 40.7581C21.5589 40.6863 21.4363 40.358 21.6262 39.475C21.8562 38.4054 22.4689 36.9657 23.5038 35.2817C24.7575 33.2417 26.5497 30.9744 28.7621 28.762C30.9744 26.5497 33.2417 24.7574 35.2817 23.5037C36.9657 22.4689 38.4054 21.8562 39.475 21.6262ZM4.41189 29.2403L18.7597 43.5881C19.8813 44.7097 21.4027 44.9179 22.7217 44.7893C24.0585 44.659 25.5148 44.1631 26.9723 43.4579C29.9052 42.0387 33.2618 39.5667 36.4142 36.4142C39.5667 33.2618 42.0387 29.9052 43.4579 26.9723C44.1631 25.5148 44.659 24.0585 44.7893 22.7217C44.9179 21.4027 44.7097 19.8813 43.5881 18.7597L29.2403 4.41187C27.8527 3.02428 25.8765 3.02573 24.2861 3.36776C22.6081 3.72863 20.7334 4.58419 18.8396 5.74801C16.4978 7.18716 13.9881 9.18353 11.5858 11.5858C9.18354 13.988 7.18717 16.4978 5.74802 18.8396C4.58421 20.7334 3.72865 22.6081 3.36778 24.2861C3.02574 25.8765 3.02429 27.8527 4.41189 29.2403Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">
              ميدي كير
            </h2>
          </div>
          <div className="flex flex-1 justify-end gap-8">
            <div className="flex gap-2">
              <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 bg-[#293038] text-white gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5">
                <div
                  className="text-white"
                  data-icon="MagnifyingGlass"
                  data-size="20px"
                  data-weight="regular"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                  </svg>
                </div>
              </button>
              <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 bg-[#293038] text-white gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5">
                <div
                  className="text-white"
                  data-icon="Bell"
                  data-size="20px"
                  data-weight="regular"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z"></path>
                  </svg>
                </div>
              </button>
            </div>
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
              style={{
                backgroundImage:
                  'url("https://cdn.usegalileo.ai/sdxl10/b7634790-fd05-49a6-ba18-a3d56b3b9e97.png")',
              }}
            ></div>
          </div>
        </header>

        {/* قسم المحتوى الرئيسي */}
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="@container">
              <div className="@[480px]:p-4">
                <div
                  className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-start justify-end px-4 pb-10 @[480px]:px-10"
                  style={{
                    backgroundImage:
                      'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://cdn.usegalileo.ai/sdxl10/b4461797-7ddc-49af-8bda-2d975bd1e7f6.png")',
                  }}
                >
                  <div className="flex flex-col gap-2 text-left">
                    <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                      مساء الخير، د. سارة
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              التسجيل
            </h2>
            <div className="flex flex-wrap gap-4 p-4">
              <button
                className="flex min-w-[158px] flex-1 items-center justify-center rounded-xl p-6 hover:bg-[#2884e6] duration-200 text-white text-base font-bold leading-normal"
                onClick={() => openModal("تسجيل حضور")}
              >
                تسجيل حضور
              </button>
              <button
                className="flex min-w-[158px] flex-1 items-center justify-center rounded-xl p-6 hover:bg-[#fa6238] duration-200 text-white text-base font-bold leading-normal"
                onClick={() => openModal("تسجيل انصراف")}
              >
                تسجيل انصراف
              </button>
            </div>
            <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              سجلات الحضور الأخيرة
            </h2>
            <div className="px-4 py-3 @container">
              <div className="flex overflow-hidden rounded-xl border border-[#3c4753] bg-[#111418]">
                <table className="flex-1">
                  <thead>
                    <tr className="bg-[#1c2126]">
                      <th className="px-4 py-3 text-left text-white w-[200px] text-sm font-medium leading-normal">
                        اسم الطبيب
                      </th>
                      <th className="px-4 py-3 text-left text-white w-[200px] text-sm font-medium leading-normal">
                        نوع السجيل
                      </th>
                      <th className="px-4 py-3 text-left text-white w-[200px] text-sm font-medium leading-normal">
                        التاريخ
                      </th>
                      <th className="px-4 py-3 text-left text-white w-[200px] text-sm font-medium leading-normal">
                        الوقت
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-t-[#3c4753]">
                      <td className="h-[72px] px-4 py-2 w-[200px] text-white text-sm font-normal leading-normal">
                        د. سارة
                      </td>
                      <td className="h-[72px] px-4 py-2 w-[200px] text-[#9daab8] text-sm font-normal leading-normal">
                        دخول
                      </td>
                      <td className="h-[72px] px-4 py-2 w-[200px] text-[#9daab8] text-sm font-normal leading-normal">
                        01/01/2023
                      </td>
                      <td className="h-[72px] px-4 py-2 w-[200px] text-[#9daab8] text-sm font-normal leading-normal">
                        10:00 صباحًا
                      </td>
                    </tr>
                    <tr className="border-t border-t-[#3c4753]">
                      <td className="h-[72px] px-4 py-2 w-[200px] text-white text-sm font-normal leading-normal">
                        د. سارة
                      </td>
                      <td className="h-[72px] px-4 py-2 w-[200px] text-[#9daab8] text-sm font-normal leading-normal">
                        خروج
                      </td>
                      <td className="h-[72px] px-4 py-2 w-[200px] text-[#9daab8] text-sm font-normal leading-normal">
                        01/01/2023
                      </td>
                      <td className="h-[72px] px-4 py-2 w-[200px] text-[#9daab8] text-sm font-normal leading-normal">
                        12:00 مساءً
                      </td>
                    </tr>
                    <tr className="border-t border-t-[#3c4753]">
                      <td className="h-[72px] px-4 py-2 w-[200px] text-white text-sm font-normal leading-normal">
                        د. سارة
                      </td>
                      <td className="h-[72px] px-4 py-2 w-[200px] text-[#9daab8] text-sm font-normal leading-normal">
                        دخول
                      </td>
                      <td className="h-[72px] px-4 py-2 w-[200px] text-[#9daab8] text-sm font-normal leading-normal">
                        01/01/2023
                      </td>
                      <td className="h-[72px] px-4 py-2 w-[200px] text-[#9daab8] text-sm font-normal leading-normal">
                        01:00 مساءً
                      </td>
                    </tr>
                    <tr className="border-t border-t-[#3c4753]">
                      <td className="h-[72px] px-4 py-2 w-[200px] text-white text-sm font-normal leading-normal">
                        د. سارة
                      </td>
                      <td className="h-[72px] px-4 py-2 w-[200px] text-[#9daab8] text-sm font-normal leading-normal">
                        خروج
                      </td>
                      <td className="h-[72px] px-4 py-2 w-[200px] text-[#9daab8] text-sm font-normal leading-normal">
                        01/01/2023
                      </td>
                      <td className="h-[72px] px-4 py-2 w-[200px] text-[#9daab8] text-sm font-normal leading-normal">
                        06:00 مساءً
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Attendance Modal"
          className="modal"
          overlayClassName="modal-overlay"
        >
          <div class="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]">
            <div class="w-full max-w-lg bg-white shadow-lg rounded-lg p-6 relative">
              <button onClick={closeModal}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-3.5 cursor-pointer shrink-0 fill-gray-400 hover:fill-red-500 float-right"
                  viewBox="0 0 320.591 320.591"
                >
                  <path
                    d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                    data-original="#000000"
                  ></path>
                  <path
                    d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                    data-original="#000000"
                  ></path>
                </svg>
              </button>
              <div class="my-8 text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-14 shrink-0 fill-green-500 inline"
                  viewBox="0 0 512 512"
                >
                  <path
                    d="M383.841 171.838c-7.881-8.31-21.02-8.676-29.343-.775L221.987 296.732l-63.204-64.893c-8.005-8.213-21.13-8.393-29.35-.387-8.213 7.998-8.386 21.137-.388 29.35l77.492 79.561a20.687 20.687 0 0 0 14.869 6.275 20.744 20.744 0 0 0 14.288-5.694l147.373-139.762c8.316-7.888 8.668-21.027.774-29.344z"
                    data-original="#000000"
                  />
                  <path
                    d="M256 0C114.84 0 0 114.84 0 256s114.84 256 256 256 256-114.84 256-256S397.16 0 256 0zm0 470.487c-118.265 0-214.487-96.214-214.487-214.487 0-118.265 96.221-214.487 214.487-214.487 118.272 0 214.487 96.221 214.487 214.487 0 118.272-96.215 214.487-214.487 214.487z"
                    data-original="#000000"
                  />
                </svg>
                <h4 class="text-xl text-gray-800 font-semibold mt-4">
                  تم التسجبل
                </h4>
                <p class="text-sm text-gray-500 leading-relaxed mt-4">
                  من يصل مبكرًا يجد الفرص بانتظاره، ومن يتأخر يفوّت الكثير.
                  الالتزام بالمواعيد ليس مجرد عادة، بل انعكاس لاحترامك للوقت
                  وللآخرين.
                </p>
              </div>

              <button
                onClick={closeModal}
                type="button"
                class="px-5 py-2.5 w-full rounded-lg text-white text-sm border-none outline-none bg-gray-800 hover:bg-gray-700"
              >
                Got it
              </button>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default DoctorDashboard;
