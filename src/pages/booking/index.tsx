import LeftNavbar from "@/overview/LeftNavbar";
import { bookingMidbarElements } from "@/components/mainContent/midbar/midbarElements";
const Booking = () => {
  return (
    <>
      <LeftNavbar items={bookingMidbarElements} />
      {/* <NewestBookingComponent /> */}
    </>
  );
};
export default Booking;
