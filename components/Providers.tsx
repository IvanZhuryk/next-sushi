'use client'

import { store } from "@/app/store";
import React from "react";
import {Provider}  from 'react-redux'

export function Providers({children}:{children:React.ReactNode}) {
    return(
        <Provider store={store}>
            {children}
        </Provider>
    )
}