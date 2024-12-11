import "./App.css";
import { useState } from "react";

export default function App() {
  const [isReversed, setIsReversed] = useState(false);
  const toggleOrder = () => setIsReversed(!isReversed);

  return (
    <div className="space-y-6">
      <div
        className={`flex items-center ${
          !isReversed ? "flex-row-reverse" : ""
        } w-[410px] space-x-4 space-x-reverse p-6 bg-white rounded-lg shadow`}
      >
        <div className="flex items-center space-x-2 mr-6">
          <img src="menu12.png" alt="Menu" className="w-8 h-8" />
        </div>

        <div className={`flex-1 ${isReversed ? "text-right" : ""}`}>
          <div
            className={`flex items-center space-x-1 ${
              isReversed ? "justify-end -mr-2" : "-ml-2"
            }`}
          >
            <span className="font-bold text-xl">Anna Effective</span>
            <img src="verify12.png" alt="Verified" className="w-5 h-5 mt-1" />
          </div>
          <p
            className={`text-base -mb-1 ${
              isReversed ? "text-right -mr-2" : "-ml-2"
            }`}
          >
            Double your income with me!
          </p>
          <div
            className={`"flex items-center" ${
              !isReversed ? "flex-row-reverse" : ""
            }`}
          >
            <p
              className={`text-xs ${
                isReversed ? "text-right -mr-4" : "-ml-4"
              } inline-block
              font-bold
              bg-gradient-to-r from-[#678ace] to-[#7cd7da] bg-clip-text text-transparent`}
            >
              4881
            </p>
          </div>
        </div>

        <div className={`relative ${isReversed ? "ml-4" : ""}`}>
          <img
            src="Ellipse109.png"
            alt="User"
            className="w-16 h-16 rounded-full"
          />
          <div
            className={`absolute bottom-0 ${
              isReversed ? "left-0" : "right-0"
            } border-2 border-white rounded-full bg-white`}
          >
            <img src="Component32.png" alt="Star" className="w-6 h-6" />
          </div>
        </div>
      </div>
      <button
        onClick={toggleOrder}
        className="m-5 px-6 py-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600"
      >
        Zmień kolejność
      </button>
    </div>
  );
}
