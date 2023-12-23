import { Events } from '@sapphire/framework';
import type { Guild } from 'discord.js';
import { AnalyticsListener, Actions } from '../../index';
import { sharedGuildRun } from './_shared';

export class PluginAnalyticsListener extends AnalyticsListener {
	public constructor(context: AnalyticsListener.Context) {
		super(context, { name: 'PluginAnalyticsGuildDelete', event: Events.GuildDelete });
	}

	public run(guild: Guild) {
		sharedGuildRun(this, guild, Actions.Subtraction);
	}
}
