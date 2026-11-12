## Why does JavaScript refuse *if(x) cont a = 1;*? or Lexical statement cannot appear in a single statement?
-> (1) Its a dead code; variable gets created and destroyed within the same line.
   (2) To avoid "scope confusion" to the developers, what's the scope of variable.
Within the curly braces, variable might be used and the scope is clear.