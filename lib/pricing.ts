/**
 * SCHOLARSTIKA PRICING CLASSIFICATION & BILLING RULES v1.0
 */

export type LocationType = 'RURAL' | 'URBAN';
export type DevelopmentCategory = 'DEVELOPING' | 'DEVELOPED';

export enum StudentBand {
    LT_100 = 'LT_100', // Less than 100
    B100_499 = 'B100_499', // 100 - 499
    B500_999 = 'B500_999', // 500 - 999
    GTE_1000 = 'GTE_1000', // 1000 or more
}

export interface PricingMatrix {
    [DevelopmentCategory: string]: {
        [locationType in LocationType]: {
            [band in StudentBand]: number;
        };
    };
}

// Official Pricing Matrix (USD / Year / Campus)
export const PRICING_MATRIX: PricingMatrix = {
    DEVELOPING: {
        RURAL: {
            [StudentBand.LT_100]: 30,
            [StudentBand.B100_499]: 60,
            [StudentBand.B500_999]: 100,
            [StudentBand.GTE_1000]: 150,
        },
        URBAN: {
            [StudentBand.LT_100]: 60,
            [StudentBand.B100_499]: 120,
            [StudentBand.B500_999]: 170,
            [StudentBand.GTE_1000]: 200,
        },
    },
    DEVELOPED: {
        RURAL: {
            [StudentBand.LT_100]: 70,
            [StudentBand.B100_499]: 90,
            [StudentBand.B500_999]: 120,
            [StudentBand.GTE_1000]: 180,
        },
        URBAN: {
            [StudentBand.LT_100]: 90,
            [StudentBand.B100_499]: 100,
            [StudentBand.B500_999]: 150,
            [StudentBand.GTE_1000]: 250,
        },
    },
};

/**
 * Maps student count to exactly one student band
 */
export function getStudentBand(students: number): StudentBand {
    if (students < 100) return StudentBand.LT_100;
    if (students < 500) return StudentBand.B100_499;
    if (students < 1000) return StudentBand.B500_999;
    return StudentBand.GTE_1000;
}

/**
 * Simplified country classification based on the provided requirements.
 * In a real production app, this would be a more extensive list or an API call.
 */
export function getCountryCategory(countryCode: string): DevelopmentCategory {
    // Examples of developed countries (ISO Alpha-2 codes)
    const developed = ['US', 'GB', 'CA', 'AU', 'DE', 'FR', 'JP', 'SG'];
    return developed.includes(countryCode.toUpperCase()) ? 'DEVELOPED' : 'DEVELOPING';
}

/**
 * Calculates the annual price in USD
 */
export function calculateAnnualPrice(
    countryCode: string,
    locationType: LocationType,
    studentCount: number,
    developmentCategory?: DevelopmentCategory
): number {
    const category = developmentCategory || getCountryCategory(countryCode);
    const band = getStudentBand(studentCount);
    
    return PRICING_MATRIX[category][locationType][band];
}

export const PRICING_RULE_VERSION = '1.0';
export const WESP_VERSION = '2025';
