"use client";

import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import { store } from "@/store";
import Context from "./Context/context";

type Props = {
  children?: React.ReactNode;
};

export const NextAuthProvider = ({ children }: Props,) => {
  
  return (
    <Context>
        <Provider store={store}>
          <SessionProvider>{children}</SessionProvider>
        </Provider>
    </Context>


  )
  ;
};
