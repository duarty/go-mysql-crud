import { Id, RelationMappings } from 'objection';
import Base from './base';
import { Battle } from './battle.extended.model';
export declare class Monster extends Base {
    id: Id;
    name: string;
    attack: number;
    defense: number;
    hp: number;
    speed: number;
    imageUrl: string;
    battles?: Battle[];
    static tableName: string;
    static get relationMappings(): RelationMappings;
}
