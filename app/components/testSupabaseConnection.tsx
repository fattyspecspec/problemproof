import supabase from '../../../supabaseClient';

export default async function testConnection() {
  const { data, error } = await supabase.from('Private_Beta').select('*');
  console.log('Connection Test Data:', data);
  console.log('Connection Test Error:', error);
}

testConnection();
