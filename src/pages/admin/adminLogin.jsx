import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const link = document.querySelector('link[rel="stylesheet"][as="style"]');
    if (link) {
      link.onload = () => {
        link.rel = "stylesheet";
      };
    }
  }, []);

  return (
    <>
      <head>
        <title>نظام الرعاية الصحية</title>
        <link rel="icon" type="image/x-icon" href="data:image/x-icon;base64," />
        <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
      </head>
      <body>
        <div
          className="relative flex size-full min-h-screen flex-col bg-[#111418] dark group/design-root overflow-x-hidden items-center justify-center"
          style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}
        >
          <div className="layout-container flex h-full grow flex-col items-center justify-center">
            <header className="flex items-center justify-center whitespace-nowrap border-b border-solid border-b-[#293038] px-10 py-3 w-full">
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
                  نظام الرعاية الصحية
                </h2>
              </div>
            </header>
            <div className="px-40 flex flex-1 justify-center py-5 items-center">
              <div className="layout-content-container flex flex-col w-[512px] max-w-[512px] py-5 max-w-[960px] flex-1 items-center">
                <h3 className="text-white tracking-light text-2xl font-bold leading-tight px-4 text-center pb-2 pt-5">
                  تسجيل الدخول
                </h3>
                <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                  <label className="flex flex-col min-w-40 flex-1">
                    <p className="text-white text-base font-medium leading-normal pb-2">
                      اسم المستخدم
                    </p>
                    <input
                      placeholder="أدخل اسم المستخدم"
                      className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border border-[#3c4753] bg-[#1c2126] focus:border-[#3c4753] h-14 placeholder:text-[#9daab8] p-[15px] text-base font-normal leading-normal"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </label>
                </div>
                <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                  <label className="flex flex-col min-w-40 flex-1">
                    <p className="text-white text-base font-medium leading-normal pb-2">
                      كلمة المرور
                    </p>
                    <input
                      type="password"
                      placeholder="أدخل كلمة المرور"
                      className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border border-[#3c4753] bg-[#1c2126] focus:border-[#3c4753] h-14 placeholder:text-[#9daab8] p-[15px] text-base font-normal leading-normal"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </label>
                </div>
                <div className="px-4">
                  <label className="flex gap-x-3 py-3 flex-row">
                    <input
                      type="checkbox"
                      className="h-5 w-5 rounded border-[#3c4753] border-2 bg-transparent text-[#2884e6] checked:bg-[#2884e6] checked:border-[#2884e6] checked:bg-[image:--checkbox-tick-svg] focus:ring-0 focus:ring-offset-0 focus:border-[#3c4753] focus:outline-none"
                    />
                    <p className="text-white text-base font-normal leading-normal">
                      تذكرني
                    </p>
                  </label>
                </div>
                <div className="flex px-4 py-3 justify-center">
                  <Link
                    to={"/adminDashboard"}
                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 flex-1 bg-[#2884e6] text-white text-sm font-bold leading-normal tracking-[0.015em]"
                  >
                    <span className="truncate">تسجيل الدخول</span>
                  </Link>
                </div>
                <p className="text-[#9daab8] text-sm font-normal leading-normal pb-3 pt-1 px-4 text-center underline">
                  هل نسيت كلمة المرور؟
                </p>
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
};

export default AdminLogin;