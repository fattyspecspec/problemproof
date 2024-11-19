'use client';

import { useState } from 'react';  // Removed useEffect since it's not used
import supabase from '../supabaseClient';

export function useProblems() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [problems, setProblems] = useState([]);

  const createProblem = async (problemData) => {
    setLoading(true);
    setError(null);
    try {
      const { data, error: submitError } = await supabase
        .from('problems')
        .insert([{
          title: problemData.title,
          description: problemData.description,
          target_market: problemData.targetMarket,
          current_solution: problemData.currentSolution,
        }])
        .select()
        .single();

      if (submitError) throw submitError;
      setProblems(prev => [...prev, data]);  // Update problems array with new problem
      return { type: 'success', data };
    } catch (err) {
      setError(err.message);
      return { type: 'error', message: err.message };
    } finally {
      setLoading(false);
    }
  };

  return {
    problems,
    loading,
    error,
    createProblem
  };
}