"use client";
import React from 'react'
import { EmptyOrg } from './_components/empty-org'
import { BoardList } from './_components/board-list'
import { useOrganization } from "@clerk/nextjs";

const DashboardPage = ({ searchParams }) => {
  const { organization } = useOrganization();

  return (
    <div className="flex-1 h-[calc(100vh-80px)] p-6">
      {!organization ? (
        <EmptyOrg />
      ) : (
        <BoardList orgId={organization.id} query={searchParams} />
      )}
    </div>
  );
};

export default DashboardPage
