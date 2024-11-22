import { Button } from '@/components/ui/button'
import { useCreateSessionModal } from '@/features/sessions/hooks/use-create-session-modal';
import React from 'react'

function AccountPage() {
  const { open: craeteSession } = useCreateSessionModal();

  return (
    <div>
      <Button onClick={craeteSession}>New session</Button>
    </div>
  )
}

export default AccountPage