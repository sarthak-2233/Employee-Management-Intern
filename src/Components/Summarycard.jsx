import React from 'react';

function Summarycard({ icon, text, number, color }) {
  return (
    <div className="h-[200px] w-[80%] bg-white hover:bg-green-200 shadow-md rounded-lg hover:cursor-pointer"> 
      <div className="flex justify-center items-center mt-4">
        <div className={`w-14 h-14 flex justify-center items-center rounded-full ${color}`}>
          {icon}
        </div>
      </div>

      <div className="pl-4 py-1 text-center mt-4">
        <p className="text-lg font-semibold">
          {text}
        </p>
        <p className="text-xl font-bold mt-2">
          {number}
        </p>
      </div>
    </div>
  );
}

export default Summarycard;
