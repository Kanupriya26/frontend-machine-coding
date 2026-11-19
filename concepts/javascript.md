## Why does JavaScript refuse *if(x) cont a = 1;*? or Lexical statement cannot appear in a single statement?
-> (1) Its a dead code; variable gets created and destroyed within the same line.
   (2) To avoid "scope confusion" to the developers, what's the scope of variable.
Within the curly braces, variable might be used and the scope is clear.

- ?. vs ??; [] isn't null; methods on empty arrays are safe
- TDZ: const functions vs function declarations (hoisting)
- find / findIndex / some / includes
- Event bubbling, currentTarget vs target, event delegation
- Modulo wrap-around: (i + 1) % n, (i - 1 + n) % n