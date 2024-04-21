import Top from "../components/Top"
import SubmitPhoto from "../components/SubmitPhoto";



function Landing() {


  return (
    <div className="box-border flex flex-col justify-around max-h-screen">
      <Top></Top>
      <div className="h-[calc(100vh-96px)] flex flex-col">
        <SubmitPhoto></SubmitPhoto>
      </div>
    </div>
  );
}

export default Landing;