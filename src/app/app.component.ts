import { Component } from '@angular/core';
import { BrnMenuTriggerDirective } from '@spartan-ng/ui-menu-brain';
import { HlmMenuImports } from '@spartan-ng/ui-menu-helm';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BrnMenuTriggerDirective, HlmMenuImports],
  template: `
    <button [brnMenuTriggerFor]="tpl">Test</button>
    <ng-template #tpl>
      <hlm-menu>
        <button>Test</button>
      </hlm-menu>
    </ng-template>
  `,
})
export class AppComponent {}
