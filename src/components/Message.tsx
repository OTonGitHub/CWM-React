function Message() {
  const name = Math.random() < 0.5 ? 'OT' : '';
  return (
    <div>
      <h1>Hello World</h1>  
      {name && <p>Hello {name}</p>}
    </div>
  );
}

export default Message;