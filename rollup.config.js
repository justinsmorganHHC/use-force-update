import { RollupConfig } from '@monorepo-template/rollup-config';

export default new RollupConfig()
  .setTSConfigPath('./tsconfig.rollup.json')
  .toJSON();
