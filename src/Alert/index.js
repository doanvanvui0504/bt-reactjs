function Alert({ text }) {
  return (
    <div class="alert alert-warning" role="alert">
      {text ? text : null}
    </div>
  );
}

export default Alert;
