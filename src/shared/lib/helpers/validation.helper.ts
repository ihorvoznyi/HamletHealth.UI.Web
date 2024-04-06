import chalk from 'chalk';
import { Schema, ValidationError } from 'yup';

export const validateWithYup = async <T>(schema: Schema<T>, data: unknown): Promise<T | never> => {
  try {
    return schema.validate(data, { abortEarly: false });
  }
  catch (error) {
    if (error instanceof ValidationError) {
      error.inner.forEach((err) => {
        console.error(chalk.red(`${err.path}: ${err.message}`));
      });
    } else {
      console.error(chalk.red('An unexpected error occurred during validation'));
    }

    process.exit(1);
  }
};
