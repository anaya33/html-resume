const { test, expect } = require('@playwright/test');

test('Resume page has all required elements', async ({ page }) => {
  await page.goto('https://anaya33.github.io/html-resume/');

  // Profile picture
  const img = page.locator('img');
  await expect(img).toBeVisible();

  // Name in h1
  const h1 = page.locator('h1');
  await expect(h1).toHaveText('Anaya Yorke');

  // 7 h2 headings
  const h2s = page.locator('h2');
  await expect(h2s).toHaveCount(7);

  // Objective section with paragraph
  await expect(page.locator('h2:has-text("Objective")')).toBeVisible();
  const objective = page.locator('p');
  await expect(objective).toBeVisible();

  // Qualification list
  await expect(page.locator('h2:has-text("Qualification")')).toBeVisible();

  // Job Experience table
  await expect(page.locator('h2:has-text("Job Experience")')).toBeVisible();
  const table = page.locator('table');
  await expect(table).toBeVisible();

  // Projects list
  await expect(page.locator('h2:has-text("Projects")')).toBeVisible();

  // Tools/Technologies list
  await expect(page.locator('h2:has-text("Tools/Technologies")')).toBeVisible();

  // Social Media links
  await expect(page.locator('h2:has-text("Social Media")')).toBeVisible();
  const githubLink = page.locator('a[href="https://github.com/anaya33"]');
  await expect(githubLink).toBeVisible();
  const linkedinLink = page.locator('a[href="https://www.linkedin.com/in/anaya-yorke/"]');
  await expect(linkedinLink).toBeVisible();

  // References
  await expect(page.locator('h2:has-text("References")')).toBeVisible();

  // Horizontal rules (at least 2)
  const hrs = page.locator('hr');
  await expect(hrs).toHaveCount(2);
});
