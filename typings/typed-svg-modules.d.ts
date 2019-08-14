// declare resources that are not codes.
// every time you use non-code resources, you must declare them here.

declare module '*.svg' {
  const content: any;
  export default content;
}
