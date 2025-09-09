/* eslint-disable @typescript-eslint/no-unused-vars */
import { FormSelect, FormSelectOptions } from './select';
import { Sidenav, SidenavOptions } from './sidenav';
import { Tabs, TabsOptions } from './tabs';
/* eslint-enable @typescript-eslint/no-unused-vars */

export { Forms } from './forms';
export { FormSelect } from './select';
export { Sidenav } from './sidenav';
export { Tabs } from './tabs';

export const version = '2.2.2';

export interface AutoInitOptions {
  FormSelect?: Partial<FormSelectOptions>;
  Sidenav?: Partial<SidenavOptions>;
  Tabs?: Partial<TabsOptions>;
}

/**
 * Automatically initialize components.
 * @param context Root element to initialize. Defaults to `document.body`.
 * @param options Options for each component.
 */
export function AutoInit(context: HTMLElement = document.body, options?: Partial<AutoInitOptions>) {
  const registry = {
    FormSelect: context.querySelectorAll('select:not(.no-autoinit)'),
    Sidenav: context.querySelectorAll('.sidenav:not(.no-autoinit)'),
    Tabs: context.querySelectorAll('.tabs:not(.no-autoinit)'),
  };
  FormSelect.init(registry.FormSelect, options?.FormSelect ?? {});
  Sidenav.init(registry.Sidenav, options?.Sidenav ?? {});
  Tabs.init(registry.Tabs, options?.Tabs ?? {});
}
