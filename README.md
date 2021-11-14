# How to deploy to Rinkeby blockchain👀

- Run `git clone https://github.com/Vampo7152/Contract-Billboard`
- Then `cd billboard-nft-contract`
- Run `npm install`
- Create a `secrets.json` in root directory
- Copy and Paste contents of `secrets.example.json` to `secrets.json`
- Put In Your Alchemy Key and Wallets Secret Key
- Run `npx hardhat run scripts/deploy.js --network rinkeby`
- Good to go 😎
- Don't forget to copy the `Contract Address` which will be available in your Terminal after contract deployment. Paste it in a safe place as we be using it for our frontend.
