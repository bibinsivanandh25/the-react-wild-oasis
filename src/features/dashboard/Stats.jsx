import Stat from './Stat';
import { HiOutlineBriefcase } from 'react-icons/hi';
import { HiOutlineBanknotes } from 'react-icons/hi2';
import { SlCalender } from 'react-icons/sl';
import { HiOutlineChartBar } from 'react-icons/hi';
import { formatCurrency } from '../../utils/helpers';

const Stats = ({ bookings, confirmedStays, numDays, cabinCount }) => {
  const numBookings = bookings.length;

  const sales = bookings.reduce((acc, cur) => acc + cur.totalPrice, 0);

  const checkIns = confirmedStays.length;

  const occupation =
    confirmedStays.reduce((acc, cur) => acc + cur.numNights, 0) /
    (numDays * cabinCount);
  return (
    <>
      <Stat
        title="bookings"
        color="blue"
        value={numBookings}
        icon={<HiOutlineBriefcase />}
      />
      <Stat
        title="sales"
        color="green"
        value={formatCurrency(sales)}
        icon={<HiOutlineBanknotes />}
      />
      <Stat
        title="check ins"
        color="indigo"
        value={checkIns}
        icon={<SlCalender />}
      />
      <Stat
        title="Occupancy rate"
        color="yellow"
        value={Math.round(occupation * 100) + '%'}
        icon={<HiOutlineChartBar />}
      />
    </>
  );
};

export default Stats;
