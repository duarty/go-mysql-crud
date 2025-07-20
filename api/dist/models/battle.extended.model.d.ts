import { Id, RelationMappings } from 'objection';
import Base from './base';
export declare class Battle extends Base {
    id: Id;
    monsterA: number;
    monsterB: number;
    winner: number;
    static tableName: string;
    static get relationMappings(): RelationMappings;
}
