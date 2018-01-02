import {AppCommonModule} from '../components/common/common.module';
import {ShellModule} from '../components/shell/shell.module';
import {AccountModule} from '../components/account/account.module';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';


export const CoreModule = [FormsModule, HttpModule, AppCommonModule, ShellModule, AccountModule];
