/**
 * Automatically updates the home-page "Current module" card.
 * No site rebuild is required when the calendar moves to the next week.
 */
(function () {
  function istanbulDateString() {
    const parts = new Intl.DateTimeFormat("en-CA", {
      timeZone: (window.DSA105Calendar && window.DSA105Calendar.timeZone) || "Europe/Istanbul",
      year: "numeric",
      month: "2-digit",
      day: "2-digit"
    }).formatToParts(new Date());

    const values = {};
    parts.forEach((part) => {
      if (part.type !== "literal") values[part.type] = part.value;
    });

    return `${values.year}-${values.month}-${values.day}`;
  }

  function daysBetween(startDate, currentDate) {
    const start = new Date(`${startDate}T00:00:00Z`);
    const current = new Date(`${currentDate}T00:00:00Z`);
    return Math.floor((current - start) / 86400000);
  }

  function resolveWeek() {
    const cfg = window.DSA105Calendar;
    if (!cfg || !Array.isArray(cfg.weeks)) return null;

    if (Number.isInteger(cfg.currentWeekOverride)) {
      return cfg.weeks.find((item) => item.week === cfg.currentWeekOverride) || null;
    }

    if (!cfg.semesterStart) return null;

    const elapsed = daysBetween(cfg.semesterStart, istanbulDateString());
    const weekNumber = Math.floor(elapsed / 7) + 1;

    if (weekNumber < 1) return cfg.weeks[0];
    if (weekNumber > cfg.weeks.length) return cfg.weeks[cfg.weeks.length - 1];

    return cfg.weeks.find((item) => item.week === weekNumber) || null;
  }

  function updateCard() {
    const title = document.getElementById("current-week-title");
    const link = document.getElementById("current-week-link");
    const status = document.getElementById("current-week-status");

    if (!title || !link) return;

    const item = resolveWeek();

    if (!item) {
      title.textContent = "Current week not configured";
      link.textContent = "Open Weekly Modules →";
      link.href = "learning-path.html";
      if (status) {
        status.textContent = "Set semesterStart in assets/course-calendar.js.";
      }
      return;
    }

    title.textContent = `Week ${item.week} — ${item.title}`;
    link.textContent = `Open Week ${item.week} →`;
    link.href = item.href;

    if (status) {
      status.textContent = "Automatically selected from the teaching calendar.";
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", updateCard);
  } else {
    updateCard();
  }
})();
