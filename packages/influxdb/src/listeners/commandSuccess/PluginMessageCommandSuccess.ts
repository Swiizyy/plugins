import { Events, type MessageCommandSuccessPayload } from '@sapphire/framework';
import { AnalyticsListener, CommandRunTypes } from '../../index';
import { sharedCommandSuccessRun } from './_shared';

export class PluginAnalyticsListener extends AnalyticsListener {
	public constructor(context: AnalyticsListener.Context) {
		super(context, { name: 'PluginAnalyticsMessageCommandSuccess', event: Events.MessageCommandSuccess });
	}

	public run(payload: MessageCommandSuccessPayload) {
		sharedCommandSuccessRun(this, payload.command.name, CommandRunTypes.Message, payload.command.category);
	}
}
