import { useState } from 'react';
import DayView from './DayView';
import MonthView from './MonthView';
import WeekView from './WeekView';

type Props = {};

const Calendar = (props: Props) => {
  const [view, setView] = useState<'daily' | 'weekly' | 'monthly'>('daily');

  return (
    <div className='mx-auto'>
      <div className='flex items-center p-4 bg-gray_blue-91'>
        <button
          onClick={() => setView('daily')}
          className={`px-4 py-2 ${
            view === 'daily' && ' bg-primary text-white'
          }  rounded mr-2`}
        >
          Daily
        </button>
        <button
          onClick={() => setView('weekly')}
          className={`px-4 py-2 ${
            view === 'weekly' && ' bg-primary text-white'
          } rounded mr-2`}
        >
          Weekly
        </button>
        <button
          onClick={() => setView('monthly')}
          className={`px-4 py-2 ${
            view === 'monthly' && ' bg-primary text-white'
          } rounded`}
        >
          Monthly
        </button>
      </div>
      {view === 'daily' && <DayView />}
      {view === 'weekly' && <WeekView />}
      {view === 'monthly' && <MonthView />}
    </div>
  );
};

export default Calendar;
