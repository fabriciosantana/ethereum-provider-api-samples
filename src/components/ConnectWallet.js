import React from "react";

export function ConnectWallet( {connect}){
    return (
        <div>
            <button onClick={connect}>Connect to Wallet</button>
        </div>
    );
}