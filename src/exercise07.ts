import fs from "fs";

import path from "path";


export type Gradebook = {
  [studentName: string]: {
    [subject: string]: number;
  };
};


export function calculateSubjectAverage(subject: string): number {
  const filePath = path.join(__dirname, "..", "data", "gradebook.json");
  
  const raw = fs.readFileSync(filePath, "utf-8");
  
  const gradebook: Gradebook = JSON.parse(raw);

  const scores: number[] = [];
  
  for (const student in gradebook) {
    const subjects = gradebook[student];
    
    if (subject in subjects) {
      scores.push(subjects[subject]);
    }
  }


  if (scores.length === 0) return 0;
  
  return scores.reduce((sum, s) => sum + s, 0) / scores.length;
}