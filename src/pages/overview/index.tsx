import Booked from "@/components/mainContent/main/Booked";
import { overviewMidbarElements } from "@/components/mainContent/midbar/midbarElements";
import LeftNavbar from "@/overview/LeftNavbar";

const Overview = () => {
  return (
    <>
      <LeftNavbar items={overviewMidbarElements} />
    </>
  );
};
export default Overview;
