from playwright.sync_api import Page, expect, sync_playwright

def run(playwright):
    browser = playwright.chromium.launch()
    page = browser.new_page()
    page.goto("http://localhost:5173")

    # Scroll to the about section
    about_section = page.locator("#about")
    about_section.scroll_into_view_if_needed()

    # Wait for the slider to be visible
    expect(page.locator(".swiper-slide-active")).to_be_visible()

    page.screenshot(path="jules-scratch/verification/verification.png")
    browser.close()

with sync_playwright() as playwright:
    run(playwright)