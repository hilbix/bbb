> This works, but is not at a point to release it officially

# Big Black Button

A Chrome Extension which replaces the `New Tabs` page with just one Big Black Button.

Pressing this button discards all of your non-foreground Tabs from memory.

> **Attention!**  Pressing this button discards all your unsaved edits, too!
>
> If you do not like that, use setup to enable confirmation.


## Usage

	git clone https://github.com/hilbix/bbb.git

Then

- Open chrome://extensions/
- Enable "Developer mode" (on the right top)
- Click "Load unpacked"
  - Navigate to directory `bbb/chrome`
  - Click "Open"

Now open a new page.

> In future you might find BBB in the Chrome Web Store, too.
>
> However this isn't easy as Chrome Web Store asks me too many details, such that I am a bit overwhelmed currently.


## What it does

It replaces the New-Tab page to just show a BBB.

> In future you might be able to add more things via configuration.

When you press the BBB it simply tells Chrome to discard all TABs which are not in foreground.
It's as easy as this.  Just a few lines of code.

> More complex fixes might be added to BBB in future.


## FAQ

BBB pages are replaced by the standard page after a Chrome restart

- Sorry, but I cannot help here because this is a Chrome bug.
- Extensions often take ages to load, and as long as the `manifest.json` is not activated by Chrome, BBB has no way to inject the new tab page.

> In future BBB might detect this and opening a new TAB and then pressing the BBB should fix it.

Why black?

- Black Matters, but this is not why.
- Black background usually saves energy these days.
- In future you probably can change the colors in setup.  (Is there a comprehensive good public domain open source color chooser out there?)

License?

- Free as free beer, free speech and free baby.

Contact?  Question?

- Open Issue on GitHub.
- Perhaps I listen.

Contrib?  Patches?

- Stick to the License, waive all Copyrights!
- Then send PR on GH.
- Perhaps I listen.

Firefox?

- Sorry, I do currently do not use FF for development because it still lacks JavaScript private class fields.
- Also I am not sure FF has similar features for discarding TABs.

Framework?  Lib?

- BBB must be kept as small as possible.
- I hate minifiers because I hate unreadable code.  Unreadable for me, not for you.
- Hence no bloat and only those parts which are really needed.

Save/Load?

- Currently BBB has no configuration.  In future BBB will use four JSON structures for configuration:
  - A default one which is builtin
  - A global one (which you you can save and load)
  - A local one (which you can save and load as well)
  - A temporary one (which probably can only be shown)
- You can display each one and copy it out or (if supported)
- As I do not use Chrome Sync, I cannot implement this.
  - But patches are welcome, as long as they are small and stick to the license

Mobile?

- Never tested
- Not in my scope

Languages?

- Currently mostly English.  (The Datenschutzerklärung ist in German, though.)
- If you know an easy way to translate, go for it and send Patches.

Code of Conduct?

- Uncensored truthy open speech of course!  Can it be any different?
- Hence fuck all Codes of Conduct.  Also fuck all Political Correctness.  And while you are on it, fuck all Gendering as well!
- All these distort open speech and ultimatively make speech become fake news and lies only, until there is no more truth left at all.
- Note that hate speech is neither open nor truthy, so it is unacceptable still.
- BTW truth is out there, but not a single one.  Please keep that in mind.

Safety?

- AFAICS BBB is safe to use.
  - ~~If you are concerned, enable confirmation option.~~ (Not yet implemented.)
- I do not give any guarantee that it does not harm data.
  - Discarding Tabs can harm unsaved data.
- I guarantee following:
  - I will never trojan the extension myself
  - I will never sell the extension to anybody else
  - I will never give anybody else control over the extension (you can fork it)
- I cannot protect against following:
  - Anybody breaks into my cloud and takes over control against my will.
  - My systems get trojaned and hence the extension gets updated outside of my control.
  - However such a case will be handed over to officials!
  - And I will do this publicly (as soon as this will not harm investigation).

