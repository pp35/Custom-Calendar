import React from "react";
import Calendar from "./Component/Calender";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-200 flex items-center justify-center p-6">
      <div className="bg-white rounded-lg shadow-2xl p-6 w-full max-w-lg">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text text-center mb-6">
          Custom Calendar
        </h1>
        <Calendar />
      </div>
    </div>
  );
}

export default App;
