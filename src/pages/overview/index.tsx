import Booked from "@/components/mainContent/main/Booked";
import { overviewMidbarElements } from "@/components/mainContent/midbar/midbarElements";
import Main from "@/overview/LeftNavbar";

const Overview = () => {
  return (
    <>
      <Main items={overviewMidbarElements} />
    </>
  );
};
export default Overview;
