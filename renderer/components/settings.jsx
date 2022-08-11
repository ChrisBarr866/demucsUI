import { fromJSON } from "postcss";
import { useLocalStorage } from "./useStorage";
import { useState, useEffect } from "react";

export default function Settings(isOpen) {
  const [defaultSettings, setDefaultSettings, removeDefaultSettings] =
    useLocalStorage("defaultSettings", {
      inputPath: "./",
      outputPath: "./",
      outputFormat: "mp3",
      processMethod: "DemucsV3",
      stems: 2,
      segment: null,
      DemucsModel: "mdx_extra",
      gpuConversion: false,
      stemOnly: false,
      mixWithoutStemOnly: false,
      splitMode: false,
      shifts: 2,
      overlap: 0.25,
    });

  return (
    <>
      {isOpen ? (
        <div>
          <h1>Settings</h1>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
