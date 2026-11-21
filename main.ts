import { mkdirSync, writeFileSync } from "node:fs";

const text = `Ten thousand years the river has passed over this one stone. The water comes, the water goes. The stone stays, a little smoother each spring. A leaf drifts past, in no hurry. The stone counts no leaves, no years. It only waits while the river learns, slowly, to be still.`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
