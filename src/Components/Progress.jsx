const Progress = () => {
  return (
    <a
      href="#"
      className="block border-2 border-[#FF6B35] bg-white p-4 sm:p-6
       text-black shadow-[4px_4px_0_0] shadow-[#FF6B35]
        hover:bg-[#ff6b35] hover:text-white
        focus:ring-2 focus:ring-[#ff6b35] focus:outline-0
        rounded-lg transition-colors duration-200"
    >
      <span className="inline-flex items-center gap-1.5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="w-4 h-4 sm:w-5 sm:h-5"
        >
          <path
            fillRule="evenodd"
            d="M4 1.75a.75.75 0 0 1 1.5 0V3h5V1.75a.75.75 0 0 1 1.5 0V3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2V1.75ZM4.5 6a1 1 0 0 0-1 1v4.5a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-7Z"
            clipRule="evenodd"
          />
        </svg>

        <time
          dateTime="2025-04-01"
          className="text-xs font-semibold uppercase sm:text-sm"
        >
          {new Date().getFullYear()}
        </time>
      </span>

      <p className="mt-2 text-xs sm:text-sm md:text-base line-clamp-3 text-pretty">
        Thank you for your interest in CommitHub. We are currently working on
        this portal to bring you exciting features. We will notify you once the
        portal is ready.
      </p>
    </a>
  );
};

export default Progress;
