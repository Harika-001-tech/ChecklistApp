export const rulesConfig = [
    {
        id: 'valuationFeePaid',
        description: 'Valuation Fee Paid',
        evaluate: (data) => data.isValuationFeePaid === true,
    },
    {
        id: 'ukResident',
        description: 'UK Resident',
        evaluate: (data) => data.isUkResident === true,
    },
    {
        id: 'riskRatingMedium',
        description: 'Risk Rating Medium',
        evaluate: (data) => data.riskRating === 'Medium',
    },
    {
        id: 'ltvBelow60',
        description: 'LTV Below 60%',
        evaluate: (data) => {
            if (data.loanRequired && data.purchasePrice) {
                const ltv = (data.loanRequired / data.purchasePrice) * 100;
                return ltv < 60;
            }
            return false;
        },
    },
];

export const evaluateChecklist = (data) => {
    return rulesConfig.map((rule) => ({
        id: rule.id,
        description: rule.description,
        status: rule.evaluate(data) ? 'Passed' : 'Failed',
    }));
};
