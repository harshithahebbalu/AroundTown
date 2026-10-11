# AroundTown

AroundTown is a small, buildless Portland discovery app. It includes daily date filters, sample event listings, rotating hike ideas, a kids-friendly filter, event details, a saved day plan, overlap notices, and `.ics` calendar downloads. Plans are stored in the browser with `localStorage`.

## Run it locally

You only need Python 3. From this folder, run:

```powershell
py -m http.server portno --directory dist
```

Then open <http://localhost:portno>. Stop the server with `Ctrl+C`.

You can also open `dist/index.html` directly, though a local server gives the browser a more consistent storage and download experience. There are no build steps or package dependencies.

## Project files

- `dist/index.html` contains the page structure.
- `dist/styles.css` contains the responsive visual styles.
- `dist/app.js` contains the sample event data and browser interactions.
- `.openai/hosting.json` configures the static Site build.

All event data and hike ideas are illustrative demo content, not a live Portland event feed or a statement about current trail conditions. Sample dates are generated from the current date. A useful next step is replacing the `EVENTS` array in `dist/app.js` with a real data source while keeping the same event fields.
