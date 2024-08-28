import { loader } from "@monaco-editor/react";


export const monacoThemes = {
  "brilliance-black": "Brilliance Black",
  "oceanic-next": "Oceanic Next",
  active4d: "Active4D",
  blackboard: "Blackboard",
  amy: "Amy",
};

const defineTheme = (theme) => {
  return new Promise((res) => {
    Promise.all([
      loader.init(),
      import(`monaco-themes/themes/${monacoThemes[theme]}.json`),
    ]).then(([monaco, themeData]) => {
      monaco.editor.defineTheme(theme, themeData);
      res();
    });
  });
};

export { defineTheme };
