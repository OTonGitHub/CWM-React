function Message() {
  const sw = Math.random() < 0.5 ? '\u0FD5' : '';
  return (
    <div style={{ display: 'flex'}}>
      <h1>Hello World</h1>
      {sw && <span>{sw}</span>}
    </div>
  );
}

export default Message;