import { ReactNode } from "react";

export const ChatWrapper = ({ children }: { children: ReactNode }) => (
  <main className="min-h-screen bg-gray-700 flex items-center justify-center">
    <section className="scroll-smooth w-[450px] h-[700px] max-w-screen max-h-screen p-8 bg-white rounded-md flex flex-col items-center gap-8">
      {children}
    </section>
  </main>
);
