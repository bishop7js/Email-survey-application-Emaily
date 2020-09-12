// SurveyField contains a logic to render a single label and text input

import React from "react";

export default ({ input, label, meta: { touched, error } }) => {
  return (
    <div>
      <div>{label}</div>
      <input {...input} /> style = {{ marginBottom: "5px" }}
      <div className="red-text" style={{ marginBottom: "20px" }}></div>
      {touched && error}
    </div>
  );
};
