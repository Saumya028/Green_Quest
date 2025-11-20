declare module 'sonner' {
  import * as React from 'react';
  export const Toaster: React.FC<any>;
  export const toast: { error: (msg: string) => void };
}
