import React from "react";

function Footer() {
  return (
    <footer className="bg-blue-900 text-gray-200 border-t border-blue-800 mt-10">
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between">
        {/* Left side: Logo / Title */}
        <h2 className="text-lg font-semibold">CivicEye Portal</h2>

        {/* Middle: Extra Links (you can add your own later) */}
        <div className="flex gap-6 mt-4 md:mt-0">
          {/* Add footer links here */}
        </div>

        {/* Right side: Copyright */}
        <p className="text-sm mt-4 md:mt-0">&copy; {new Date().getFullYear()} CivicEye. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
