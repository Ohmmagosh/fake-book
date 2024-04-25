export function Footer() {
  const lang: string[] = [
    "English (UK)",
    "ภาษาไทย",
    "日本語",
    "中文(简体)",
    "Tiếng Việt",
    "Français (France)",
    "Deutsch",
    "Русский",
    "Español",
    "Português (Brasil)",
    "Italiano",
  ];
  const arrayOfStrings_1 = [
    "Sign Up",
    "Log in",
    "Messenger",
    "Facebook Lite",
    "Video",
    "Places",
    "Games",
    "Marketplace",
    "Meta Pay",
    "Meta Store",
    "Meta Quest",
    "Meta AI",
    "Instagram",
    "Threads",
  ];
  const arrayOfStrings_2 = [
    "Fundraisers",
    "Services",
    "Voting Information Centre",
    "Privacy Policy",
    "Privacy Centre",
    "Groups",
    "About",
    "Create ad",
    "Create Page",
    "Developers",
    "Careers",
    "Cookies",
  ];
  const arrayOfStrings_3 = [
    "AdChoices",
    "Terms",
    "Help",
    "Contact uploading and non-users",
    "Settings",
    "Activity log",
  ];

  return (
    <>
      <div className="w-full bg-[#FFFFFF] h-[178px] flex justify-center w-full">
        <div>
          <div className="text-black pt-5 pb-2 border-b">
            <ul className="flex space-x-[3px]">
              {lang.map((item: string, index: number) => (
                <li key={index}>
                  <a className="font-normal text-[#8a8d91] text-xs hover:underline">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="text-black pt-2 w-full">
            <ul className="flex space-x-[3px]">
              {arrayOfStrings_1.map((item: string, index: number) => (
                <a
                  key={index}
                  className="font-normal text-[#8a8d91] text-xs hover:underline"
                >
                  {item}
                </a>
              ))}
            </ul>
          </div>
          <div className="text-black pt-2  w-full">
            <ul className="flex space-x-[3px]">
              {arrayOfStrings_2.map((item: string, index: number) => (
                <a
                  key={index}
                  className="font-normal text-[#8a8d91] text-xs hover:underline"
                >
                  {item}
                </a>
              ))}
            </ul>
          </div>
          <div className="text-black pt-2  w-full">
            <ul className="flex space-x-[3px]">
              {arrayOfStrings_3.map((item: string, index: number) => (
                <a
                  key={index}
                  className="font-normal text-[#8a8d91] text-xs hover:underline"
                >
                  {item}
                </a>
              ))}
            </ul>
          </div>
          <p className="text-[#8a8d91] font-normal text-xs pt-2">Meta © 2024</p>
        </div>
      </div>
    </>
  );
}
