import { FromSchema } from 'json-schema-to-ts';
import { A } from 'ts-toolbelt';

import { schema } from 'schema';

type Schema = FromSchema<typeof schema>;

type Check = A.Extends<'CONTRACT_CREATED', Schema['eventType']>;

const check: Check = 1;
check;
