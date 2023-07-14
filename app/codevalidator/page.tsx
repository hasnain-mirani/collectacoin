'use client'
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from "next/navigation";
// import {verificationCode} from '@/app/api/user/signup/route'
function EmailVerificationPage() {
  const router = useRouter();
  const [verificationCod, setVerificationCode] = useState('');
  const [error, setError] = useState('');
// console.log(verificationCode)
  const handleVerificationSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/user/signup', { verificationCode});
      
      const data = response.data;

      if (data.success) {
        // Verification successful, redirect to the main page
        router.push('/dashboard')
      } else {
        // Verification failed, display error message
        setError(data.error);
      }
    } catch (error) {
      console.error('Error verifying code:', error);
      setError('An error occurred during verification.');
    }
  };

  return (
    <div>
      <h1>Email Verification</h1>
      {error && <p>{error}</p>}
      <form onSubmit={handleVerificationSubmit}>
        <input type="text" value={verificationCode} onChange={(e) => setVerificationCode(e.target.value)} />
        <button type="submit">Verify</button>
      </form>
    </div>
  );
}

export default EmailVerificationPage;
