'use strict';
// This Works is placed under the terms of the Copyright Less License,
// see file COPYRIGHT.CLL.  USE AT OWN RISK, ABSOLUTELY NO WARRANTY.                                                                          

// $R(chrome.windows.getCurrent);
// $R(chrome.windows.update, id, {state:'minimized'});
class App extends Main
  {
  #me; #bbb

  bg(c) { document.body.style.backgroundColor = c || '' } 

  async main()
    {
      this.#me	= await $R(chrome.tabs.getCurrent);
      this.#bbb	= $C($E('button'), 'bbb');
      this.#bbb.onclick = _ => this.click(_);
      $A(this.e, this.#bbb);
      this.info();
    }
  async info()
    {
      let discarded = 0, discardable = 0, active = 0;
      for (const t of await $R(chrome.tabs.query, {}))
        {
          if (t.active)
            {
              active++;
//            console.log('act', t);
              continue;
            }
          if (t.discarded)
            discarded++;
          else
            discardable++;
        }
      this.#bbb.innerText = `${discardable} to discard\n${discarded} inactive\n${active} active`;
    }
  async click()
    {
      const me = this.#me.id;
      let had = 0, cnt = 0, active = 0;

      this.bg('#200');
      for (const t of await $R(chrome.tabs.query, {}))
        {
          if (t.id == me) continue;
          if (t.active)
            {
              active++;
              continue;
            }
          if (t.discarded)
            had++;
          else
            {
               cnt++;
               await $R(chrome.tabs.discard, t.id).catch(_ => _);
            }
        }
      this.bg('#000');
      this.#bbb.innerText = `${cnt} discarded\n${had} inactive\n${active} active`;
    }
  }

