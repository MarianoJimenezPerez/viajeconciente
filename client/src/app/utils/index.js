import { parse } from "node-html-parser";

export function formatText(title, qChars) {
  if (title.length < qChars) {
    return title;
  } else {
    return title.slice(0, qChars) + " ...";
  }
}

export function formatHtml(html) {
  const doc = parse(html);
  return doc.text;
}
