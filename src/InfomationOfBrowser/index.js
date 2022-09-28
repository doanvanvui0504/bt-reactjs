import React from "react";

class InformationOfBrowser extends React.Component {
  render() {
    return (
      <>
        <h4>Browser's detail: {navigator.userAgent}</h4>
      </>
    );
  }
}

export default InformationOfBrowser;
