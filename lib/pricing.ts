/**
 * SCHOLARSTIKA PRICING STRATEGY v2.0
 */

export type LocationType = 'RURAL' | 'URBAN';
export type DevelopmentCategory = 'DEVELOPING' | 'DEVELOPED';

export enum StudentBand {
    B1_100 = '1 - 100',
    B101_300 = '101 - 300',
    B301_700 = '301 - 700',
    B701_1500 = '701 - 1,500',
    B1501_3000 = '1,501 - 3,000',
}

// Base annual prices based on student population
export const BASE_PRICES: Record<StudentBand, number> = {
    [StudentBand.B1_100]: 150,
    [StudentBand.B101_300]: 240,
    [StudentBand.B301_700]: 420,
    [StudentBand.B701_1500]: 720,
    [StudentBand.B1501_3000]: 1200,
};

// Modifiers
export const MODIFIERS = {
    COUNTRY: {
        DEVELOPED: 1.00,
        DEVELOPING: 0.60,
    },
    LOCATION: {
        URBAN: 1.00,
        RURAL: 0.85,
    },
    BRANCH: 0.25, // +25% per extra branch
};

/**
 * Maps student count to a student band
 */
export function getStudentBand(students: number): StudentBand {
    if (students <= 100) return StudentBand.B1_100;
    if (students <= 300) return StudentBand.B101_300;
    if (students <= 700) return StudentBand.B301_700;
    if (students <= 1500) return StudentBand.B701_1500;
    return StudentBand.B1501_3000;
}

/**
 * Calculates the annual price in USD based on the Scholarstika Pricing Strategy
 * Formula: Final Annual Price = Base Price × Country Modifier × Location Modifier + Additional Branch Charges
 * Where: Additional Branch Charge = Main School Price × 25% × Number of Extra Branches
 */
export function calculateAnnualPrice(
    studentCount: number,
    countryCategory: DevelopmentCategory,
    locationType: LocationType,
    totalBranches: number = 1
): { mainSchoolPrice: number; extraBranchCharge: number; finalPrice: number; basePrice: number } {
    const band = getStudentBand(studentCount);
    const basePrice = BASE_PRICES[band];
    
    const countryMod = MODIFIERS.COUNTRY[countryCategory];
    const locationMod = MODIFIERS.LOCATION[locationType];
    
    // Main school price (Base Price × Country Modifier × Location Modifier)
    const mainSchoolPrice = Math.round(basePrice * countryMod * locationMod);
    
    // Additional branch charge (Main School Price × 25% × Number of Extra Branches)
    const extraBranches = Math.max(0, totalBranches - 1);
    const extraBranchCharge = Math.round(mainSchoolPrice * MODIFIERS.BRANCH * extraBranches);
    
    const finalPrice = mainSchoolPrice + extraBranchCharge;
    
    return {
        basePrice,
        mainSchoolPrice,
        extraBranchCharge,
        finalPrice
    };
}

export const PRICING_RULE_VERSION = '2.0';
export const SCHOLARSTIKA_STRATEGY = '2026';

export const DEVELOPED_COUNTRY_NAMES = [
    "Albania", "Andorra", "Australia", "Austria", "Belarus", "Belgium",
    "Bosnia and Herzegovina", "Bulgaria", "Canada", "Croatia", "Cyprus",
    "Czech Republic", "Denmark", "Estonia", "Finland", "France", "Germany",
    "Greece", "Vatican City State (Holy See)", "Hungary", "Iceland", "Ireland", "Israel",
    "Italy", "Japan", "Latvia", "Liechtenstein", "Lithuania", "Luxembourg",
    "Malta", "Monaco", "Montenegro", "Netherlands", "New Zealand",
    "Macedonia", "Norway", "Poland", "Portugal", "South Korea",
    "Moldova", "Romania", "Russia", "San Marino",
    "Serbia", "Slovakia", "Slovenia", "Spain", "Sweden", "Switzerland",
    "Ukraine", "United Kingdom", "United States"
];

export function getCountryCategory(countryName: string): DevelopmentCategory {
    if (DEVELOPED_COUNTRY_NAMES.includes(countryName)) {
        return 'DEVELOPED';
    }
    return 'DEVELOPING';
}

