declare module '*.jsx' {
  import type { ComponentType } from 'react';
  const content: ComponentType<object>;
  export default content;
}

