# Maintaining DSA105 · TRACE Studio

Internal notes for whoever maintains this repository. Not intended for the
student-facing README — see `README.md` for the public-facing overview.

## GitHub Pages deployment

Recommended simple setup:

1. Place this project at the repository root.
2. Run `quarto render`.
3. Commit the generated `docs/` directory.
4. Push to `main`.
5. In GitHub, open **Settings → Pages**.
6. Choose **Deploy from a branch**.
7. Choose branch `main` and folder `/docs`.
8. The course site will be served from:

`https://daesagelmar.github.io/DSA105_TRACE/`

## Repository structure

**Keep in this public course repository:**

- Quarto course website;
- student notebooks;
- homework notebooks;
- public datasets;
- official/public course resources.

**Keep private (do not publish here):**

- lecturer notebooks;
- solution notebooks;
- answer keys;
- detailed grading rubrics containing solutions;
- individual student responses;
- portfolio datasets.

These are maintained in a separate private repository.

## Google Forms

Each week's page links out to four evidence-collection forms:

- Weekly Quiz;
- Lab Evidence;
- Exit Ticket;
- Homework Submission.

Form links are generated with the `W0X_google_forms_generator.gs` script:
run it in Google Apps Script, then paste the resulting public URLs into the
corresponding `weeks/weekXX.qmd` file.

## Weekly publication workflow

For each module:

1. finalize `weeks/weekXX.qmd`;
2. add `notebooks/weekXX/DSA105_WXX_Student.ipynb`;
3. add `notebooks/weekXX/DSA105_WXX_Homework.ipynb`;
4. add the Google Form links;
5. run `quarto preview` to check the rendered page;
6. run `quarto render`;
7. commit and push.

## Current assets

**Week 1** (complete):

- `notebooks/week01/DSA105_W01_Student.ipynb`
- `notebooks/week01/DSA105_W01_Homework.ipynb`
- `resources/DSA105-CourseContent.pdf`

The Week 1 lecturer notebook intentionally remains outside the public site
package, per the repository-structure rules above.

**Weeks 2–7:** complete (`weeks/week02.qmd`–`week07.qmd`, including notebooks
and forms). Week 7 is the physical midterm and has no notebook or forms.

**Weeks 8–14:** scaffolded only. Each page states its official focus and the
shared weekly grammar; notebooks, evidence tasks, and forms are added as each
module is finalized.