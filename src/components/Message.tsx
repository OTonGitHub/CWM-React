export default function Message() {
  const sw = Math.random() < 0.9 ? '\u0FD5' : '';
  return (
    <div className="flex items-center gap-2 mb-6">
      <h1 className="text-3xl font-bold">Hello World</h1>
      {sw && <span className="text-2xl">{sw}</span>}
    </div>
  );
}