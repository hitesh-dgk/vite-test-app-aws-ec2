// import type { Address } from 'wagmi';
import { type Connector } from 'wagmi';

import { getDataProtectorClient } from './dataProtectorClient';
import { protectedDataTargetKey } from '../constants.ts';

export async function getExistingProtectedEmails({
  userAddress, connector
}: {
  userAddress: string;
  connector: Connector | undefined
}) {
  const dataProtector = await getDataProtectorClient(connector);
  return dataProtector.fetchProtectedData({
    owner: userAddress,
    requiredSchema: {
      [protectedDataTargetKey]: 'boolean',
    },
  });
}