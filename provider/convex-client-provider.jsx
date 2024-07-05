"use client";
import React from "react";
import { ClerkProvider, useAuth } from "@clerk/clerk-react";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { AuthLoading,Authenticated, ConvexReactClient } from "convex/react";
import Loading from "@/components/auth/loading";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL);
console.log(convex);

const ConvexClientProvider=({children})=>{
 return(
    <ClerkProvider publishableKey="pk_test_ZGVzdGluZWQtdG91Y2FuLTY1LmNsZXJrLmFjY291bnRzLmRldiQ">
    <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
        <Authenticated>

      {children}
        </Authenticated>
        <AuthLoading>
            <Loading/>
        </AuthLoading>
    </ConvexProviderWithClerk>
  </ClerkProvider>
 )
};

export default ConvexClientProvider