import React from 'react'

import { Avatar, XStack } from 'tamagui'
export function AvatarDemo() {

  return (

    <XStack alignItems="center" gap="$6">

      <Avatar circular size="$5" className='border border-[#B8B8B8]'>

        <Avatar.Image
          accessibilityLabel="Nate Wienert"
          src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?&w=100&h=100&dpr=2&q=80"
        />

        <Avatar.Fallback delayMs={600} backgroundColor="$blue10" />

      </Avatar>

    </XStack>

  )

}