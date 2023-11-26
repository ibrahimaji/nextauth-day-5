'use client';

import { signIn, signOut, useSession } from 'next-auth/react';

import { Button } from '@/components/ui/button';

export default function Page() {
  const { data: session } = useSession();
  console.log(session);
  return (
    <div>
      {session ? (
        <div className="flex justify-between p-8">
          <div className="font-bold">App.</div>
          <div className="flex items-center gap-4">
            <div>{session.user?.name}</div>
            <img alt="Profile Photos" src={session.user?.image} width={40} height={40} className="rounded-full" />
            <Button onClick={() => signOut()}>Logout</Button>
          </div>
        </div>
      ) : (
        <div className="flex justify-end p-8">
          <Button onClick={() => signIn()}>Login</Button>
        </div>
      )}
    </div>
  );
}
