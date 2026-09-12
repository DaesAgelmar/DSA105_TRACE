# DSA105 · TRACE Studio

TRACE = **Thinking, Reasoning, Algorithms, Coding & Execution**.

This scaffold is designed for the existing public repository:

`DaesAgelmar/DSA105_FoAP`

## Local preview

```bash
quarto preview
```

## Render

```bash
quarto render
```

The rendered website is written to:

```text
docs/
```

## GitHub Pages deployment

Recommended simple setup:

1. Place this project at the repository root.
2. Run `quarto render`.
3. Commit the generated `docs/` directory.
4. Push to `main`.
5. In GitHub open **Settings → Pages**.
6. Choose **Deploy from a branch**.
7. Choose branch `main` and folder `/docs`.
8. The course site will be served from:

`https://daesagelmar.github.io/DSA105_FoAP/`

## Public repository

Keep these in the public course repository:

- Quarto course website;
- student notebooks;
- homework notebooks;
- public datasets;
- official/public course resources.

## Keep private

Do **not** publish:

- lecturer notebooks;
- solution notebooks;
- answer keys;
- detailed grading rubrics containing solutions;
- individual student responses;
- portfolio datasets.

A separate private repository such as `DSA105-Instructor` is recommended.

## Google Forms

Week 1 currently shows placeholders for:

- Weekly Quiz;
- Lab Evidence;
- Exit Ticket;
- Homework Submission.

The previously prepared Week 1 pilot package contains `W01_google_forms_generator.gs`.
Run it in Google Apps Script and then paste the generated public URLs into `weeks/week01.qmd`.

## Weekly publication workflow

For each module:

1. finalize `weeks/weekXX.qmd`;
2. add `notebooks/weekXX/DSA105_WXX_Student.ipynb`;
3. add `DSA105_WXX_Homework.ipynb`;
4. add Google Form links;
5. run `quarto preview`;
6. run `quarto render`;
7. commit and push.

## Current Week 1 assets

Included:

- `notebooks/week01/DSA105_W01_Student.ipynb`
- `notebooks/week01/DSA105_W01_Homework.ipynb`
- `resources/DSA105-CourseContent.pdf`

The Week 1 lecturer notebook intentionally remains outside the public site package.
