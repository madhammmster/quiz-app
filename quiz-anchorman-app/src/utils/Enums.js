import { Enum } from 'enumify';

export class AppStatus extends Enum { };
AppStatus.initEnum([
    'WAITING_FOR_QUESTION',
    'WAITING_FOR_VOTE'
])

