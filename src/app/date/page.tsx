'use client'
import { useRouter } from 'next/navigation'

export default function DatePage() {
  const router = useRouter();
    router.push('/');

  return <div>Redirecting...</div>;
}