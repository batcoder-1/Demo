import React from "react";
import { Menu } from "lucide-react";

function Header() {
  return (
    <header
      className="text-white shadow-md border-b"
      style={{
        background: "linear-gradient(to right, #3D52A0, #7091E6)",
        borderColor: "#ADBBDA",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo / Title */}
        <div className="flex items-center gap-3">
          <div
            className="bg-white text-center font-bold rounded-full h-10 w-10 flex items-center justify-center shadow-md"
            style={{ color: "#3D52A0" }}
          >
            CE
          </div>
          <h1 className="text-xl sm:text-2xl font-extrabold tracking-tight hover:opacity-90 transition duration-200">
            CivicEye Portal
          </h1>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6 font-medium">
          <a
            href="#home"
            className="transition-colors duration-200"
            style={{ color: "#EDE8F5" }}
          >
            Home
          </a>
          <a
            href="#features"
            className="transition-colors duration-200"
            style={{ color: "#EDE8F5" }}
          >
            Features
          </a>
          <a
            href="#about"
            className="transition-colors duration-200"
            style={{ color: "#EDE8F5" }}
          >
            About
          </a>
          <button
            className="px-4 py-2 rounded-lg font-semibold shadow-md transition duration-200"
            style={{
              backgroundColor: "#EDE8F5",
              color: "#3D52A0",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor = "#ADBBDA")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor = "#EDE8F5")
            }
          >
            Login
          </button>
        </nav>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden p-2 rounded-lg transition duration-200"
          style={{ backgroundColor: "#3D52A0" }}
        >
          <Menu size={24} />
        </button>
      </div>
    </header>
  );
}

export default Header;
