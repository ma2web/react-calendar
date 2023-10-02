import {
  addMonths,
  eachDayOfInterval,
  endOfMonth,
  format,
  isSameDay,
  startOfMonth,
  startOfWeek,
  subMonths,
} from 'date-fns';
import { useState } from 'react';

type Props = {};

const MonthView = (props: Props) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const startDate = startOfMonth(currentDate);
  const endDate = endOfMonth(currentDate);

  // Calculate the first day of the month and the day of the week it falls on
  const firstDayOfMonth = startOfWeek(startDate);

  const daysInMonth = eachDayOfInterval({
    start: firstDayOfMonth,
    end: endDate,
  });

  const goToPreviousMonth = () => {
    setCurrentDate(subMonths(currentDate, 1));
  };

  const goToNextMonth = () => {
    setCurrentDate(addMonths(currentDate, 1));
  };

  const goToToday = () => {
    setCurrentDate(new Date()); // Set current date to today
  };

  return (
    <div className='p-10'>
      <div className='flex justify-between mb-4'>
        <button
          onClick={goToPreviousMonth}
          className='px-4 py-2 bg-primary rounded text-white'
        >
          Previous Month
        </button>
        <h2 className='text-center font-semibold'>
          {format(currentDate, 'MMMM yyyy')}
        </h2>
        <div>
          <button
            onClick={goToNextMonth}
            className='px-4 py-2 bg-primary rounded text-white mr-2'
          >
            Next Month
          </button>
          <button
            onClick={goToToday}
            className='px-4 py-2 border border-primary rounded text-primary'
          >
            Today
          </button>
        </div>
      </div>
      <div className='grid grid-cols-7 gap-2'>
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((dayHeader) => (
          <div key={dayHeader} className='text-center font-bold text-gray-700'>
            {dayHeader}
          </div>
        ))}
        {daysInMonth.map((day) => {
          const isToday = isSameDay(day, new Date());

          return (
            <div
              key={day.toISOString()}
              className={`h-[100px] p-2 border ${
                isToday ? ' border border-primary text-primary' : ''
              }`}
            >
              <span className='block text-sm font-medium'>
                {format(day, 'd')}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MonthView;
