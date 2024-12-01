// app/meetups/[meetupId]/page.tsx
import React from 'react';
import { useRouter } from 'next/router';

const MeetupDetails = () => {
  const router = useRouter();
  const { meetupId } = router.query;

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Meetup Details</h1>
      <p className="mb-2"><strong>ID:</strong> {meetupId}</p>
      <p className="mb-2"><strong>Title:</strong> Crypto Meetup</p>
      <p className="mb-2"><strong>Date:</strong> 2024-12-10</p>
      <p className="mb-2"><strong>Location:</strong> Online</p>
      <button
        className="mt-4 w-full py-3 bg-blue-500 text-white rounded-lg"
        onClick={() => router.push(`/app/meetups/${meetupId}/rsvp`)}
      >
        RSVP Now
      </button>
    </div>
  );
};

export default MeetupDetails;
