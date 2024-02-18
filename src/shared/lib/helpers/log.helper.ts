import chalk from 'chalk';

export class Logger {
  public static info(message: unknown): void {
    console.info(chalk.blue(`[INFO] ${message}`));
  }

  public static error(message: string, error?: unknown): void {
    console.error(chalk.red(`[ERROR] ${message}.`));

    if (error) {
      console.error(chalk.red(`[ERROR] Reason ${this.serialize(error)}.`));
    }
  }

  private static serialize(data: object): string {
    return JSON.stringify(data, null, 2);
  }
}
