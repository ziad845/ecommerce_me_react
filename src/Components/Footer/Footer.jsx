import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto flex flex-col items-center md:flex-row md:justify-between">
        {/* النص */}
        <p className="text-center text-sm md:text-lg">
          © 2024 All Rights Reserved | Built by{" "}
          <span className="text-green-500 font-semibold">Ziad Faheem</span>
        </p>

        
        <div className="flex items-center gap-6 mt-4 md:mt-0 mx-4">
          <a
            href="https://www.facebook.com/ziad20022"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-400 transition-colors duration-300 text-xl"
          >
            <i className="fa-brands fa-facebook-f"></i>
          </a>
          <a
            href="https://github.com/ziad845"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-gray-400 transition-colors duration-300 text-xl"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.instagram.com/elz_iko/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 hover:text-pink-400 transition-colors duration-300 text-xl"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
