import React from 'react';

function SignupProgress() {
  return (
    <div className="SignupProgress">
      <p>Step 1 of 3</p>
      <progress value="33" max="100"> 33% </progress>
    </div>
  );
}

export default SignupProgress;
