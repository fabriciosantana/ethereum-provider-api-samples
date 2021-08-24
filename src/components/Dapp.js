import React from "react";
import { ConnectWallet } from "./ConnectWallet";
import { EthereumProviderData } from "./EthereumProviderData";


export class Dapp extends React.Component{

    constructor(props){
        super(props);
        
        this.initialState = {
            ethereumProviderDetected: window.ethereum !== undefined?true:false,
            ethereumProviderConnected: window.ethereum.isConnected(),
            ethereumChainId: undefined,
			connectedAddress: undefined,
        };

        this.state = this.initialState;

    };

    render(){

		if (!this.state.ethereumProviderDetected){
			return (<div>Install MetaMask</div>);
		}
		else if (!this.state.ethereumProviderConnected){
			return (
				<ConnectWallet
					connect={() => this._connectWallet()}
				/>
			);
		}
		else{
			this._setEthereumChainId();
			return (
				<EthereumProviderData 
					detected={this.state.ethereumProviderDetected.toString()}
					connected={this.state.ethereumProviderConnected.toString()}
					chainId={this.state.ethereumChainId}
					address={this.state.selectedAddress}
				/>
			);
		};
    };

    async _setEthereumChainId(){
		this.setState({ethereumChainId:  await window.ethereum.request({ method: 'eth_chainId'}) });
    }

    async _connectWallet(){

		const [ selectedAddress ] = await window.ethereum.request({ method: 'eth_requestAccounts' });
		console.log(selectedAddress);
		this.setState({ ethereumProviderConnected:  window.ethereum.isConnected() });
		this.setState({ connectedAddress: selectedAddress });		
    }
   
};

