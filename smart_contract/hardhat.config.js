//https://eth-ropsten.alchemyapi.io/v2/zfYiSrKxDUdFVhsbnq8BDBbh_N9LNAkt

require('@nomiclabs/hardhat-waffle')

module.exports = {
	solidity: '0.8.0',
	networks: {
		ropsten: {
			url: 'https://eth-ropsten.alchemyapi.io/v2/zfYiSrKxDUdFVhsbnq8BDBbh_N9LNAkt',
			accounts: [
				'c7b3e1f4a089151536ccdca2fd0408161c9db904fca9b4c43588773c0817680d',
			],
		},
	},
}
