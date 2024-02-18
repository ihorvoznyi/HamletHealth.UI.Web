import chalk from 'chalk';

export class Logger {
  public static info(message: unknown) {
    console.info(chalk.blue(`[INFO] ${message}.`));
  }

  public static error(message: string, error?: unknown) {
    console.error(chalk.red(`[ERROR] ${message}.`));

    if (error) {
      console.error(chalk.red(`[ERROR] Reason ${JSON.stringify(error)}.`));
    }
  }
}
