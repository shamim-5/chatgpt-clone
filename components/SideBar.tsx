import NewChat from "./NewChat";

function SideBar() {
  return (
    <div className="p-2 flex flex-col h-screen">
      <div>
        <NewChat />

           <div>
              {/* modelSelection  */}
           </div>

           {/* map through the chatRows  */}
      </div>
    </div>
  );
}

export default SideBar;
