import { FromSchema } from 'json-schema-to-ts';
import { A } from 'ts-toolbelt';

import { jsonSchema } from '@type-perf-test/schemas';

type Schema = FromSchema<typeof jsonSchema>;

type Check = A.Extends<'CONTRACT_CREATED', Schema['eventType']>;

const check: Check = 1;
check;
