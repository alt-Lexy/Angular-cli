import { CompanyType } from "../utils/company.utils";

export class Company {
    id: number = -1;
    infoCompany: string = "Star";
    type: CompanyType = CompanyType.SCORE_B
    infoActivity: string = "4778C - Autres commerces de détail spécialisés divers";
    infoNote: string = "75.80";
    infoScore: string = "B";

    copy(idCompany?: number): Company {
        if (idCompany){
            this.id = idCompany;
        }
        return Object.assign(new Company(), this)
    }
}
