import type { Principal } from '@dfinity/principal';
export interface _SERVICE {
  'getA' : () => Promise<bigint>,
  'getB' : () => Promise<bigint>,
  'voteA' : () => Promise<bigint>,
  'voteB' : () => Promise<bigint>,
}
