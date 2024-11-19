'use client';

import { useState, useEffect } from 'react';
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