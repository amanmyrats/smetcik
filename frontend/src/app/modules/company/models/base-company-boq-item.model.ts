import { BaseCompanyLot } from "./base-company-lot.model";
import { BaseCompanyTrade } from "./base-company-trade.model";
import { BaseCompanyUnit } from "./base-company-unit.model";

export class BaseCompanyBoqItem {
    public id?: string;
    public trade?: BaseCompanyTrade;
    public lot?: BaseCompanyLot;
    public code?: string;
    public name_tm?: string;
    public name_ru?: string;
    public name_en?: string;
    public name_original?: string;
    public quantity?: string;
    public unit?: string;
    public unit_object?: BaseCompanyUnit;
    public material_unit_price?: string;
    public labor_unit_price?: string;
    public transport_unit_price?: string;
}
