import { Lot } from "../../common/models/lot.model";
import { Trade } from "../../common/models/trade.model";

export class BoqItem {
    public id?: string;
    public boq?: string;
    public trade?: Trade;
    public lot?: Lot;
    public code?: string;
    public name_tm?: string;
    public name_ru?: string;
    public name_en?: string;
    public name_original?: string;
    public quantity?: string;
    public unit?: string;
    public material_unit_price?: string;
    public labor_unit_price?: string;
    public transport_unit_price?: string;
}
