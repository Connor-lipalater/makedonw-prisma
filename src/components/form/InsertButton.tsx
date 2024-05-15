"use client";

import React from "react";

const InsertButton = ({ children }: { children: React.ReactNode }) => {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending}>
      {pending ? "Loading..." : children}
    </button>
  );
};

export default InsertButton;
