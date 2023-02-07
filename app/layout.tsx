import SideBar from "../components/SideBar";
import "../styles/globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head />
      <body>
        <div className="flex">
          <div className="bg-[#202123] max-w-xs md:min-w-[20rem] h-screen overflow-y-auto">
            <SideBar />
          </div>

          {/* client provider - notification  */}

          <div className="bg-[#343541] flex-1">{children}</div>
        </div>
      </body>
    </html>
  );
}
