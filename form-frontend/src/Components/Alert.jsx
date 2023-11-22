import React from "react";

export const  Alert = ({ title,type, message }) => {
    return (
        <div
        className={type === 'success' ? "mb-4 rounded-lg bg-green-100 px-6 py-5 text-base text-green-700 absolute top-20 right-10": "mb-4 rounded-lg bg-red-100 px-6 py-5 text-base text-red-700 absolute top-20 right-10"}
        role="alert">
        <h4 class="mb-2 text-2xl font-medium leading-tight">{title}</h4>
        <p class="mb-4">
         {message}
        </p>
       
      </div>
    );
  };
  