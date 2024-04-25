import { LogoCard } from "./logo-card";
import { SignInCard } from "./signin-card";


export function Content() {
  return (
    <>
      <div className="min-w-full min-h-full bg-[#f0f2f5] py-24">
        <div className="flex justify-around flex-col md:flex-row items-center">
          <LogoCard />
          <SignInCard />
        </div>
      </div>
    </>
  )
}
