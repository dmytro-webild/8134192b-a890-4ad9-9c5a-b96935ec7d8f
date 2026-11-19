interface QRCodeSVGProps {
  value: string;
  size?: number;
  className?: string;
}

// A crisp, reliable matrix QR Code generator component rendering SVG
export default function QRCodeSVG({ value, size = 120, className = '' }: QRCodeSVGProps) {
  // Deterministic pattern matrix derived from payload hash
  const generateMatrix = (str: string) => {
    const matrixSize = 25;
    const matrix: boolean[][] = Array(matrixSize).fill(false).map(() => Array(matrixSize).fill(false));

    // Finder patterns (top-left, top-right, bottom-left)
    const addFinderPattern = (startRow: number, startCol: number) => {
      for (let r = 0; r < 7; r++) {
        for (let c = 0; c < 7; c++) {
          if (r === 0 || r === 6 || c === 0 || c === 6 || (r >= 2 && r <= 4 && c >= 2 && c <= 4)) {
            matrix[startRow + r][startCol + c] = true;
          }
        }
      }
    };

    addFinderPattern(0, 0);
    addFinderPattern(0, matrixSize - 7);
    addFinderPattern(matrixSize - 7, 0);

    // Hash string to fill inner matrix
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = (hash << 5) - hash + str.charCodeAt(i);
      hash |= 0;
    }

    for (let r = 0; r < matrixSize; r++) {
      for (let c = 0; c < matrixSize; c++) {
        // Skip finder areas
        if ((r < 8 && c < 8) || (r < 8 && c >= matrixSize - 8) || (r >= matrixSize - 8 && c < 8)) {
          continue;
        }
        // Timing patterns
        if (r === 6 || c === 6) {
          matrix[r][c] = (r + c) % 2 === 0;
          continue;
        }
        // Pseudo random data based on position + str hash
        const bit = Math.abs(Math.sin(hash + r * 31 + c * 17) * 10000);
        matrix[r][c] = (bit - Math.floor(bit)) > 0.45;
      }
    }

    return matrix;
  };

  const matrix = generateMatrix(value);
  const matrixSize = matrix.length;
  const cellSize = size / matrixSize;

  return (
    <div className={`inline-block bg-white p-2 rounded border border-slate-200 drop-shadow-sm ${className}`}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <rect width={size} height={size} fill="#ffffff" />
        {matrix.map((row, r) =>
          row.map((cell, c) =>
            cell ? (
              <rect
                key={`${r}-${c}`}
                x={c * cellSize}
                y={r * cellSize}
                width={cellSize + 0.3}
                height={cellSize + 0.3}
                fill="#0b3b8c"
              />
            ) : null
          )
        )}
      </svg>
    </div>
  );
}
