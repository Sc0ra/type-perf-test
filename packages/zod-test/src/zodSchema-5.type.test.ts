import { A } from 'ts-toolbelt';
import { z } from 'zod';

import { zodSchema } from '@type-perf-test/schemas';

type Schema = z.infer<typeof zodSchema>;

type Check = A.Extends<
  'INITIAL_ALLOCATION_VALIDATION_RECEIVED',
  Schema['eventType']
>;

const check: Check = 1;
check;
