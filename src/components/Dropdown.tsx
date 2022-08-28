import React, { useState } from 'react';

export default function Dropdown({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  if (isOpen) return <>{children}</>;
  else return <button onClick={() => setIsOpen(true)}>{label}</button>;
}
