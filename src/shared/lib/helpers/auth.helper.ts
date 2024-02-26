export class AuthHelper {
  private static readonly ACCESS_TOKEN_KEY = 'ACCESS_TOKEN_KEY';

  static setToken(accessToken: string) {
    localStorage.setItem(this.ACCESS_TOKEN_KEY, accessToken);
  }

  static retrieveToken(): string {
    return localStorage.getItem(this.ACCESS_TOKEN_KEY) ?? '';
  }

  static clearStorage() {
    localStorage.removeItem(this.ACCESS_TOKEN_KEY);
  }
}