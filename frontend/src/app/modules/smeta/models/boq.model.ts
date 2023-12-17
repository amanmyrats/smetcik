import { Project } from "../../company/models/project.model";

export class Boq {
    public id?: string;
    public project?: string;
    public project_object?: Project;
    public boq_version?: string;
    public description?: string;
    public contract_number?: string;
}
