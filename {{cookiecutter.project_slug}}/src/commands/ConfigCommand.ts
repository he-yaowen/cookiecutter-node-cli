import {Command} from "commander";
import {Config} from "../config";

function ConfigCommand(config: Config): Command
{
    const command = new Command("config");

    command.description("print configurations");
    command.action(() => {
        process.stdout.write(JSON.stringify(config, null, 4));
        process.stdout.write("\n");
    });

    return command;
}

export default ConfigCommand;
