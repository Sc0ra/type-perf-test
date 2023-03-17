import { A } from 'ts-toolbelt';
import { z } from 'zod';

import { schema } from 'schema';

type Schema = z.infer<typeof schema>;

type Check = A.Extends<'CONTRACT_CREATED', Schema['eventType']>;

const check: Check = 1;
check;
