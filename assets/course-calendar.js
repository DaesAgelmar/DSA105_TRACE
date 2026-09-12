/**
 * DSA105 · TRACE Studio semester calendar
 *
 * Set semesterStart ONCE to the Monday (or first day) of Week 1.
 * Example: "2026-09-21"
 *
 * currentWeekOverride:
 *   null  -> automatic date-based selection
 *   1..14 -> temporarily force a week if needed
 */
window.DSA105Calendar = {
  timeZone: "Europe/Istanbul",
  semesterStart: 2026-09-14,
  currentWeekOverride: null,

  weeks: [
    { week: 1, title: "How Do We Tell a Computer What to Do?", href: "weeks/week01.html" },
    { week: 2, title: "From Instructions to Executable Code", href: "weeks/week02.html" },
    { week: 3, title: "How Does a Computer Represent Information?", href: "weeks/week03.html" },
    { week: 4, title: "Turning Data into New Information", href: "weeks/week04.html" },
    { week: 5, title: "Programs That Interact", href: "weeks/week05.html" },
    { week: 6, title: "Programs That Make Decisions", href: "weeks/week06.html" },
    { week: 7, title: "Checkpoint I", href: "weeks/week07.html" },
    { week: 8, title: "Making Computers Repeat Work", href: "weeks/week08.html" },
    { week: 9, title: "Patterns inside Patterns", href: "weeks/week09.html" },
    { week: 10, title: "Breaking Problems into Reusable Pieces", href: "weeks/week10.html" },
    { week: 11, title: "Working with Many Things at Once", href: "weeks/week11.html" },
    { week: 12, title: "Programs Meet Real Data", href: "weeks/week12.html" },
    { week: 13, title: "When Programs Go Wrong", href: "weeks/week13.html" },
    { week: 14, title: "Build, Test, Explain", href: "weeks/week14.html" }
  ]
};
