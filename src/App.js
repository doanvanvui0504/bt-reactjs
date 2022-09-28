import Alert from "./Alert";
import ListStudents from "./ListStudents";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Alert text="Đây là thông báo được truyền vào props của Alert Component" />
      <ListStudents />
    </div>
  );
}

export default App;
