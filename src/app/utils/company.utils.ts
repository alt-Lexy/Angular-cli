export enum CompanyType {
    SCORE_A = "A",
    SCORE_B = "B",
    SCORE_C = "C",
}

export interface ImonsterProps {
    color: string;
}

export const CompanyTypeProps: {[key: string]: ImonsterProps} = {
    [CompanyType.SCORE_A] : {
        color: "rgb(0, 250, 117)",
    },
    [CompanyType.SCORE_B] : {
        color: "rgb(250, 246, 0)",
    },
    [CompanyType.SCORE_C] : {
        color: "rgb(250, 133, 0)",
    },
}