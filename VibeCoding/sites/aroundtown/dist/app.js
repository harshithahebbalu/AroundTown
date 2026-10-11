const today = new Date();
const saturdayOffset = today.getDay() === 0 ? -1 : (6 - today.getDay() + 7) % 7;
const thisSaturday = new Date(today.getFullYear(), today.getMonth(), today.getDate() + saturdayOffset);
function weekendDate(weekOffset, dayOffset = 0) {
  const date = new Date(thisSaturday);
  date.setDate(date.getDate() + weekOffset * 7 + dayOffset);
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}
function dateOffset(dayOffset) {
  const date = new Date(today.getFullYear(), today.getMonth(), today.getDate() + dayOffset);
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}
const TRAIL_IDEAS = [
  { key: "tabor-loop", title: "Mount Tabor Family Loop", venue: "Mount Tabor Park", neighborhood: "Mount Tabor", start: "10:00", end: "11:30", price: "Free", art: "art-outdoors", emoji: "🥾", note: "Easygoing trail", kidFriendly: true, description: "A sample self-guided outing for fresh air, wide paths, and a little hilltop exploring." },
  { key: "hoyt-discovery", title: "Hoyt Arboretum Discovery Walk", venue: "Hoyt Arboretum", neighborhood: "Washington Park", start: "09:30", end: "11:00", price: "Free", art: "art-market", emoji: "🌲", note: "Kids welcome", kidFriendly: true, description: "A sample family walk among big trees, with time to spot interesting leaves along the way." },
  { key: "tryon-treasure", title: "Tryon Creek Trail Treasure Hunt", venue: "Tryon Creek State Natural Area", neighborhood: "SW Portland", start: "10:00", end: "12:00", price: "Free", art: "art-garden", emoji: "🧭", note: "Trail adventure", kidFriendly: true, description: "A sample trail idea: follow a simple nature checklist and look for small woodland details." },
  { key: "powell-viewpoint", title: "Powell Butte Viewpoint Hike", venue: "Powell Butte Nature Park", neighborhood: "Outer Southeast", start: "09:00", end: "11:00", price: "Free", art: "art-outdoors", emoji: "⛰️", note: "A bigger climb", kidFriendly: true, description: "A sample outing with a steady climb and a big-sky viewpoint. Pick a route that fits your group." },
  { key: "rocky-butte", title: "Rocky Butte Steps & Skyline", venue: "Rocky Butte Natural Area", neighborhood: "Maywood Park", start: "16:00", end: "17:30", price: "Free", art: "art-night", emoji: "🌄", note: "More adventurous", kidFriendly: false, description: "A sample steeper outing for confident walkers. Check current trail and access conditions before heading out." },
];
const DAILY_ADVENTURES = Array.from({ length: 14 }, (_, offset) => {
  const idea = TRAIL_IDEAS[offset % TRAIL_IDEAS.length];
  const date = dateOffset(offset);
  return { ...idea, id: `${idea.key}-${date}`, category: "Outdoors", kind: "Hike idea", date };
});
const EVENTS = [
  { id: "harvest-table", title: "Harvest Table on the Waterfront", category: "Food", date: weekendDate(0,1), start: "11:00", end: "16:00", venue: "Waterfront Park", neighborhood: "Downtown", price: "Free", art: "art-food", emoji: "🥕", description: "A long-table celebration of autumn produce, neighborhood cooks, and the people who grow our food.", note: "Bring your appetite", kidFriendly: true },
  { id: "makers-market", title: "Makers & Farmers Market", category: "Markets", date: weekendDate(0, 1), start: "09:00", end: "14:00", venue: "The Redd on Salmon", neighborhood: "Central Eastside", price: "Free", art: "art-market", emoji: "🌼", description: "Fresh flowers, small-batch pantry finds, and handmade things from around the city.", note: "Shop local", kidFriendly: true },
  { id: "rose-city-jazz", title: "Rose City Jazz at Dusk", category: "Music", date: weekendDate(0, 1), start: "18:00", end: "20:00", venue: "Tom McCall Waterfront Park", neighborhood: "Downtown", price: "Free", art: "art-music", emoji: "🎷", description: "An easygoing open-air set from a local quartet as the river turns gold.", note: "Outdoor sounds" },
  { id: "lantern-garden", title: "Lanterns in the Garden", category: "Art", date: weekendDate(0, 1), start: "19:00", end: "21:00", venue: "Lan Su Chinese Garden", neighborhood: "Old Town", price: "$18", art: "art-garden", emoji: "🏮", description: "Wander quiet garden paths after dark, with glowing lanterns and tea by the water.", note: "A little magic" },
  { id: "alberta-art-walk", title: "Alberta Street Art Walk", category: "Art", date: weekendDate(0, 1), start: "11:00", end: "15:00", venue: "NE Alberta Street", neighborhood: "Alberta Arts District", price: "Free", art: "art-art", emoji: "🎨", description: "Meet makers, peek into neighborhood studios, and find a new favorite mural.", note: "Take a stroll", kidFriendly: true },
  { id: "cathedral-market", title: "St. Johns Harvest Market", category: "Markets", date: weekendDate(0, 1), start: "10:00", end: "14:00", venue: "Cathedral Park", neighborhood: "St. Johns", price: "Free", art: "art-outdoors", emoji: "🍎", description: "A relaxed riverside market with seasonal produce, baked treats, and local music.", note: "Market morning", kidFriendly: true },
  { id: "mississippi-bites", title: "Bike, Bites & Mississippi", category: "Food", date: weekendDate(0, 1), start: "12:00", end: "15:30", venue: "N Mississippi Avenue", neighborhood: "Boise", price: "$12", art: "art-night", emoji: "🚲", description: "A self-guided neighborhood ride with tasty stops and plenty of places to linger.", note: "Explore by bike" },
  { id: "fall-film", title: "The Neighborhood Film Picnic", category: "Outdoors", date: weekendDate(1), start: "17:30", end: "20:30", venue: "Laurelhurst Park", neighborhood: "Laurelhurst", price: "Free", art: "art-garden", emoji: "🎬", description: "Bring a blanket for an outdoor short-film program and a cozy picnic at sunset.", note: "Bring a blanket" },
  { id: "bread-day", title: "Good Bread, Good Day", category: "Food", date: weekendDate(1, 1), start: "10:00", end: "14:00", venue: "Director Park", neighborhood: "Downtown", price: "$5", art: "art-food", emoji: "🥖", description: "A neighborhood bake sale with bread, pastries, coffee, and a few friendly demos.", note: "Fresh from the oven" },
  { id: "print-fair", title: "Little Press Print Fair", category: "Art", date: weekendDate(1, 1), start: "11:00", end: "16:00", venue: "Portland Art Museum courtyard", neighborhood: "South Park Blocks", price: "Free", art: "art-art", emoji: "🖼️", description: "Browse prints, zines, and illustrated oddities from independent local artists.", note: "Meet the artists" },
  ...DAILY_ADVENTURES,
];

