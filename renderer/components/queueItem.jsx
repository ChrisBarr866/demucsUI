import { useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

export default function QueueItem(handleRemove) {
  const [mode, setMode] = useState(false);
  const [settings, setSettings] = useState(false);

  return (
    <div className="border-2 border-pink-700">
      <h1>{title}</h1>
      <div className="h-32 px-20 bg-red-300 bg-accent"></div>
      <button onClick={handleRemove} className="w-5 bg-color-purple-500">
        X
      </button>
    </div>
  );
}

QueueItem.PropTypes = {
  title: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
  mode: PropTypes.oneOf(["karaoke", "Photos"]),
};
