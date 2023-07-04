export default function creteInt8TypedArray(l, p, v) {
  if (typeof l === 'number' && typeof p === 'number' && typeof v === 'number' && p < l) {
    const buf = new ArrayBuffer(l);
    const int8view = new DataView(buf);
    int8view.setInt8(p, v);
    return int8view;
  }
  throw new Error('Position outside range');
}
