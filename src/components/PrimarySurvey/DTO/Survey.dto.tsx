
export interface StoreSurveyRequestBodyDTO {
    title: string;
    discription: string;
    durationInSec: number;
    creator: string;
    categories: any[];
    totalCost: string;
    balance: string;
    isPrimary: boolean;
    surveyQuestions: any[];
    isGated: boolean;
}