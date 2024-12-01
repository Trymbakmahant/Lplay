// app/meetups/[meetupId]/rsvp.tsx
import React, { useState } from 'react';

const RSVPForm = () => {
  const [amount, setAmount] = useState(0);

  const handleRSVP = () => {
    console.log('RSVP with amount:', amount);
    // Add payment and RSVP API logic
  };

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">RSVP to Meetup</h1>
      <p className="mb-4">RSVP Price: 10 USDT</p>
      <input
        type="number"
        placeholder="Enter Amount"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        className="w-full px-4 py-2 border rounded-lg"
      />
      <button
        onClick={handleRSVP}
        className="mt-4 w-full py-3 bg-blue-500 text-white rounded-lg"
      >
        Confirm RSVP
      </button>
    </div>
  );
};

export default RSVPForm;
