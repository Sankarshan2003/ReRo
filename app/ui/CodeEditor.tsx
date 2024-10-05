'use client';
import { useEffect, useRef, useState, createContext} from "react";
import * as monaco from 'monaco-editor';
import Navbar from "./Navbar";

interface MyContextType {
  theme: 'vs-light' | 'vs-dark';
  setTheme: React.Dispatch<React.SetStateAction<"vs-light" | "vs-dark">>;
}

export const Mycontext = createContext<MyContextType | undefined>(undefined);

export default function CodeEditor() {
  const [theme, setTheme] = useState<'vs-light' | 'vs-dark'>('vs-dark');
  const editorRef = useRef<HTMLDivElement | null>(null);
  const editorInstanceRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null);

  useEffect(() => {
    if (editorRef.current) {
      // Create the editor instance on initial mount
      const editor = monaco.editor.create(editorRef.current, {
        value: `print("Hello, world!")`,
        language: 'python',
        theme: theme,
      });

      editorInstanceRef.current = editor;

      // Cleanup on unmount
      return () => editor.dispose();
    }
  }, []);

  // Effect to update the theme whenever it changes
  useEffect(() => {
    if (editorInstanceRef.current) {
      monaco.editor.setTheme(theme);
    }
  }, [theme]);

  const handleRun = () => {
    if (editorInstanceRef.current) {
      console.log('Running Code:', editorInstanceRef.current.getValue());
      // Execute or process code here
    }
  };

  const handleStop = () => {
    console.log('Stopping execution...');
  };

  return (
    <Mycontext.Provider value={{ theme, setTheme }}>
      <div className="h-screen flex flex-row-reverse">
        <div className="basis-1/2 flex flex-col border-2">
          <Navbar onRun={handleRun} onStop={handleStop} />
          <div ref={editorRef} className="w-full basis-[99%]"></div>
        </div>
        <div className="basis-1/2"></div>
      </div>
    </Mycontext.Provider>
  );
}
