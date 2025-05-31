import React from 'react'

function ProfileBlock({children}) {
  return (
    <div className='h-[95px] border-2 border-dotted border-[#A1A1A1] rounded-[13px] p-[20px] flex items-start gap-1 w-full'>
        {children}
    </div>
  )
}

export default ProfileBlock