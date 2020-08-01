# Gogh

Gogh is a npm package designed to produce gradient colour pallettes for a given number of chunks.

## Installation: 

`npm install --save gogh-gradient` 

## Usage:
```javascript
import { gogh } from "gogh-gradient" 

// returns an array (of size n) of hex values between startHex and endHex 
const res = gogh(startHex, endHex, n)
```
