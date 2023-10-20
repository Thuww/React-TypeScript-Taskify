/// <reference types="react-scripts" />
// main.ts
if (process.env.NODE_ENV === "development") {
    import("autopreview/react").then(({ default: AutoPreview }) => {
      new AutoPreview("#root")
    })
  }
  