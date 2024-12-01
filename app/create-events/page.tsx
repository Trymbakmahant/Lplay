// app/create-meetup/page.tsx
import React, { useState } from 'react';

const CreateMeetup = () => {
  const [form, setForm] = useState({
    title: '',
    description: '',
    date: '',
    location: '',
    rsvpPrice: 0,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
    // Add API call to save meetup
  };

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Create a Meetup</h1>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Meetup Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          className="w-full px-4 py-2 border rounded-lg"
        />
        <textarea
          placeholder="Description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          className="w-full px-4 py-2 border rounded-lg"
        />
        <input
          type="datetime-local"
          value={form.date}
          onChange={(e) => setForm({ ...form, date: e.target.value })}
          className="w-full px-4 py-2 border rounded-lg"
        />
        <input
          type="text"
          placeholder="Location"
          value={form.location}
          onChange={(e) => setForm({ ...form, location: e.target.value })}
          className="w-full px-4 py-2 border rounded-lg"
        />
        <input
          type="number"
          placeholder="RSVP Price (0 for free)"
          value={form.rsvpPrice}
          onChange={(e) => setForm({ ...form, rsvpPrice: Number(e.target.value) })}
          className="w-full px-4 py-2 border rounded-lg"
        />
        <button type="submit" className="w-full py-3 bg-blue-500 text-white rounded-lg">
          Create Meetup
        </button>
      </form>
    </div>
  );
};

export default CreateMeetup;
