"use client";

import { useQuery } from "convex/react";
// import { EmptyBoards } from "./empty-boards";
import { EmptyFavorites } from "./empty-favorites";
import { EmptySearch } from "./empty-search";
import { api } from "@/convex/_generated/api";
import { BoardCard } from "./board-card";
import { EmptyBoards } from "./empty-boards";
// import { NewBoardButton } from "./new-board-button";


export const BoardList = ({ orgId, query }) => {
//   const data = useQuery(api.boards.get, { orgId, ...query });

  // data will never be undefined even if there is an error or is empty
  // if it is empty, convex will return null
//   if (data === undefined) {
//     return (
//       <div>
//         <h2 className="text-3xl">
//           {query.favorites ? "Favorite boards" : "Team boards"}
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 mt-8 pb-10">
//           <NewBoardButton orgId={orgId} disabled />
//           <BoardCard.Skeleton />
//           <BoardCard.Skeleton />
//           <BoardCard.Skeleton />
//           <BoardCard.Skeleton />
//           <BoardCard.Skeleton />
//         </div>
//       </div>
//     );
//   }

  if (query.search) {
    return <EmptySearch />;
  }

  if ( query.favorites) {
    return <EmptyFavorites />;
  }

  if (query) {
    return <EmptyBoards />;
  }

  return (
    <div>
    
    </div>
  );
};