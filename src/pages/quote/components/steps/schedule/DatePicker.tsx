import React, { useState } from 'react';
import { Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import { format, addDays, isBefore, isAfter, startOfDay, eachDayOfInterval } from 'date-fns';

interface DatePickerProps {
  selectedDate: string;
  onChange: (date: string) => void;
}

export default function DatePicker({ selectedDate, onChange }: DatePickerProps) {
  const today = startOfDay(new Date());
  const maxDate = addDays(today, 30);
  const [currentMonth, setCurrentMonth] = useState(today);

  // Generate available dates for the next 30 days
  const availableDates = eachDayOfInterval({
    start: today,
    end: maxDate
  });

  const handleDateSelect = (date: Date) => {
    onChange(format(date, 'yyyy-MM-dd'));
  };

  const isDateAvailable = (date: Date) => {
    return !isBefore(date, today) && !isAfter(date, maxDate);
  };

  const isSelected = (date: Date) => {
    return format(date, 'yyyy-MM-dd') === selectedDate;
  };

  const isToday = (date: Date) => {
    return format(date, 'yyyy-MM-dd') === format(today, 'yyyy-MM-dd');
  };

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">
        <div className="flex items-center">
          <Calendar className="w-5 h-5 mr-2 text-gray-400" />
          Preferred Date
        </div>
      </label>

      {/* Quick Date Selection */}
      <div className="flex flex-wrap gap-2 mb-4">
        {[0, 1, 2, 3].map(days => {
          const date = addDays(today, days);
          const formattedDate = format(date, 'yyyy-MM-dd');
          const label = days === 0 ? 'Today' : 
                       days === 1 ? 'Tomorrow' : 
                       format(date, 'EEE, MMM d');

          return (
            <button
              key={days}
              type="button"
              onClick={() => onChange(formattedDate)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors
                ${selectedDate === formattedDate
                  ? 'bg-orange-600 text-white'
                  : 'bg-gray-50 text-gray-700 hover:bg-gray-100'}`}
            >
              {label}
            </button>
          );
        })}
      </div>

      {/* Calendar View */}
      <div className="bg-white rounded-lg border border-gray-200 p-4">
        <div className="flex items-center justify-between mb-4">
          <button
            type="button"
            onClick={() => setCurrentMonth(addDays(currentMonth, -7))}
            disabled={isBefore(currentMonth, today)}
            className="p-1 rounded-full hover:bg-gray-100 disabled:opacity-50"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <h3 className="text-base font-semibold text-gray-900">
            {format(currentMonth, 'MMMM yyyy')}
          </h3>
          <button
            type="button"
            onClick={() => setCurrentMonth(addDays(currentMonth, 7))}
            disabled={isAfter(currentMonth, maxDate)}
            className="p-1 rounded-full hover:bg-gray-100 disabled:opacity-50"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-7 gap-1">
          {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
            <div key={day} className="text-center text-xs font-medium text-gray-500 py-1">
              {day}
            </div>
          ))}
          {availableDates.map((date, index) => {
            const available = isDateAvailable(date);
            return (
              <button
                key={index}
                onClick={() => available && handleDateSelect(date)}
                disabled={!available}
                className={`
                  p-2 text-sm rounded-lg relative
                  ${isSelected(date) 
                    ? 'bg-orange-600 text-white' 
                    : available
                      ? 'hover:bg-gray-100'
                      : 'text-gray-300 cursor-not-allowed'}
                  ${isToday(date) && !isSelected(date) && 'font-bold text-orange-600'}
                `}
              >
                {format(date, 'd')}
                {isToday(date) && !isSelected(date) && (
                  <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-orange-600 rounded-full" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-2 text-xs text-gray-500 flex items-center space-x-4">
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-orange-600 mr-1" />
          <span>Selected</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full border-2 border-orange-600 mr-1" />
          <span>Today</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-gray-200 mr-1" />
          <span>Unavailable</span>
        </div>
      </div>
    </div>
  );
}