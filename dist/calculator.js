function calculator(n,u,t){let r=u;for(const o of t)r=n(r,o);return r}function sum(n,u){return n+u}function minus(n,u){return n-u}function multiply(n,u){return n*u}function divider(n,u){return n/u}result=calculator(sum,48,[3,2]),console.log(result);