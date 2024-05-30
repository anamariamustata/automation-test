import { Page, Locator } from '@playwright/test';

class LoginPage {
  page: Page;
  loginBtn: Locator;
  headingText: Locator;
  homeLink: Locator;
  searchIcon: Locator;
  navLinks: Locator;

  constructor(page: Page) {
    this.page = page;
    this.headingText = page.locator('text=Swag Labs')
    this.loginBtn = page.locator('button[id="login-button"]');
  
  }

  async navigate() {
    await this.page.goto('/');
  }


}

export default LoginPage; 