import React from "react";

export const Input = ({
  id,
  type,
  required,
  placeholder,
  name,
  options,
  onChange,
}) => {
  if (type === "SELECT") {
    return (
      <div>
        <select
          id={id}
          name={name}
          onChange={onChange}
          className="mt-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          {options.map(({ text, value }, index) => (
            <option key={index} value={value}>
              {text}
            </option>
          ))}
        </select>
      </div>
    );
  }
  if (type === "TEXT") {
    return (
      <div>
        <input
          type={type}
          name={name}
          id={id}
          className="mt-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder={placeholder}
          required={required}
          onChange={onChange}
        />
      </div>
    );
  }
  if (type === "RADIO") {
    return (
      <fieldset className="mt-4">
        <h6>{placeholder}</h6>

        {options.map(({ text, value }, index) => (
          <div className="flex items-center mb-4">
            <input
              id="country-option-1"
              type="radio"
              name={name}
              value={value}
              onChange={onChange}
              className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor={name}
              className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              {text}
            </label>
          </div>
        ))}
      </fieldset>
    );
  }
};
