export function SignInCard() {
  return (
    <>
      <div className="w-[396px]">
        <div className="border-[1px] rounded-[6px] flex flex-col  space-y-4 bg-white p-3 drop-shadow-xl">
          <div className="flex flex-col space-y-4">
            <input
              className="rounded-[6px] p-2 border-[1px]"
              type="text"
              placeholder="อีเมลหรือหมายเลขโทรศัพท์มือถือ"
            />
            <input
              className="rounded-[6px] p-2 border-[1px]"
              type="text"
              placeholder="รหัสผ่าน"
            />
          </div>
          <button className="bg-[#1877f2] font-bold rounded-[6px] p-2">
            Login
          </button>
          <a href="#" className="pb-4 flex justify-center border-b">
            <p className="text-[#0866ff] text-sm font-medium">
              Forgotten password?
            </p>
          </a>
          <div className="flex justify-center items-center pb-3">
            <button className="bg-[#42b72a] p-2 rounded-[6px]">
              Create new account
            </button>
          </div>
        </div>
        <div className="text-xs flex justify-center pt-6">
          <a
            href="#"
            className="text-black font-bold hover:underline-offset-1 hover:underline"
          >
            Create a Page{" "}
            <span className="font-normal hover:underline-offset-0">
              for a celebrity, brand or business.
            </span>
          </a>
        </div>
      </div>
    </>
  );
}
