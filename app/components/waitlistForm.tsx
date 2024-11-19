'use client';

import { useState } from 'react';
import supabase from '../../../supabaseClient';

export default function WaitlistForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(''); // Clear previous status

    try {
      const { error } = await supabase
        .from('Private_Beta')
        .insert([{ email: email.toLowerCase().trim() }]);

      if (error) {
        if (error.code === '23505') {
          setStatus("You're already on the waitlist! We'll be in touch soon.");
        } else {
          setStatus("Error: Unable to add email to the waitlist. Please try again.");
        }
      } else {
        setStatus("Welcome to the Problem Pioneer community! You're on the waitlist.");
        setEmail(''); // Clear email field
      }
    } catch (err) {
      console.error('Unexpected Error:', err);
      setStatus('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col md:flex-row gap-4 justify-center items-center"
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@startup.com"
          className="px-6 py-3 rounded-lg w-full md:w-96 text-gray-900 font-mono"
          disabled={loading}
          required
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors w-full md:w-auto disabled:opacity-50"
        >
          {loading ? 'Processing...' : 'Join Private Beta'}
        </button>
      </form>
      
      {/* Status message section moved outside the form */}
      <div className="mt-4 text-center">
        {status && (
          <div className={`p-4 rounded-lg ${
            status.includes('Error') || status.includes('wrong')
              ? 'bg-red-100 text-red-700'
              : 'bg-green-100 text-green-700'
          }`}>
            {status}
          </div>
        )}
      </div>
    </div>
  );
}