

import {
  Search,
  Bell,
  Settings,
  Download,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";
import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-[#f0f0f0]">
      {/* Sidebar */}
      <div className="w-[260px] bg-[#080034] text-white flex flex-col">
        <div className="p-6 flex items-center gap-2">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <span className="text-[#080034] font-bold">D</span>
          </div>
          <span className="font-bold text-xl">DBMan</span>
        </div>

        <div className="px-6 py-4 text-sm text-gray-400">MENU</div>

        <nav className="flex-1">
          <Link
            href="#"
            className="flex items-center gap-3 px-6 py-3 text-white bg-[#09003e]/40"
          >
            <div className="w-6 h-6 flex items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="3"
                  y="3"
                  width="7"
                  height="7"
                  rx="1"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <rect
                  x="14"
                  y="3"
                  width="7"
                  height="7"
                  rx="1"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <rect
                  x="3"
                  y="14"
                  width="7"
                  height="7"
                  rx="1"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <rect
                  x="14"
                  y="14"
                  width="7"
                  height="7"
                  rx="1"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </div>
            <span>Dashboard</span>
          </Link>

          <Link
            href="#"
            className="flex items-center gap-3 px-6 py-3 text-gray-400 hover:bg-[#09003e]/20"
          >
            <div className="w-6 h-6 flex items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M20 19C20 16.7909 16.4183 15 12 15C7.58172 15 4 16.7909 4 19V20H20V19Z"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </div>
            <span>Trainer</span>
          </Link>

          <Link
            href="#"
            className="flex items-center gap-3 px-6 py-3 text-gray-400 hover:bg-[#09003e]/20"
          >
            <div className="w-6 h-6 flex items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17 20H22V18C22 16.3431 20.6569 15 19 15C18.0444 15 17.1931 15.4468 16.6438 16.1429M17 20H7M17 20V18C17 17.3438 16.8736 16.717 16.6438 16.1429M7 20H2V18C2 16.3431 3.34315 15 5 15C5.95561 15 6.80686 15.4468 7.35625 16.1429M7 20V18C7 17.3438 7.12642 16.717 7.35625 16.1429M7.35625 16.1429C8.0935 14.301 9.89482 13 12 13C14.1052 13 15.9065 14.301 16.6438 16.1429M15 7C15 8.65685 13.6569 10 12 10C10.3431 10 9 8.65685 9 7C9 5.34315 10.3431 4 12 4C13.6569 4 15 5.34315 15 7ZM21 10C21 11.1046 20.1046 12 19 12C17.8954 12 17 11.1046 17 10C17 8.89543 17.8954 8 19 8C20.1046 8 21 8.89543 21 10ZM7 10C7 11.1046 6.10457 12 5 12C3.89543 12 3 11.1046 3 10C3 8.89543 3.89543 8 5 8C6.10457 8 7 8.89543 7 10Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span>Trainee</span>
          </Link>

          <Link
            href="#"
            className="flex items-center gap-3 px-6 py-3 text-gray-400 hover:bg-[#09003e]/20"
          >
            <div className="w-6 h-6 flex items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 19.5V4.5C4 3.67157 4.67157 3 5.5 3H18.5C19.3284 3 20 3.67157 20 4.5V19.5C20 20.3284 19.3284 21 18.5 21H5.5C4.67157 21 4 20.3284 4 19.5Z"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M8 7H16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M8 12H16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M8 17H12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <span>Courses</span>
          </Link>

          <Link
            href="#"
            className="flex items-center gap-3 px-6 py-3 text-gray-400 hover:bg-[#09003e]/20"
          >
            <div className="w-6 h-6 flex items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 5H6C4.89543 5 4 5.89543 4 7V19C4 20.1046 4.89543 21 6 21H18C19.1046 21 20 20.1046 20 19V7C20 5.89543 19.1046 5 18 5H16M8 5V3C8 2.44772 8.44772 2 9 2H15C15.5523 2 16 2.44772 16 3V5M8 5H16M12 12H16M12 16H16M8 12H8.01M8 16H8.01"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <span>Reports</span>
          </Link>
        </nav>

        <div className="mt-auto">
          <Link
            href="#"
            className="flex items-center gap-3 px-6 py-3 text-gray-400 hover:bg-[#09003e]/20"
          >
            <div className="w-6 h-6 flex items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17 16L21 12M21 12L17 8M21 12H9M9 21H7C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3H9"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span>Log out</span>
          </Link>

          <div className="m-6 p-4 bg-[#09003e] rounded-lg flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#5c4ef9] flex items-center justify-center text-white font-bold">
              TO
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-medium text-white">Tega Obi</div>
              <div className="text-xs text-gray-400 truncate">
                tegaoghene@gmail.com
              </div>
            </div>
            <ArrowRight className="w-5 h-5 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 overflow-auto">
        <header className="bg-white p-4 flex items-center justify-between">
          <h1 className="text-2xl font-semibold">
            Good Morning, Tega <span className="text-xl">👋</span>
          </h1>

          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Type keywords to search"
                className="pl-10 pr-4 py-2 border rounded-lg w-[320px] focus:outline-none focus:ring-2 focus:ring-[#5c4ef9]/20"
              />
            </div>

            <button className="w-10 h-10 flex items-center justify-center rounded-lg border">
              <Bell className="w-5 h-5 text-[#080034]" />
            </button>

            <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#080034] text-white">
              <Settings className="w-5 h-5" />
            </button>
          </div>
        </header>

        <div className="p-6">
          {/* Stats cards */}
          <div className="grid grid-cols-4 gap-4 mb-6">
            <div className="bg-[#d8e2fc] rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium text-[#080034]">Active Training</h3>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 21H3V3"
                    stroke="#080034"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21 7L13 15L9 11L3 17"
                    stroke="#080034"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="flex items-end justify-between">
                <h2 className="text-4xl font-bold text-[#080034]">14,000</h2>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 17L17 7M17 7H7M17 7V17"
                    stroke="#080034"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="flex items-center justify-between mt-4">
                <span className="text-sm text-[#080034]">Since last week</span>
                <div className="bg-white rounded-full px-2 py-1 text-xs font-medium text-[#080034] flex items-center">
                  <ArrowUpRight className="w-3 h-3 mr-1" />
                  13.4%
                </div>
              </div>
            </div>

            <div className="bg-[#fcd8d8] rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium text-[#080034]">Past Training</h3>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 21H3V3"
                    stroke="#080034"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21 7L13 15L9 11L3 17"
                    stroke="#080034"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="flex items-end justify-between">
                <h2 className="text-4xl font-bold text-[#080034]">36,000</h2>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 17L17 7M17 7H7M17 7V17"
                    stroke="#080034"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="flex items-center justify-between mt-4">
                <span className="text-sm text-[#080034]">Since last week</span>
                <div className="bg-white rounded-full px-2 py-1 text-xs font-medium text-[#080034] flex items-center">
                  <ArrowUpRight className="w-3 h-3 mr-1" />
                  20.5%
                </div>
              </div>
            </div>

            <div className="bg-[#d8e2fc] rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium text-[#080034]">Total Trainers</h3>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 21H3V3"
                    stroke="#080034"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21 7L13 15L9 11L3 17"
                    stroke="#080034"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="flex items-end justify-between">
                <h2 className="text-4xl font-bold text-[#080034]">500</h2>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 17L17 7M17 7H7M17 7V17"
                    stroke="#080034"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="flex items-center justify-between mt-4">
                <div className="flex -space-x-2">
                  <div className="w-6 h-6 rounded-full bg-[#5c4ef9] border-2 border-white"></div>
                  <div className="w-6 h-6 rounded-full bg-[#a39bff] border-2 border-white"></div>
                </div>
                <div className="text-xs text-[#080034]">
                  <span className="font-medium">Verified</span> |{" "}
                  <span className="text-gray-500">Non Verified</span>
                </div>
                <div className="flex -space-x-2">
                  <div className="w-6 h-6 rounded-full bg-[#5c4ef9] border-2 border-white"></div>
                  <div className="w-6 h-6 rounded-full bg-[#a39bff] border-2 border-white"></div>
                </div>
              </div>
            </div>

            <div className="bg-[#fcd8d8] rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium text-[#080034]">Total Trainees</h3>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 21H3V3"
                    stroke="#080034"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21 7L13 15L9 11L3 17"
                    stroke="#080034"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="flex items-end justify-between">
                <h2 className="text-4xl font-bold text-[#080034]">2,000</h2>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 17L17 7M17 7H7M17 7V17"
                    stroke="#080034"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="flex items-center justify-between mt-4">
                <div className="flex -space-x-2">
                  <div className="w-6 h-6 rounded-full bg-[#5c4ef9] border-2 border-white"></div>
                  <div className="w-6 h-6 rounded-full bg-[#a39bff] border-2 border-white"></div>
                </div>
                <div className="text-xs text-[#080034]">
                  <span className="font-medium">Verified</span> |{" "}
                  <span className="text-gray-500">Non Verified</span>
                </div>
                <div className="flex -space-x-2">
                  <div className="w-6 h-6 rounded-full bg-[#5c4ef9] border-2 border-white"></div>
                  <div className="w-6 h-6 rounded-full bg-[#a39bff] border-2 border-white"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Charts */}
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div className="bg-white rounded-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold">Courses Registered</h3>
                <div className="relative">
                  <button className="flex items-center gap-2 text-sm font-medium">
                    By Status
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 9L12 15L18 9"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="flex justify-center mb-6">
                <div className="relative w-48 h-48">
                  {/* Semi-circular gauge */}
                  <svg viewBox="0 0 100 50" className="w-full">
                    <path
                      d="M 10 50 A 40 40 0 0 1 90 50"
                      fill="none"
                      stroke="#e8eef2"
                      strokeWidth="20"
                    />
                    <path
                      d="M 10 50 A 40 40 0 0 1 90 50"
                      fill="none"
                      stroke="#fcd8d8"
                      strokeWidth="20"
                      strokeDasharray="126"
                      strokeDashoffset="94.5"
                    />
                    <path
                      d="M 10 50 A 40 40 0 0 1 90 50"
                      fill="none"
                      stroke="#d8e2fc"
                      strokeWidth="20"
                      strokeDasharray="126"
                      strokeDashoffset="63"
                    />
                    <path
                      d="M 10 50 A 40 40 0 0 1 90 50"
                      fill="none"
                      stroke="#080034"
                      strokeWidth="20"
                      strokeDasharray="126"
                      strokeDashoffset="31.5"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-sm text-gray-500">Content</span>
                    <span className="text-5xl font-bold">140</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm">Science</span>
                    <span className="text-sm font-medium">55%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#fcd8d8] rounded-full"
                      style={{ width: "55%" }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm">Business</span>
                    <span className="text-sm font-medium">30%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#080034] rounded-full"
                      style={{ width: "30%" }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm">Art</span>
                    <span className="text-sm font-medium">15%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#d8e2fc] rounded-full"
                      style={{ width: "15%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-6">
                Training Session Overview
              </h3>

              <div className="flex justify-center mb-6">
                <div className="relative w-48 h-48">
                  {/* Pie chart */}
                  <svg viewBox="0 0 100 100" className="w-full">
                    <circle cx="50" cy="50" r="40" fill="#fcd8d8" />
                    <path
                      d="M 50 50 L 50 10 A 40 40 0 0 1 84.6 65.4 Z"
                      fill="#080034"
                    />
                    <path
                      d="M 50 50 L 84.6 65.4 A 40 40 0 0 1 50 90 Z"
                      fill="#d8e2fc"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="flex flex-col items-center">
                      <span className="text-3xl font-bold">70%</span>
                      <span className="text-lg font-medium">40%</span>
                      <span className="text-sm">15%</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#fcd8d8]"></div>
                  <span className="text-sm">Session one</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#d8e2fc]"></div>
                  <span className="text-sm">Session two</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#080034]"></div>
                  <span className="text-sm">Session three</span>
                </div>
              </div>
            </div>
          </div>

          {/* Performance breakdown */}
          <div className="bg-white rounded-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold">Performance Breakdown</h3>

              <div className="flex items-center gap-2">
                <div className="flex">
                  <button className="px-3 py-1 text-sm bg-gray-100 rounded-l-md">
                    4 weeks
                  </button>
                  <button className="px-3 py-1 text-sm bg-gray-100">
                    3 weeks
                  </button>
                  <button className="px-3 py-1 text-sm bg-gray-100">
                    2 weeks
                  </button>
                  <button className="px-3 py-1 text-sm bg-gray-100 rounded-r-md">
                    5 Days
                  </button>
                </div>

                <button className="w-8 h-8 flex items-center justify-center border rounded-md">
                  <Download className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="h-64 relative">
              {/* Bar chart */}
              <div className="absolute inset-0 flex items-end justify-between px-10">
                <div className="flex flex-col items-center gap-2 w-16">
                  <div className="w-full bg-[#6f5fc9] h-32 rounded-t-md"></div>
                  <span className="text-xs">Attendance</span>
                </div>

                <div className="flex flex-col items-center gap-2 w-16">
                  <div className="w-full bg-gradient-to-b from-[#6f5fc9] to-[#9383ee] h-48 rounded-t-md"></div>
                  <span className="text-xs">Engagement</span>
                </div>

                <div className="flex flex-col items-center gap-2 w-16">
                  <div className="w-full bg-[#6f5fc9] h-24 rounded-t-md"></div>
                  <span className="text-xs">Test Scores</span>
                </div>

                <div className="flex flex-col items-center gap-2 w-16">
                  <div className="w-full bg-gradient-to-b from-[#6f5fc9] to-[#9383ee] h-56 rounded-t-md"></div>
                  <span className="text-xs">Reports</span>
                </div>

                <div className="flex flex-col items-center gap-2 w-16">
                  <div className="w-full bg-[#080034] h-16 rounded-t-md"></div>
                  <span className="text-xs">Assignments</span>
                </div>
              </div>

              {/* Horizontal grid lines */}
              <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                <div className="border-b border-dashed border-gray-200 h-1/5"></div>
                <div className="border-b border-dashed border-gray-200 h-1/5"></div>
                <div className="border-b border-dashed border-gray-200 h-1/5"></div>
                <div className="border-b border-dashed border-gray-200 h-1/5"></div>
                <div className="border-b border-dashed border-gray-200 h-1/5"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
