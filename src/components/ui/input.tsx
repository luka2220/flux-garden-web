import { useState } from 'react';

export default function InputForm() {
  const [name, setName] = useState('');
  const [link, setLink] = useState('');

  return (
    <form className="mb-6">
      <fieldset className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-3">
        <legend className="sr-only">Add a new feed</legend>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <label htmlFor="feed-name" className="sr-only">
            Feed name
          </label>
          <div className="flex items-center bg-flux-dark-blue border border-flux-dark-blue rounded-2xl px-4 py-3 transition focus-within:ring-2 focus-within:ring-flux-light-blue">
            <svg
              className="w-5 h-5 text-gray-300 flex-shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 7a4 4 0 0 1 8 0v1a4 4 0 1 1-8 0V7zM12 14a6 6 0 0 1-12 0"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <input
              id="feed-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Feed name"
              className="ml-3 w-full bg-transparent text-lg text-gray-100 placeholder-gray-400 outline-none min-w-0"
              aria-label="Feed name"
            />
            {name && (
              <button
                type="button"
                onClick={() => setName('')}
                className="ml-3 text-gray-400 hover:text-gray-200 transition rounded-full p-1"
                aria-label="Clear feed name"
              >
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 6L6 18M6 6l12 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            )}
          </div>

          <label htmlFor="feed-link" className="sr-only">
            Feed link
          </label>
          <div className="flex items-center bg-flux-dark-blue border border-flux-dark-blue rounded-2xl px-4 py-3 transition focus-within:ring-2 focus-within:ring-flux-light-blue">
            <svg
              className="w-5 h-5 text-gray-300 flex-shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.59 13.41a1.5 1.5 0 0 0 2.12 0l3.54-3.54a3 3 0 1 0-4.24-4.24L8.47 9.17"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13.41 10.59a1.5 1.5 0 0 0-2.12 0L7.76 14.53a3 3 0 1 0 4.24 4.24l3.54-3.54"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <input
              id="feed-link"
              type="text"
              value={link}
              onChange={(e) => setLink(e.target.value)}
              placeholder="https://example.com/rss"
              className="ml-3 w-full bg-transparent text-lg text-gray-100 placeholder-gray-400 outline-none min-w-0"
              aria-label="Feed link"
            />
            {link && (
              <button
                type="button"
                onClick={() => setLink('')}
                className="ml-3 text-gray-400 hover:text-gray-200 transition rounded-full p-1"
                aria-label="Clear feed link"
              >
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 6L6 18M6 6l12 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            )}
          </div>
        </div>

        <div className="flex items-center">
          <button className="inline-flex items-center gap-2 bg-flux-dark-blue hover:bg-flux-light-blue text-white font-medium px-4 py-3 rounded-2xl shadow-md transition">
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 5v14M5 12h14"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Add
          </button>
        </div>
      </fieldset>
    </form>
  );
}
