import { BaseCompanyUnit } from "./base-company-unit.model";

export class BaseCompanyResource {
    public id?: string;
    public name_tm?: string;
    public name_ru?: string;
    public name_en?: string;
    public name_original?: string;
    public quantity?: number;
    public unit?: string;
    public unit_object?: BaseCompanyUnit;
    public unit_price?: number;
    public brand?: string;
    public country?: string;
    public country_object?: string;
    public is_material?: boolean;
    public is_mincons?: boolean;
}
