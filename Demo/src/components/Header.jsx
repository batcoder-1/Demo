import React from "react";

function Header() {
  return (
    <header className="bg-blue-800 text-white shadow-md border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Left side (Logo / Title) */}
        <h1 className="text-2xl font-bold tracking-wide">CivicEye Portal</h1>

        {/* Right side (Navigation / Options) */}
        <div className="flex items-center gap-6">
          {/* Add your nav options / buttons here */}
        </div>
      </div>
    </header>
  );
}

export default Header;
