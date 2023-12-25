import { BaseCompanyBoqItem } from "./base-company-boq-item.model";
import { BaseCompanyResource } from "./base-company-resource.model";

export class BaseCompanyConsumption {
    public id?: string;
    public boq_item?: string;
    public boq_item_object?: BaseCompanyBoqItem;
    public resource?: string;
    public resource_object?: BaseCompanyResource;
    public quantity?: string;
}
