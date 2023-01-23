import React from 'react'
import { Toaster } from 'react-hot-toast';
export default function CustomisedToaster() {
  return (
    <Toaster
      position="top-right"
      reverseOrder={false}
      toastOptions={{ duration: 1000 }}
    />
  );
}
