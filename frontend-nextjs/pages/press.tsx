import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function PressRedirect() {
  const router = useRouter();
  useEffect(() => {
    router.replace('/lila-benhammou/');
  }, [router]);
  return null;
}
