"use client"

import { Button } from '@/components/ui/button'
import { useCreateSessionModal } from '@/features/sessions/hooks/use-create-session-modal';
import React from 'react'

function AccountPageClient() {
  const { open: createSession } = useCreateSessionModal();

  return (
    <div>
      <Button onClick={createSession}>New session</Button>
    </div>
  )
}

export default AccountPageClient