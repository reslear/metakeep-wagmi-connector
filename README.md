# metakeep-wagmi-connector

[![Version](https://img.shields.io/npm/v/@reslear/metakeep-wagmi-connector)](https://www.npmjs.com/package/@reslear/metakeep-wagmi-connector)
[![Downloads](https://img.shields.io/npm/dt/@reslear/metakeep-wagmi-connector)](https://www.npmjs.com/package/@reslear/metakeep-wagmi-connector)
[![License](https://img.shields.io/npm/l/@reslear/metakeep-wagmi-connector)](https://www.npmjs.com/package/@reslear/metakeep-wagmi-connector)

[publint](https://publint.dev/@reslear/metakeep-wagmi-connector) | 
[arethetypeswrong](https://arethetypeswrong.github.io/?p=%40reslear%2Fmetakeep-wagmi-connector)


Connector for integrating [wagmi v2.x](https://wagmi.sh/) with the [MetaKeep.xyz](https://metakeep.xyz/) platform provided by PassbirdCo. 

Features:
- Connects with Wagmi v2 (React/Core/Vue [use-wagmi](https://github.com/unicape/use-wagmi))
- Supports (Web3Modal) [web3-react](https://docs.walletconnect.com/web3modal/about)

## Installation

You can install **metakeep-wagmi-connector** using npm, yarn, or pnpm:


```bash
pnpm add @reslear/metakeep-wagmi-connector
```

Once installed, add **metakeep** to your wagmi configuration as a connector. Here's a sample configuration:

```ts
import { metaKeep } from '@reslear/metakeep-wagmi-connector';

const config = createConfig({
  // ...
  connectors: [
    metaKeep({
      appId: import.meta.env.VITE_META_KEEP_APP_ID,
    }),
  ],
})
```

Make sure to set the `appId` in your environment variables, for example in a `.env` file:


```env
VITE_META_KEEP_APP_ID=your-app-id
```

Enjoy!

## Usage

The connector will automatically handle the authentication process with wagmi. see the [wagmi documentation](https://wagmi.sh/) for more information.

```ts
const { connect } = useConnect()

connect({ connector: 'metakeep' })
```

### Metakeep Provider access

You can use the [useAccount](https://wagmi.sh/react/api/hooks/useAccount#connector) hook to access the native connector provider.


> [!WARNING] 
> Use this only if you know what you're doing. Instead, it's better to utilize methods at the wagmi level.


```ts
import type { MetaKeepProvider } from '@reslear/metakeep-wagmi-connector'

const { connector } = useAccount()

const provider = <MetaKeepProvider>await connector.value?.getProvider()

const authorizedUser = provider.getUser()
console.log(authorizedUser)
```



## Migration Guide


1. Follow the installation steps [Wagmi migrate from v1 to v2](https://wagmi.sh/react/guides/migrate-from-v1-to-v2).
2. Update the `@reslear/metakeep-wagmi-connector` to the latest version.
3. Update the connector configuration to use the new import

```diff

-import { MetaKeepConnector } from '@reslear/metakeep-wagmi-connector';
+import { metaKeep } from '@reslear/metakeep-wagmi-connector'
```

4. Update the connector configuration to use the new import

```diff
  connectors: [
-    new MetaKeepConnector({
-     chains,
-      options: {
-        appId: import.meta.env.VITE_META_KEEP_APP_ID,
-      },
-    }),
+   metaKeep({
+     appId: import.meta.env.VITE_META_KEEP_APP_ID,
+   }),
  ],
```

Also connector for Wagmi v1 docs are still available at [0.x branch](https://github.com/reslear/metakeep-wagmi-connector/tree/0.x)


## Links
- https://docs.metakeep.xyz/reference/web3-provider
- https://github.com/PassbirdCo

# Related connectors
- https://wagmi.sh/dev/creating-connectors
- https://github.com/blocto/blocto-sdk/blob/develop/adapters/wagmi-connector/src/connector.ts
- https://github.com/magiclabs/wagmi-magic-connector/blob/main/src/lib/connectors/dedicatedWalletConnector.ts
- https://github.com/Web3Auth/web3auth-wagmi-connector/blob/master/src/lib/connector.ts

## License
This project is licensed under the terms of the [MIT license](LICENSE).
