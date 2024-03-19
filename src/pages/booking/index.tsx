import Main from "@/overview/LeftNavbar";
import { bookingMidbarElements } from "@/components/mainContent/midbar/midbarElements";
const Booking = () => {
  return (
    <>
      <Main items={bookingMidbarElements} />
      {/* <NewestBookingComponent /> */}
    </>
  );
};
export default Booking;
