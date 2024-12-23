// global.d.ts
declare module '*.png' {
    const content: any;
    export default content;
  }
  
  declare module '*.webp' {
    const content: any;
    export default content;
  }
  
  declare module '*.module.css' {
    const classes: { [key: string]: string };
    export default classes;
  }