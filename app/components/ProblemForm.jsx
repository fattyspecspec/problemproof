'use client';

import { useState } from 'react';
import { useProblems } from '../hooks/useProblems';

const ProblemForm = () => {
  const { createProblem, loading, error } = useProblems();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      title: e.target.title.value,
      description: e.target.description.value,
      targetMarket: e.target.targetMarket.value,
      currentSolution: e.target.currentSolution.value
    };

    const result = await createProblem(formData);
    if (result.type === 'success') {
      setSubmitted(true);
      e.target.reset();
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Describe Your Problem</h2>
      
      {submitted ? (
        <div className="bg-green-50 p-4 rounded-lg mb-6">
          <p className="text-green-800">Your problem has been submitted successfully!</p>
          <button 
            onClick={() => setSubmitted(false)}
            className="text-green-600 underline mt-2"
          >
            Submit another problem
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Problem Title
            </label>
            <input
              type="text"
              name="title"
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="What's the main problem you're trying to solve?"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Detailed Description
            </label>
            <textarea
              name="description"
              required
              rows="4"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Describe the problem in detail. What makes it challenging?"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Target Market
            </label>
            <input
              type="text"
              name="targetMarket"
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Who experiences this problem the most?"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Current Solutions
            </label>
            <textarea
              name="currentSolution"
              required
              rows="3"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="How do people solve this problem today?"
            />
          </div>

          {error && (
            <div className="text-red-600 text-sm">{error}</div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
          >
            {loading ? 'Submitting...' : 'Submit Problem'}
          </button>
        </form>
      )}
    </div>
  );
};

export default ProblemForm;