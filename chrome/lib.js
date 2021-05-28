'use strict';
// This Works is placed under the terms of the Copyright Less License,
// see file COPYRIGHT.CLL.  USE AT OWN RISK, ABSOLUTELY NO WARRANTY.

const $ = _ => document.getElementById(_);
const $R = (fn,...a) => new Promise(ok => fn(...a, ok)).then(_ => { const e=chrome.runtime.lastError; if (e) throw e; return _ });
const $E = e => document.createElement(e);
const $C = (e,c) => { e.className=c; return e };
const $A = (e,c) => { e.append(c); return e };

class Main
  {
  #e

  get e() { return this.#e }

  constructor(id)
    {
      this.#e	= $(id || 'main');
      this.#e.innerText = '';
    }
  }

