import {
  addWeeks,
  eachDayOfInterval,
  endOfWeek,
  format,
  isSameDay,
  startOfWeek,
  subWeeks,
} from 'date-fns';
import { useState } from 'react';

type Props = {};

const WeeklyView = (props: Props) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const startDate = startOfWeek(currentDate);
  const endDate = endOfWeek(currentDate);

  const daysInWeek = eachDayOfInterval({ start: startDate, end: endDate });

  const timeSlots = [
    '8 - 10',
    '10 - 12',
    '12 - 14',
    '14 - 16',
    '16 - 18',
    '18 - 20',
    '20 - 22',
  ];

  const goToPreviousWeek = () => {
    setCurrentDate(subWeeks(currentDate, 1));
  };

  const goToNextWeek = () => {
    setCurrentDate(addWeeks(currentDate, 1));
  };

  const goToToday = () => {
    setCurrentDate(new Date()); // Set current date to today
  };

  return (
    <div className='p-10'>
      <div className='flex justify-between mb-4'>
        <button
          onClick={goToPreviousWeek}
          className='px-4 py-2 bg-primary rounded text-white'
        >
          Previous Week
        </button>
        <h2 className='text-center font-semibold'>
          {format(startDate, 'MMMM dd, yyyy')} -{' '}
          {format(endDate, 'MMMM dd, yyyy')}
        </h2>
        <div>
          <button
            onClick={goToNextWeek}
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
      <div className='flex'>
        <div className='flex flex-col'>
          <div className='h-[50px] p-2 border'>Time</div>
          {timeSlots.map((time) => (
            <div
              key={time}
              className='h-[50px] w-[150px] p-2 border-r border-b border-l'
            >
              {time}
            </div>
          ))}
        </div>
        <div className='flex overflow-hidden'>
          {daysInWeek.map((day) => {
            const isToday = isSameDay(day, new Date());

            return (
              <div className='flex flex-col w-[200px]' key={day.toISOString()}>
                <div
                  className={`h-[50px] border-black p-2 border-r border-b border-t ${
                    isToday && 'text-primary'
                  }`}
                >
                  <span className='block text-sm font-medium'>
                    {format(day, 'EEE, MMM dd')}
                  </span>
                </div>
                {timeSlots.map((time) => (
                  <div
                    key={`${day.toISOString()}-${time}`}
                    className={`h-[50px] p-2 border-r border-b`}
                  >
                    {/* You can place events here at specific times */}
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WeeklyView;
