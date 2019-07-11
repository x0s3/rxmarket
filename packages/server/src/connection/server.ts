import chalk from 'chalk';
import { createServer, IncomingMessage, ServerResponse } from 'http';

export namespace Server {
  const host: string = '127.0.0.1';
  const port: number = 1337;

  const onListen = () => {
    console.info(chalk.green('[server] running'), `@ http://${host}:${port}/`);
  };

  const onClose = () => {
    console.info(chalk.green(`[server] stopped`));
  };

  const onError = (error: Error) => {
    console.error(chalk.red('[server] errored'), error.message);
  };

  export const create = async (
    app: (req: IncomingMessage, res: ServerResponse) => void
  ) =>
    createServer(app)
      .listen(port, onListen)
      .on('close', onClose)
      .on('error', onError);
}
