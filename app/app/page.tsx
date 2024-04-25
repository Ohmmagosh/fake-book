import Image from "next/image";
import { Content } from "./_components/content";
import { Footer } from "./_components/footer";

export default function Home() {
  return (
    <main className="min-h-screen min-w-screen bg-white">
      <Content />
      <Footer />
    </main>
  );
}
