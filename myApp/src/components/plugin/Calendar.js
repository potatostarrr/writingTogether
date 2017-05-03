import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import styles from 'react-big-calendar/lib/css/react-big-calendar.css'
// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
BigCalendar.momentLocalizer(moment); // or globalizeLocalizer

const MyCalendar = props => (
  <div>
    <BigCalendar
      style={{height:320}}
      events={[]}
      startAccessor='startDate'
      endAccessor='endDate'
    />
  </div>
);

export default MyCalendar;
