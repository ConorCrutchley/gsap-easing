export interface GSAPFrom {
  x: number;
  y: number;
  scale: number;
  opacity: number;
  rotate: number;
  skewX: number;
  skewY: number;
}

export interface GSAPTo extends GSAPFrom {
  duration: number;
  ease: string;
}
