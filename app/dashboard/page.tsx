'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

export default function Dashboard() {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get('/api/check');
        if (response.status === 200) {
          setLoading(false);
        } else {
          router.push('/login');
        }
      } catch (error) {
        console.error('Authentication check failed:', error);
        router.push('/login');
      }
    };

    checkAuth();
  }, [router]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Welcome to your Dashboard</h1>
      {/* Add your dashboard content here */}
    </div>
  );
}