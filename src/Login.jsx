import React from "react";
import "./style1.css"
function Login(){
    return (
<>

<body>
       <h3 className="head1">OTP</h3>
       <h3 >Verification</h3>
       <h1>OTP has been sent</h1>
       <div style={{width:"80vw",textAlign:'center'}}>
       <input placeholder="Enter the OTP" className="box1 mx-auto"></input>
       </div>
         <div className="box" id="box2">Continue</div>
</body>



</>


    )
}
export default Login;