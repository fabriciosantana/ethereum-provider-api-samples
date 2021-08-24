import React from "react";

export function EthereumProviderData({ detected, connected, chainId, address }){
    return (
        <div>
                <div>Ethereum detected:{detected.toString()}</div>
                <div>Ethereum connected: {connected.toString()}</div>
                <div>Ethereum chain Id: {chainId}</div>
                <div>Connected Address: {address}</div>
        </div>
    );
}