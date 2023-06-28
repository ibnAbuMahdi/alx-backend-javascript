export default function guardrail(mathFunction) {
  const queue = [];
  try {
    queue[queue.length] = mathFunction();
  } catch (e) {
    queue[queue.length] = e.toString();
  } finally {
    queue[queue.length] = 'Guardrail was processed';
  }
  return queue;
}
