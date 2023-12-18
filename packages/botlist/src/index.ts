import type { BotList } from './lib/botlist';

export { BotList } from './lib/botlist';

declare module 'discord.js' {
	interface ClientOptions {
		botList?: BotList.Options;
	}
}

declare module '@sapphire/pieces' {
	interface Container {
		botList: BotList;
	}
}

/**
 * The [@sapphire/plugin-api](https://github.com/sapphiredev/plugins/blob/main/packages/api) version that you are currently using.
 * An example use of this is showing it of in a bot information command.
 *
 * Note to Sapphire developers: This needs to explicitly be `string` so it is not typed as the string that gets replaced by esbuild
 */
// eslint-disable-next-line @typescript-eslint/no-inferrable-types
export const version: string = '[VI]{{inject}}[/VI]';
