import React from 'react';

function Field({
  children,
  label
}: React.PropsWithChildren<{ label: string }>) {
  return (
    <div>
      <label className="mb-1 block text-sm font-medium text-gray-700">
        {label}
      </label>
      {children}
    </div>
  );
}

function Form({ children }: React.PropsWithChildren) {
  return <form className="w-full space-y-4">{children}</form>;
}

Form.Field = Field;

export { Form };
