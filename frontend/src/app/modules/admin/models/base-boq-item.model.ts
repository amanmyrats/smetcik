import { BaseLot } from "./base-lot.model";
import { BaseTrade } from "./base-trade.model";
import { BaseUnit } from "./base-unit.model";

export class BaseBoqItem {
    public id?: string;
    public trade?: BaseTrade;
    public lot?: BaseLot;
    public code?: string;
    public name_tm?: string;
    public name_ru?: string;
    public name_en?: string;
    public name_original?: string;
    public quantity?: string;
    public unit?: string;
    public unit_object?: BaseUnit;
    public material_unit_price?: string;
    public labor_unit_price?: string;
    public transport_unit_price?: string;
}
