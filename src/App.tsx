import { useState } from 'react';
import reactLogo from './assets/react.svg';
import FullCalendar from '@fullcalendar/react'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import './App.css';

const Calendar = () => {
  return <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" />;
};

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Calendar />
    </div>
  );
}

export default App;
