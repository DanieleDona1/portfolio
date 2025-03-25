import { Routes } from '@angular/router';
import { MainContentComponent } from './main_content/main-content.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ImprintComponent } from './imprint/imprint.component';

export const routes: Routes = [
  {path: '', component: MainContentComponent},
  {path: 'privacy-policy', component: PrivacyPolicyComponent},
  {path: 'imprint', component: ImprintComponent},
];
