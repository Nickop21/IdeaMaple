"use client"
import {
    OrganizationSwitcher,
    UserButton,
    useOrganization,
  } from "@clerk/nextjs";import React from 'react'

function Navbar() {
    const { organization } = useOrganization();

  return (
    <div className='className="flex items-center gap-x-4 p-5"'>
      <div className="hidden lg:flex lg:flex-1">
        {/* <SearchInput /> */}
      </div>
      <div className="block lg:hidden flex-1">
        <OrganizationSwitcher
          hidePersonal
          appearance={{
            elements: {
              rootBox: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                maxWidth: "367px",
              },
              organizationSwitcherTrigger: {
                padding: "6px",
                width: "100%",
                borderRadius: "8px",
                border: "1px solid #E6E7EB",
                justifyContent: "space-between",
                backgroundColor: "white",
              },
            },
          }}
        />
      </div>
      {organization && <InviteButton />}
      <UserButton />
    </div>
  )
}

export default Navbar