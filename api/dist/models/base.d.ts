import { Model } from 'objection';
export default class Base extends Model {
    static get modelPaths(): string[];
}
