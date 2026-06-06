import NavBar from "../Components/NavBar";
import Progress from "../Components/Progress";

const LandingPage = () => {
  return (
    <div className="h-screen w-screen p-0">
      <NavBar />
      <div className="flex flex-col items-center justify-center h-screen w-screen p-10">
        <Progress />
      </div>
    </div>
  );
};
export default LandingPage;
