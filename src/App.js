import InformationOfBrowser from "./InfomationOfBrowser";
import InformationOfStudents from "./InformationOfStudents";
import ProfileCard from "./ProfileCard";

import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import SignInForm from "./SignInForm";

function App() {
  return (
    <div className="App">
      <InformationOfBrowser />
      <InformationOfStudents />
      <ProfileCard />
      <SignInForm />
    </div>
  );
}

export default App;
