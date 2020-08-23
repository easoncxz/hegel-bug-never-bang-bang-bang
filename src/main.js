
import { foo } from './foo';
import { chalkUp } from './chalk-things';

export function main() {
  return chalkUp(foo());
}

main();
