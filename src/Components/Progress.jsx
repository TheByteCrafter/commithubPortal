const Progress = () => {
  return (
    <a
      href="#"
      className="block border-2 border-[#FF6B35] bg-white p-4
       text-black shadow-[4px_4px_0_0] shadow-[#FF6B35]
        hover:bg-[#ff6b35] focus:ring-2 focus:ring-[#ff6b35] focus:outline-0 sm:p-6"
    >
      <span className="inline-flex items-center gap-1.5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="size-4"
        >
          <path
            fillRule="evenodd"
            d="M4 1.75a.75.75 0 0 1 1.5 0V3h5V1.75a.75.75 0 0 1 1.5 0V3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2V1.75ZM4.5 6a1 1 0 0 0-1 1v4.5a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-7Z"
            clipRule="evenodd"
          ></path>
        </svg>

        <time
          datetime="2025-04-01"
          className="text-xs/none font-semibold uppercase"
        >
          {new Date().getFullYear()}
        </time>
      </span>

      <p className="mt-2 line-clamp-2 text-pretty">
        Thank you for your intrest in Commithub, we are currently working on
        this portal to bring you exciting features, we will notify you once the
        portal is ready.
      </p>
    </a>
  );
};

export default Progress;
