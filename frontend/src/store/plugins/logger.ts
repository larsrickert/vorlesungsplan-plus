import { PiniaPluginContext } from 'pinia';
import { DebuggerEvent } from 'vue';

export function loggerPlugin(context: PiniaPluginContext): void {
  context.store.$subscribe((mutation) => {
    const events: DebuggerEvent[] = Array.isArray(mutation.events)
      ? mutation.events
      : [mutation.events];

    const changes: Record<string, { oldValue: undefined; newValue: unknown }> = {};

    events.forEach((event) => {
      changes[event.key] = { oldValue: event.oldValue, newValue: event.newValue };
    });

    console.log(
      `Pinia state from store "${mutation.storeId}" changed, mutation type: ${mutation.type}\n`,
      changes
    );
  });
}
