export class InvalidNucleotideError extends Error {
  constructor(char: string) {
    super(`Invalid DNA nucleotide encountered: "${char}"`);
    this.name = "InvalidNucleotideError";
  }
}

const complementMap: Record<string, string> = {
  A: "U",
  T: "A",
  C: "G",
  G: "C",
};

export function transcribeDNA(dna: string): string {
  let result = "";
  for (const char of dna) {
    const upper = char.toUpperCase();
    if (!(upper in complementMap)) {
      throw new InvalidNucleotideError(char);
    }
    result += complementMap[upper];
  }
  return result;
}
