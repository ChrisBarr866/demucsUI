import useQueue from "../hooks/useQueue";
import { useState } from "react";
import clsx from "clsx";
import QueueItem from "./queueItem";

export default function Queue() {
  const { queue, set, push, remove, filter, update, clear } = useQueue([
    {
      title: "",
    },
    2,
    3,
    4,
    5,
    6,
  ]);

  return (
    <div>
      <div className="grid grid-cols-1 gap-1">
        {queue.map((item, index) => (
          <QueueItem
            key={index}
            title={item.title}
            isSelected={false}
            handleRemove={remove(index)}
          />
        ))}
      </div>

      <button onClick={() => push(7)}>Add 7</button>
      <button onClick={() => update(1, 9)}>Change Second Element To 9</button>
      <button onClick={() => remove(1)}>Remove Second Element</button>
      <button onClick={() => filter((n) => n < 3)}>
        Keep Numbers Less Than 4
      </button>
      <button onClick={() => set([1, 2])}>Set To 1, 2</button>
      <button onClick={clear}>Clear</button>
    </div>
  );
}
