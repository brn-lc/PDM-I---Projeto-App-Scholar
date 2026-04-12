import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  [key: string]: any;
}

export function Input({ label, error, className = '', ...props }: InputProps) {
  return (
    <div className="flex flex-col gap-1 w-full mb-4">
      <label className="text-sm font-medium text-gray-700 ml-1">{label}</label>
      <input
        className={`w-full px-4 py-3 rounded-xl border bg-white transition-all outline-none
          ${error ? 'border-red-500 focus:ring-2 focus:ring-red-200' : 'border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-50/50'}
          text-gray-800 placeholder:text-gray-400`}
        {...props}
      />
      {error && <span className="text-xs text-red-500 ml-1 mt-0.5 font-medium">{error}</span>}
    </div>
  );
}
