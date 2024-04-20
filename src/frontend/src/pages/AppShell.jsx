import Top from "../components/Top"
import Landing from "../components/Landing";



function AppShell() {


  return (
    <div className="box-border flex flex-col justify-around max-h-screen">
      <Top></Top>
      <div className="h-[calc(100vh-96px)] flex flex-col">
        <Landing></Landing>
      </div>
    </div>
  );
}

export default AppShell;