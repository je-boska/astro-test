import React, { useState } from 'react';

export default function Dropdown({ label, children }) {
  const [isOpen, setIsOpen] = useState(false);

  if (isOpen) return <>{children}</>;
  else return <button onClick={() => setIsOpen(true)}>{label}</button>;
}
