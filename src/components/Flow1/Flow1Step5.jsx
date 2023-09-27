import React from 'react';

function Flow1Step5({ data }) {
  return (
    <div>
      <h2>Step 4: Summary</h2>
      <p>First RB: {data.requestBody1.sku}</p>
      <p>Second RB: {data.requestBody2.regular_price}</p>
      {/* You can add a submit button here to send the data to your backend */}
    </div>
  );
}

export default Flow1Step5;