const PLAN_KEY = "aroundtown.plan.v1";
const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
let selectedCategory = "All";
let kidsOnly = false;
let activeView = "discover";
let toastTimer;

function loadPlan() {
  try {
    const saved = JSON.parse(localStorage.getItem(PLAN_KEY) || "[]");
    return Array.isArray(saved) ? saved.filter((id) => EVENTS.some((event) => event.id === id)) : [];
  } catch { return []; }
}
let planIds = loadPlan();
function savePlan() {
  try { localStorage.setItem(PLAN_KEY, JSON.stringify(planIds)); } catch { showToast("Your browser could not save this plan."); }
  renderCount();
}
function renderCount() { $("#nav-plan-count").textContent = String(planIds.length); }
function eventDate(date, options = { weekday: "short", month: "short", day: "numeric" }) {
  return new Intl.DateTimeFormat("en-US", { ...options, timeZone: "UTC" }).format(new Date(`${date}T12:00:00Z`));
}
function setupDateFilter() {
  const input = $("#date-filter");
  input.value = dateOffset(0);
  input.addEventListener("click", () => {
    if (typeof input.showPicker === "function") {
      try { input.showPicker(); } catch { /* Native input remains available. */ }
    }
  });
}
function renderDateLabel() {
  const date = $("#date-filter").value;
  $("#date-filter-label").textContent = !date ? "Any upcoming day" : `${date === dateOffset(0) ? "Today" : date === dateOffset(1) ? "Tomorrow" : eventDate(date, { weekday: "long" })} · ${eventDate(date, { month: "short", day: "numeric" })}`;
}
function timeLabel(time) {
  const [hour, minute] = time.split(":").map(Number);
  return new Intl.DateTimeFormat("en-US", { hour: "numeric", minute: "2-digit", timeZone: "UTC" }).format(new Date(Date.UTC(2020, 0, 1, hour, minute)));
}
function categoryName(category) { return ({ Food: "Food & drink", Markets: "Markets", Music: "Music", Art: "Art & culture", Outdoors: "Outdoors" })[category] || category; }
function selectedDateRange() { return $("#date-filter").value || "all"; }
function searchTerm() { return $("#search-input").value.trim().toLocaleLowerCase(); }
function visibleEvents() {
  const date = selectedDateRange();
  const query = searchTerm();
  return EVENTS.filter((event) => {
    const dateMatch = date === "all" || event.date === date;
    const categoryMatch = selectedCategory === "All" || event.category === selectedCategory;
    const familyMatch = !kidsOnly || event.kidFriendly;
    const textMatch = !query || [event.title, event.category, event.venue, event.neighborhood, event.description].join(" ").toLocaleLowerCase().includes(query);
    return dateMatch && categoryMatch && familyMatch && textMatch;
  });
}
function eventCard(event) {
  const saved = planIds.includes(event.id);
  return `<article class="event-card">
    <div class="event-art ${event.art}" role="img" aria-label="Illustration for ${escapeHTML(event.title)}"><span class="art-emoji" aria-hidden="true">${event.emoji}</span><span class="art-badge">${escapeHTML(event.note)}</span><button class="heart-button ${saved ? "saved" : ""}" data-action="toggle-plan" data-id="${event.id}" aria-label="${saved ? "Remove from" : "Add to"} My plans">${saved ? "♥" : "♡"}</button></div>
    <div class="event-body"><div class="event-meta">${escapeHTML(event.kind || categoryName(event.category))} <span class="meta-dot"></span> ${eventDate(event.date)} ${event.kidFriendly ? '<span class="family-tag">Kids welcome</span>' : ""}</div>
      <button class="event-title" data-action="details" data-id="${event.id}">${escapeHTML(event.title)}</button>
      <p class="event-description">${escapeHTML(event.description)}</p>
      <div class="event-location"><span>⌖</span><span>${escapeHTML(event.venue)} · ${escapeHTML(event.neighborhood)}</span></div>
      <div class="card-bottom"><span class="event-price">${event.price} <small>· ${timeLabel(event.start)}</small></span><button class="add-button ${saved ? "added" : ""}" data-action="toggle-plan" data-id="${event.id}">${saved ? "✓ In your plan" : "+ Add to plan"}</button></div>
    </div>
  </article>`;
}
function renderEvents() {
  renderDateLabel();
  const events = visibleEvents();
  $("#event-grid").innerHTML = events.map(eventCard).join("");
  $("#event-grid").classList.toggle("hidden", events.length === 0);
  $("#no-results").classList.toggle("hidden", events.length > 0);
  const date = selectedDateRange();
  $("#results-title").textContent = date === "all" ? "Every day has a little possibility" : date === dateOffset(0) ? "Today, around Portland" : date === dateOffset(1) ? "Tomorrow, around Portland" : `${eventDate(date, { weekday: "long", month: "long", day: "numeric" })} around Portland`;
  $("#results-subtitle").textContent = events.length ? "Local events, trail ideas, and little adventures to choose from" : "Try another day or clear a filter to see more ideas";
  $("#results-count").textContent = `${events.length} ${events.length === 1 ? "idea" : "ideas"}`;
}
function sortedPlan() { return planIds.map((id) => EVENTS.find((event) => event.id === id)).filter(Boolean).sort((a, b) => `${a.date}${a.start}`.localeCompare(`${b.date}${b.start}`)); }
function eventOverlapWarnings(events) {
  const warnings = [];
  for (let i = 0; i < events.length; i++) for (let j = i + 1; j < events.length; j++) {
    const a = events[i], b = events[j];
    if (a.date !== b.date) continue;
    const startA = a.start, endA = a.end, startB = b.start, endB = b.end;
    if (startA < endB && startB < endA) warnings.push(`${a.title} overlaps with ${b.title}.`);
  }
  return warnings;
}
function renderPlans() {
  const events = sortedPlan();
  const target = $("#plan-content");
  if (!events.length) {
    target.innerHTML = `<div class="plan-empty"><span>✳</span><h2>Your next good day starts here.</h2><p>Add an event you like and it will be waiting for you here.</p><button class="button button-dark" data-action="discover">Explore events</button></div>`;
    return;
  }
  const warnings = eventOverlapWarnings(events);
  const dateGroups = [...new Set(events.map((event) => event.date))];
  const dateSummary = dateGroups.map((date) => eventDate(date)).join(" · ");
  target.innerHTML = `<div class="plan-toolbar"><div><div class="plan-date-title">${dateSummary}</div><p>${events.length} ${events.length === 1 ? "stop" : "stops"} in your plan · saved on this device</p></div><div class="plan-actions"><button class="button button-outline" data-action="clear-plan">Clear plan</button><button class="button button-green" data-action="download-plan">↧ Add plan to calendar</button></div></div>
    ${warnings.map((warning) => `<div class="plan-warning">◷ ${escapeHTML(warning)} Consider adjusting your day.</div>`).join("")}
    <div class="plan-list">${events.map((event) => `<article class="plan-item"><div class="plan-thumb ${event.art}" aria-hidden="true">${event.emoji}</div><div class="plan-item-info"><h3>${escapeHTML(event.title)}</h3><p>${eventDate(event.date)} · ${timeLabel(event.start)}–${timeLabel(event.end)} · ${escapeHTML(event.venue)}</p></div><div class="plan-item-actions"><button class="add-button" data-action="download-event" data-id="${event.id}">↧ Calendar</button><button class="remove-button" data-action="toggle-plan" data-id="${event.id}" aria-label="Remove ${escapeHTML(event.title)} from plan">×</button></div></article>`).join("")}</div>`;
}
function setView(view) {
  activeView = view;
  $("#discover-view").classList.toggle("hidden", view !== "discover");
  $("#plans-view").classList.toggle("hidden", view !== "plans");
  $$(".nav-link").forEach((button) => button.classList.toggle("active", button.dataset.view === view));
  if (view === "plans") renderPlans();
  window.scrollTo({ top: 0, behavior: "smooth" });
}
function togglePlan(id) {
  if (planIds.includes(id)) { planIds = planIds.filter((item) => item !== id); showToast("Removed from your plan"); }
  else { planIds.push(id); showToast("Added to My plans"); }
  savePlan(); renderEvents();
  if (activeView === "plans") renderPlans();
}
function showDetails(id) {
  const event = EVENTS.find((item) => item.id === id);
  if (!event) return;
  const saved = planIds.includes(id);
  $("#dialog-content").innerHTML = `<div class="dialog-art ${event.art}" aria-hidden="true">${event.emoji}</div><div class="dialog-body"><div class="event-meta">${escapeHTML(event.kind || categoryName(event.category))} <span class="meta-dot"></span> SAMPLE IDEA ${event.kidFriendly ? '<span class="family-tag">Kids welcome</span>' : ""}</div><h2 id="dialog-title">${escapeHTML(event.title)}</h2><p class="dialog-description">${escapeHTML(event.description)}</p><div class="detail-list"><div class="detail-cell"><small>When</small><strong>${eventDate(event.date, { weekday: "long", month: "long", day: "numeric" })}<br />${timeLabel(event.start)}–${timeLabel(event.end)}</strong></div><div class="detail-cell"><small>Admission</small><strong>${event.price}</strong></div><div class="detail-cell"><small>Where</small><strong>${escapeHTML(event.venue)}</strong></div><div class="detail-cell"><small>Neighborhood</small><strong>${escapeHTML(event.neighborhood)}</strong></div></div><div class="dialog-actions"><button class="button ${saved ? "button-outline" : "button-green"}" data-action="toggle-plan" data-id="${event.id}">${saved ? "✓ In your plan" : "+ Add to My plans"}</button><button class="button button-outline" data-action="download-event" data-id="${event.id}">↧ Calendar file</button></div></div>`;
  if (!$("#event-dialog").open) $("#event-dialog").showModal();
}
function showToast(message) {
  const toast = $("#toast"); toast.textContent = message; toast.classList.add("show");
  clearTimeout(toastTimer); toastTimer = setTimeout(() => toast.classList.remove("show"), 2200);
}
function escapeHTML(value) { return String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]); }
function icsEscape(value) { return String(value).replace(/\\/g, "\\\\").replace(/\n/g, "\\n").replace(/,/g, "\\,").replace(/;/g, "\\;"); }
function localPacificToUTC(date, time) {
  const [year, month, day] = date.split("-").map(Number);
  const [hour, minute] = time.split(":").map(Number);
  const desired = Date.UTC(year, month - 1, day, hour, minute);
  let candidate = desired;
  for (let tries = 0; tries < 3; tries++) {
    const parts = new Intl.DateTimeFormat("en-US", { timeZone: "America/Los_Angeles", year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", hourCycle: "h23" }).formatToParts(new Date(candidate));
    const values = Object.fromEntries(parts.map((part) => [part.type, part.value]));
    const observed = Date.UTC(Number(values.year), Number(values.month) - 1, Number(values.day), Number(values.hour), Number(values.minute));
    const delta = desired - observed;
    candidate += delta;
    if (delta === 0) break;
  }
  return new Date(candidate).toISOString().replace(/[-:]/g, "").replace(/\.\d{3}Z$/, "Z");
}
function downloadCalendar(events) {
  if (!events.length) return;
  const stamp = new Date().toISOString().replace(/[-:]/g, "").replace(/\.\d{3}Z$/, "Z");
  const lines = ["BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//AroundTown//Portland Planner//EN", "CALSCALE:GREGORIAN", "METHOD:PUBLISH", "X-WR-CALNAME:AroundTown Plan", "X-WR-TIMEZONE:America/Los_Angeles"];
  for (const event of events) {
    lines.push("BEGIN:VEVENT", `UID:${event.id}@aroundtown.local`, `DTSTAMP:${stamp}`, `DTSTART:${localPacificToUTC(event.date, event.start)}`, `DTEND:${localPacificToUTC(event.date, event.end)}`, `SUMMARY:${icsEscape(event.title)}`, `LOCATION:${icsEscape(`${event.venue}, Portland, OR`)}`, `DESCRIPTION:${icsEscape(`${event.description} Sample listing from AroundTown.`)}`, "END:VEVENT");
  }
  lines.push("END:VCALENDAR");
  const blob = new Blob([lines.join("\r\n")], { type: "text/calendar;charset=utf-8" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = events.length === 1 ? `${events[0].id}.ics` : "aroundtown-plan.ics";
  document.body.append(link); link.click(); link.remove(); URL.revokeObjectURL(link.href);
  showToast(events.length === 1 ? "Calendar file downloaded" : "Your plan calendar file is ready");
}

document.addEventListener("click", (event) => {
  const action = event.target.closest("[data-action]");
  if (!action) {
    const viewButton = event.target.closest("[data-view]");
    if (viewButton) setView(viewButton.dataset.view);
    return;
  }
  const { action: name, id } = action.dataset;
  if (name === "toggle-plan") { togglePlan(id); if ($("#event-dialog").open) showDetails(id); }
  if (name === "details") showDetails(id);
  if (name === "discover") setView("discover");
  if (name === "download-event") downloadCalendar(EVENTS.filter((item) => item.id === id));
  if (name === "download-plan") downloadCalendar(sortedPlan());
  if (name === "clear-plan") { planIds = []; savePlan(); renderPlans(); renderEvents(); showToast("Plan cleared"); }
});
$("#category-filters").addEventListener("click", (event) => {
  const button = event.target.closest("[data-category]");
  if (!button) return;
  selectedCategory = button.dataset.category;
  $$(".category-chip").forEach((chip) => chip.classList.toggle("selected", chip === button));
  renderEvents();
});
$("#search-input").addEventListener("input", renderEvents);
$("#date-filter").addEventListener("change", renderEvents);
$("#kids-filter").addEventListener("click", () => {
  kidsOnly = !kidsOnly;
  $("#kids-filter").classList.toggle("selected", kidsOnly);
  $("#kids-filter").setAttribute("aria-pressed", String(kidsOnly));
  renderEvents();
});
$("#reset-filters").addEventListener("click", () => {
  $("#search-input").value = ""; $("#date-filter").value = dateOffset(0); selectedCategory = "All"; kidsOnly = false;
  $$(".category-chip").forEach((chip) => chip.classList.toggle("selected", chip.dataset.category === "All"));
  $("#kids-filter").setAttribute("aria-pressed", "false"); renderEvents();
});
$("#empty-reset").addEventListener("click", () => $("#reset-filters").click());
$("#dialog-close").addEventListener("click", () => $("#event-dialog").close());
$("#event-dialog").addEventListener("click", (event) => { if (event.target === $("#event-dialog")) $("#event-dialog").close(); });
$("#location-button").addEventListener("click", () => showToast("More cities can be added here next."));
document.addEventListener("keydown", (event) => {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") { event.preventDefault(); $("#search-input").focus(); }
  if (event.key === "Escape" && $("#event-dialog").open) $("#event-dialog").close();
});

setupDateFilter();
renderCount(); renderEvents();
