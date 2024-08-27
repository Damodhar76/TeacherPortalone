import React, { useState } from 'react';

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [bookedSlots, setBookedSlots] = useState([]);

  const isDateBooked = (date) => {
    return bookedSlots.some((slot) => slot.date === date.toISOString());
  };

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  const handleSlotBooking = (slotDetails) => {
    const updatedBookedSlots = [...bookedSlots, slotDetails];
    setBookedSlots(updatedBookedSlots);
    setSelectedDate(null);
    alert("Booked the slot successfully") // Close the booking form after booking
  };

  const renderBookingForm = () => {
    if (!selectedDate) return null;

    return (
      <div className="booking-form">
        <h3>Book a Slot</h3>
        <p>Date: {selectedDate.toDateString()}</p>
        {/* Your booking form fields go here */}
        <button onClick={() => handleSlotBooking({ date: selectedDate.toISOString() })}>
          Book Slot
        </button>
        <button onClick={() => setSelectedDate(null)}>Cancel</button>
      </div>
    );
  };

  const renderCalendarDays = () => {
    const currentDate = new Date();
    const daysInMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      0
    ).getDate();

    const calendarDays = [];
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);

      calendarDays.push(
        <div
          key={day}
          className={`calendar-day ${isDateBooked(date) ? 'booked' : ''}`}
          onClick={() => handleDateClick(date)}
        >
          <span>{day}</span>
        </div>
      );
    }

    return calendarDays;
  };

  return (
    <div>
      <h2>Calendar</h2>
      <div className="calendar">{renderCalendarDays()}</div>
      {renderBookingForm()}
    </div>
  );
};

export default Calendar;
